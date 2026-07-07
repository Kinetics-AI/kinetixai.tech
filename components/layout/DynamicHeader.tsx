// components/layout/DynamicHeader.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";
// import { Header1 } from "./header1";

export function DynamicHeader() {
  const pathname = usePathname();

    
  // if (pathname.includes("/headband")) {
  //   return <Header1 />;
  // }

  // 默认渲染 Header
  return <Header />;
}