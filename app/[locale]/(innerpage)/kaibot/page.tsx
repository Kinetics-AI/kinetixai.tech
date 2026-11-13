import { getKaibotMedia } from '@/lib/content-api';

import KaibotClient from './kaibot-client';

interface Props {
    params: Promise<{ locale: string }>;
}

/**
 * KaiBot 页面
 * 服务端从 CMS「KaiBot」栏目的栏目配置拉取视频与封面,
 * 接口异常或后台未填时 lib/content-api.ts 内置兜底资源,保证页面不白屏
 */
export default async function Page({ params }: Props) {
    const { locale } = await params;

    const media = await getKaibotMedia(locale);

    return <KaibotClient media={media} />;
}
