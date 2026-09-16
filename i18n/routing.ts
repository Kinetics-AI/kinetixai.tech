import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  // 全站链接统一使用 /en、/zh 显式前缀(本站未挂 next-intl 中间件,无前缀 URL 会 404)
  // as-needed 会让默认语言 en 生成无前缀链接(如 /docs/kaihand),点击后落到 not-found 兜底重定向
  localePrefix: 'always'
});
