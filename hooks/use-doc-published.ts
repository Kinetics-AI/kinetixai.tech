'use client';

import { useEffect, useState } from 'react';

/**
 * 查询文档(或文档树根节点)是否已发布,用于控制站内文档入口的显隐(通用)
 *
 * 用法:传入 CMS 文档的 id 或 slug,例如
 *   - KaiEgo 文档树入口: useDocPublished(`${locale}-kaiego`)
 *   - 底部隐私政策:     useDocPublished(`${locale}-privacy`)
 * 后台把对应文档改为草稿后,页面入口会在缓存过期后自动隐藏。
 *
 * 兜底策略:仅在接口明确返回 published=false 时隐藏;
 * 接口异常或状态未知时保持显示,避免 CMS 故障导致入口全部消失。
 */
export function useDocPublished(idOrSlug?: string): boolean {
    const [published, setPublished] = useState(true);

    useEffect(() => {
        if (!idOrSlug) return;
        let alive = true;
        fetch(`/api/doc-status/${encodeURIComponent(idOrSlug)}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((data: { published?: boolean | null } | null) => {
                if (alive && data && data.published === false) {
                    setPublished(false);
                }
            })
            .catch(() => {
                // 网络异常保持显示
            });
        return () => {
            alive = false;
        };
    }, [idOrSlug]);

    return published;
}
