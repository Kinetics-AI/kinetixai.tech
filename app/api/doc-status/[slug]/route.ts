import { getDocStatus } from '@/lib/doc-api';

/**
 * 文档发布状态查询代理(供前端 hook 调用,服务端转发 CMS 开放接口)
 * 浏览器不直接访问 CMS:避免跨域问题,也不暴露 CMS 域名与 X-Api-Key
 * published 为 null 表示状态未知(接口异常或文档不存在),调用方应保持入口显示
 *
 * 注意两点:
 * 1) 这里不能用 Response.json():它依赖较新版本的 undici,线上 Node 版本偏低时
 *    会直接抛 TypeError,表现为接口 500(而其它页面不走这个静态方法,所以只有这里挂)。
 *    统一改成 new Response(字符串)。
 * 2) 整个查询包在 try/catch 里:CMS 不可达、超时、DNS 异常都不应该让接口 500,
 *    而是返回 200 + published:null,让前端按「状态未知」保持入口显示。
 */
export async function GET(
    _req: Request,
    ctx: { params: Promise<{ slug: string }> }
) {
    // Next 15 的 params 是 Promise(运行时直接 await 普通对象也成立,不影响降级)
    const { slug } = await ctx.params;

    let published: boolean | null = null;
    try {
        const status = await getDocStatus(decodeURIComponent(slug));
        published = status ? status.published : null;
    } catch (err) {
        // 失败原因留在服务端日志,响应体保持可用
        console.error('[doc-status] 查询文档状态失败:', slug, err);
    }

    return new Response(JSON.stringify({ published }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=10',
        },
    });
}
