// components/layout/DynamicHeader.tsx
"use client"; // 必须是客户端组件，因为要使用 usePathname

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Header1 } from "./header1";

export function DynamicHeader() {
  const pathname = usePathname();

    
  // 例：/about 开头的页面用 Header1，其他用 Header
  if (pathname.includes("/headband")) {
    return <Header1 />;
  }

  // 默认渲染 Header
  return <Header />;
}