import type { NextConfig } from "next";

// i18n
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    './i18n/request.ts'
);

const nextConfig: NextConfig = {
    /* config options here */
    //output: 'export', 

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.kinetixai.cn',
                pathname: '/**',
            },
            // CMS 后台直接上传的图片(未开对象存储时为本站 /uploads 路径)
            {
                protocol: 'https',
                hostname: 'kaiapi.kinetixai.cn',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'cwdl.local.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cwdl.local.com',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true,
        path: '/',
    },
};

export default withNextIntl(nextConfig);
