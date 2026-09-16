import { getDocStatus } from '@/lib/doc-api';

/**
 * 文档发布状态查询代理(供前端 hook 调用,服务端转发 CMS 开放接口)
 * 浏览器不直接访问 CMS:避免跨域问题,也不暴露 CMS 域名与 X-Api-Key
 * published 为 null 表示状态未知(接口异常或文档不存在),调用方应保持入口显示
 */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const status = await getDocStatus(decodeURIComponent(slug));

    return Response.json(
        { published: status ? status.published : null },
        { headers: { 'Cache-Control': 'public, max-age=10' } }
    );
}
