import type { NextConfig } from "next";

// i18n
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    './i18n/request.ts'
);

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.kinetixai.cn',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true,
        path: '/',
    },
};

export default withNextIntl(nextConfig);
