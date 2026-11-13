'use client';

import { useTranslations } from 'next-intl';

import { FadeInUp } from "@/components/animation/fade-in-up"

import { ResearchList } from '@/components/research/ResearchList';
import type { ResearchItem } from '@/lib/content-api';

interface Props {
    /** 栏目配置(后台「内容管理 → 研究 → 栏目配置」) */
    config: Record<string, string>;
    /** 研究列表(后台「研究」栏目下的「研究」内容) */
    items: ResearchItem[];
}

/**
 * 研究
 * 页面标题与简介来自 CMS 栏目配置,列表来自栏目下的内容;
 * 后台未配置时回落到多语言文案与静态数据,保证页面不空白
 */
export default function ResearchClient({ config, items }: Props) {
    const t = useTranslations('Research');

    /** 取配置文案:中英文各是独立站点,同一字段只维护一种语言;取不到时回落到多语言文案 */
    const pickText = (key: string, fallback: string) => (config[key] || '').trim() || fallback;

    const label = pickText('label', t('label'));
    const para = pickText('para', '');

    return (
        <div className="research-main">
            <div className="inner-s6">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {label}
                    </FadeInUp>
                    {para ? (
                        <FadeInUp
                            className="para"
                            delay={0.1}
                            dangerouslySetInnerHTML={{ __html: para }}
                        />
                    ) : (
                        <FadeInUp className="para" delay={0.1}>
                            {t.rich('para', {
                                p: (chunks) => <p>{chunks}</p>
                            })}
                        </FadeInUp>
                    )}
                    <ResearchList items={items} />
                </div>
            </div>
        </div>
    )
}
