/**
 * CMS 内容开放接口封装(/api/openapi/content/*)
 *
 * 服务端调用,请求头 X-Api-Key 鉴权;浏览器不直连 CMS,
 * 既避免跨域,也不暴露 CMS 域名与密钥。
 * 接口本身不绑定业务:更换 channel 即可复用其它栏目。
 */

import { indexTechData } from '@/data/indexTech';
import { companyListData } from '@/data/companyList';
import { researchListData } from '@/data/researchList';

/** CMS 内容条目(内容模型保留字段 + 扩展字段) */
export interface CmsContentItem {
    id: number;
    channel_id: number;
    model_id: number;
    title: string;
    description?: string | null;
    /** 封面图 */
    thumb?: string | null;
    /** 自定义链接,首页 banner 用作视频地址(mp4) */
    ext_url?: string | null;
    release_time?: string | null;
    sort_num?: number;
    sort_weight?: number;
    /** 内容模型里非保留字段(存 l_content_txt),如上传的视频 video */
    ext?: Record<string, unknown>;
    seo?: Record<string, unknown>;
}

export interface CmsContentQuery {
    /** 栏目别名或ID,如 banner / 1 */
    channel?: string | number;
    model_id?: number;
    keyword?: string;
    page?: number;
    limit?: number;
    /** 排序字段,前缀 - 表示倒序,如 -sort_num */
    sort?: string;
    /** 只返回指定字段,逗号分隔 */
    fields?: string;
    /** CMS 站点ID:中文站 1、英文站 2(由 localeOf 推导,一般不手写) */
    site_id?: number;
}

// 优先读 CMS_API_*(未配置时复用文档接口的 DOC_API_* 配置)
const API_BASE = process.env.CMS_API_BASE || process.env.DOC_API_BASE || 'https://kaiapi.kinetixai.cn';
const API_KEY = process.env.CMS_API_KEY || process.env.DOC_API_KEY || 'd7f68feb0c6f908ac347bfc34c5c09ec7876363e';

/**
 * 语言 → CMS 站点ID
 * CMS 后台「站点管理」里按语言维护独立站点,前台同一套接口靠 site_id 取不同站点的数据
 */
const SITE_ID_BY_LOCALE: Record<string, number> = {
    zh: Number(process.env.CMS_SITE_ID_ZH || 1),
    en: Number(process.env.CMS_SITE_ID_EN || 2),
};

/** 取 locale 对应的站点ID,未配置的语言回落到中文站 */
function siteIdOf(locale?: string): number {
    const key = (locale || 'zh').toLowerCase();
    return SITE_ID_BY_LOCALE[key] ?? SITE_ID_BY_LOCALE.zh;
}

/**
 * 默认缓存时长(秒)
 * CMS 开放接口自身不缓存,内容下线(status=7)后接口立即过滤;
 * 前台看到旧内容的时间差全部来自 Next.js 的 Data Cache / 全路由缓存:
 * 过期后首次访问仍返回旧页面(ISR 的 stale-while-revalidate)，
 * 到下一次访问才看到新数据，所以原来 60s 实际要 2~3 分钟才生效。
 * 内容改动要求近实时，这里收到 10s。
 */
const REVALIDATE_CONTENT = 10;

/** 栏目配置(标题、按钮、视频等)变动频率更低,同样保持 10s */
const REVALIDATE_CONFIG = 10;

/** 接口结果:ok=false 表示请求失败(网络异常/非 200/业务码非 200)，data 可能为 null */
interface ApiResult<T> {
    ok: boolean;
    data: T | null;
}

async function apiFetch<T>(path: string, revalidate = REVALIDATE_CONTENT): Promise<ApiResult<T>> {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: { 'X-Api-Key': API_KEY },
        next: { revalidate },
        signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { ok: false, data: null };
    const json = await res.json();
    if (!json || json.code !== 200) return { ok: false, data: null };
    return { ok: true, data: json.data as T };
}

function toQuery(query: Record<string, string | number | undefined>): string {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null && value !== '') {
            search.set(key, String(value));
        }
    }
    const qs = search.toString();
    return qs ? `?${qs}` : '';
}

/**
 * 通用内容列表:按栏目/模型取已发布内容
 * 返回 null 表示「接口异常」,调用方可用静态数据兜底防白屏;
 * 返回 [] 表示「接口正常但这批内容已全部下线/清空」,此时必须如实渲染空,
 * 不能再用静态数据顶上,否则运营下线的内容会被兜底数据重新显示出来。
 */
export async function getContentList(query: CmsContentQuery = {}): Promise<CmsContentItem[] | null> {
    const { ok, data } = await apiFetch<{ total: number; list: CmsContentItem[] }>(
        `/api/openapi/content/list${toQuery({ ...query })}`
    );
    if (!ok || !data) return null;
    return data.list ?? [];
}

/**
 * 栏目配置(栏目属性键值)
 * 存放在 CMS 的栏目配置里,按 key 取值;接口异常时返回空对象,由调用方兜底
 * locale 决定取哪个站点(中文站 1 / 英文站 2)的配置
 */
export async function getChannelConfig(
    alias: string,
    locale?: string,
    revalidate = REVALIDATE_CONFIG
): Promise<Record<string, string>> {
    const { data } = await apiFetch<{ channel: unknown; config: Record<string, unknown> }>(
        `/api/openapi/content/channel-config${toQuery({ channel: alias, site_id: siteIdOf(locale) })}`,
        revalidate
    );

    const raw = data?.config;
    if (!raw || typeof raw !== 'object') return {};

    const config: Record<string, string> = {};
    for (const [key, value] of Object.entries(raw)) {
        config[key] = typeof value === 'string' ? value : '';
    }

    return config;
}

/**
 * 栏目配置里的「按钮链接」转成可用的 href
 * 后台按运营习惯可能填站内路径(about)或完整地址,站内路径统一补上语言前缀
 */
export function resolveChannelHref(extUrl: string, locale: string, fallback: string): string {
    const url = (extUrl || '').trim();
    if (!url) return fallback;
    if (/^(https?:)?\/\//i.test(url)) return url;
    return `/${locale}/${url.replace(/^\/+/, '')}`;
}

/** 读取扩展字段里的字符串值(如上传组件回写的 video) */
function pickExtValue(ext: Record<string, unknown> | undefined, key: string): string {
    const value = ext ? ext[key] : undefined;
    return typeof value === 'string' ? value.trim() : '';
}

/** 首页 banner 栏目别名(后台「栏目管理 → 首页banner管理」) */
const BANNER_CHANNEL = process.env.CMS_BANNER_CHANNEL || 'banner';

/** 首页首屏一屏的数据 */
export interface BannerSlide {
    id: number | string;
    /** 视频地址,空串表示该屏只有封面图 */
    video: string;
    /** 封面图(视频 poster) */
    poster: string;
    /** 标题,可含 <p>/<span> 标签;空串表示该屏不显示文案(标题为选填) */
    title: string;
}

/** 接口不可用时的兜底数据,与原静态写死的首屏保持一致 */
const DEFAULT_BANNER_SLIDES: BannerSlide[] = [
    {
        id: 'default-1',
        video: 'https://assets.kinetixai.cn/202603262/2026421172756.mp4',
        poster: 'https://assets.kinetixai.cn/kinetixai/index/banner-20260421.jpg',
        title: '打造超高拟人机器人<p>智能涌现、运动涌现、情感涌现</p>',
    },
    {
        id: 'default-2',
        video: 'https://assets.kinetixai.cn/AMS/251212_raw.mp4',
        poster: 'https://assets.kinetixai.cn/kinetixai/index/banner-20251212.jpg',
        title: '',
    },
    {
        id: 'default-3',
        video: 'https://assets.kinetixai.cn/20260119/20260203.mp4',
        poster: 'https://assets.kinetixai.cn/kinetixai/index/banner-20251212.jpg',
        title: '',
    },
];

/**
 * 首页首屏 banner
 * 字段映射(后台内容模型「banner管理」):标题(选填) → title,封面图 → thumb,
 * 排序 → sort_num(越大越靠前);视频优先取「视频地址」ext_url,
 * 未填写时回退到上传组件产生的 ext.video
 */
export async function getIndexBannerSlides(locale?: string): Promise<BannerSlide[]> {
    const items = await getContentList({
        channel: BANNER_CHANNEL,
        site_id: siteIdOf(locale),
        limit: 20,
        sort: '-sort_num',
        fields: 'id,title,thumb,ext_url,sort_num,ext',
    });

    // 只有接口异常才用静态数据兜底;接口正常但为空说明 banner 已全部下线,首屏就应留空
    if (items === null) return DEFAULT_BANNER_SLIDES;

    const slides = items
        .map((item) => ({
            id: item.id,
            video: (item.ext_url || '').trim() || pickExtValue(item.ext, 'video'),
            poster: (item.thumb || '').trim(),
            title: (item.title || '').trim(),
        }))
        .filter((slide) => slide.video || slide.poster);

    // 接口正常但一条可用内容也没有 → 首屏留空，不再回退静态数据
    return slides;
}

/** 首页「核心技术」栏目别名(后台「栏目管理 → 首页核心技术」) */
const TECH_CHANNEL = process.env.CMS_TECH_CHANNEL || 'tech';

/** 「核心技术」内容模型 ID(后台「内容模型 → 核心技术管理」),用于排除栏目下的历史内容 */
const TECH_MODEL_ID = 13;

/** 核心技术轮播一屏的数据 */
export interface TechSlide {
    id: number | string;
    /** 画面与底部导航显示的文字 */
    title: string;
    /** 视频地址,空串表示该屏只有封面图 */
    video: string;
    /** 封面图(视频 poster) */
    poster: string;
}

/** 接口不可用时的兜底数据,沿用改造前的静态数据(data/indexTech.tsx) */
function defaultTechSlides(locale: string): TechSlide[] {
    const rows = indexTechData[locale] || indexTechData.en;

    return rows.map((row, index) => ({
        id: `default-tech-${index}`,
        title: row.title,
        video: row.pic,
        poster: '',
    }));
}

/**
 * 首页「核心技术」轮播
 * 字段映射(后台内容模型「核心技术管理」):标题 → title(中英文各由对应站点维护),
 * 排序 → sort_num(越大越靠前);视频优先取「视频地址」ext_url,未填写时回退到 ext.video
 */
export async function getIndexTechSlides(locale: string): Promise<TechSlide[]> {
    const items = await getContentList({
        channel: TECH_CHANNEL,
        model_id: TECH_MODEL_ID,
        site_id: siteIdOf(locale),
        limit: 20,
        sort: '-sort_num',
        fields: 'id,title,thumb,ext_url,sort_num,ext',
    });

    // 只有接口异常才用静态数据兜底;接口正常但为空说明内容已全部下线/清空
    if (items === null) return defaultTechSlides(locale);

    const slides = items
        .map((item) => ({
            id: item.id,
            title: (item.title || '').trim(),
            video: (item.ext_url || '').trim() || pickExtValue(item.ext, 'video'),
            poster: (item.thumb || '').trim(),
        }))
        .filter((slide) => slide.title && (slide.video || slide.poster));

    // 接口正常但一条可用内容也没有 → 留空，不再回退静态数据
    return slides;
}

/** 「关于我们」栏目别名(后台「栏目管理 → 关于我们」) */
const ABOUT_CHANNEL = process.env.CMS_ABOUT_CHANNEL || 'about';

/** 「团队故事」内容模型 ID(后台「内容模型 → 团队故事」) */
const STORY_MODEL_ID = 6;

/** 团队故事时间轴一项 */
export interface StorySlide {
    id: number | string;
    /** 左侧时间节点,如 Beginnings、2024;可含 HTML */
    year: string;
    /** 右侧标题;可含 HTML */
    title: string;
    /** 配图,支持 gif */
    pic: string;
}

/** 接口不可用时的兜底数据(data/companyList.tsx 原静态数据) */
function defaultStorySlides(locale: string): StorySlide[] {
    const rows = companyListData[locale] || companyListData.en;

    return rows.map((row, index) => ({
        id: `default-story-${index}`,
        year: row.year,
        title: row.title,
        pic: row.pic,
    }));
}

/**
 * 「关于我们」团队故事时间轴
 * 字段映射(后台内容模型「团队故事」):标题 → title(中英文各由对应站点维护),
 * 时间节点 → 非保留字段 year,配图 → thumb,排序 → sort_num(越大越靠前)
 */
export async function getCompanyStorySlides(locale: string): Promise<StorySlide[]> {
    const items = await getContentList({
        channel: ABOUT_CHANNEL,
        model_id: STORY_MODEL_ID,
        site_id: siteIdOf(locale),
        limit: 30,
        sort: '-sort_num',
        fields: 'id,title,thumb,sort_num,ext',
    });

    // 只有接口异常才用静态数据兜底;接口正常但为空说明内容已全部下线/清空
    if (items === null) return defaultStorySlides(locale);

    const slides = items
        .map((item) => ({
            id: item.id,
            year: pickExtValue(item.ext, 'year'),
            title: (item.title || '').trim(),
            pic: (item.thumb || '').trim(),
        }))
        .filter((slide) => slide.title && slide.pic);

    // 接口正常但一条可用内容也没有 → 留空，不再回退静态数据
    return slides;
}

/** 「研究」栏目别名(后台「栏目管理 → 研究」) */
const RESEARCH_CHANNEL = process.env.CMS_RESEARCH_CHANNEL || 'research';

/** 「研究」内容模型 ID(后台「内容模型 → 研究」) */
const RESEARCH_MODEL_ID = 7;

/** 研究列表一项 */
export interface ResearchItem {
    id: number | string;
    /** 图片左上角标签,如 χ0、AMS */
    tips: string;
    /** 标题 */
    title: string;
    /** 时间(已按语言取好的文本) */
    date: string;
    /** 配图 */
    pic: string;
    /** 外链:完整地址或站内路径(如 research/AMS) */
    url: string;
}

/** 接口不可用时的兜底数据(data/researchList.tsx 原静态数据) */
function defaultResearchItems(locale: string): ResearchItem[] {
    const rows = researchListData[locale] || researchListData.en;

    return rows.map((row, index) => ({
        id: `default-research-${index}`,
        tips: row.tips,
        title: row.title,
        date: row.date,
        pic: row.pic,
        url: row.url,
    }));
}

/**
 * 研究列表
 * 字段映射(后台内容模型「研究」):标签 → 非保留字段 tips,标题 → title(中英文各由对应站点维护),
 * 时间 → 非保留字段 date,配图 → thumb,外链 → ext_url,排序 → sort_num(越大越靠前)
 */
export async function getResearchItems(locale: string): Promise<ResearchItem[]> {
    const items = await getContentList({
        channel: RESEARCH_CHANNEL,
        model_id: RESEARCH_MODEL_ID,
        site_id: siteIdOf(locale),
        limit: 20,
        sort: '-sort_num',
        fields: 'id,title,thumb,ext_url,sort_num,ext',
    });

    // 只有接口异常才用静态数据兜底;接口正常但为空说明内容已全部下线/清空,
    // 否则「研究」两条内容下线后,前台会继续显示 data/researchList.tsx 里的静态数据
    if (items === null) return defaultResearchItems(locale);

    const list = items
        .map((item) => ({
            id: item.id,
            tips: pickExtValue(item.ext, 'tips'),
            title: (item.title || '').trim(),
            date: pickExtValue(item.ext, 'date').trim(),
            pic: (item.thumb || '').trim(),
            url: (item.ext_url || '').trim(),
        }))
        .filter((item) => item.title && item.pic && item.url);

    // 接口正常但一条可用内容也没有 → 留空，不再回退静态数据
    return list;
}

/** 「首页公司简介」栏目别名(后台「栏目管理 → 首页公司简介」) */
const HOME_INTRO_CHANNEL = process.env.CMS_HOME_INTRO_CHANNEL || 'homeintro';

/** 首页公司简介区块(栏目配置,对应后台栏目模型的字段) */
export interface CompanyIntro {
    /** 标题,允许 HTML,如 <span>公司</span>简介 */
    title: string;
    /** 简介正文,允许 HTML(多个 <p>) */
    description: string;
    /** 按钮文案,空串表示不显示按钮 */
    buttonText: string;
    /** 按钮链接,空串由调用方回退默认链接 */
    buttonUrl: string;
}

/** 未配置时返回空字串,由页面回退 i18n 文案 */
export async function getIndexCompanyIntro(locale?: string): Promise<CompanyIntro> {
    const config = await getChannelConfig(HOME_INTRO_CHANNEL, locale, 10);

    return {
        title: (config.title || '').trim(),
        description: (config.description || '').trim(),
        buttonText: (config.button_text || '').trim(),
        buttonUrl: (config.ext_url || '').trim(),
    };
}

/** 「KaiBot」栏目别名(后台「栏目管理 → KaiBot」) */
const KAIBOT_CHANNEL = process.env.CMS_KAIBOT_CHANNEL || 'kaibot';

/** KaiBot 页面视频数据 */
export interface KaibotMedia {
    title: string;
    /** 封面图(视频 poster) */
    poster: string;
    /** 视频地址(mp4) */
    video: string;
}

/** 接口不可用或后台未填时的兜底,与改造前页面写死的资源一致 */
const DEFAULT_KAIBOT_MEDIA: KaibotMedia = {
    title: 'KaiBot',
    poster: 'https://assets.kinetixai.cn/20251211/2026051801.jpg',
    video: 'https://assets.kinetixai.cn/20251211/2026051801.mp4',
};

/**
 * KaiBot 页面视频
 * 后台「栏目配置」里视频优先取「视频地址」video_url,未填时回退上传组件回写的 video
 */
export async function getKaibotMedia(locale?: string): Promise<KaibotMedia> {
    const config = await getChannelConfig(KAIBOT_CHANNEL, locale, 10);

    return {
        title: (config.title || '').trim() || DEFAULT_KAIBOT_MEDIA.title,
        poster: (config.thumb || '').trim() || DEFAULT_KAIBOT_MEDIA.poster,
        video: (config.video_url || '').trim()
            || (config.video || '').trim()
            || DEFAULT_KAIBOT_MEDIA.video,
    };
}
