import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "FieldSense 场感",
  tagline: "近场扫描系统与电磁云图分析平台",
  description: "让电磁测试更高效、更直观。",
  contact: {
    email: "sales@fieldsense.com",
    phone: "400-800-2026",
    workTime: "周一至周五 9:00 - 18:00"
  },
  nav: [
    { label: "首页", href: "/" },
    { label: "产品中心", href: "/products" },
    { label: "解决方案", href: "/solutions" },
    { label: "案例中心", href: "/cases" },
    { label: "技术文章", href: "/articles" },
    { label: "联系我们", href: "/contact" }
  ] satisfies NavItem[],
  footerLinks: ["产品中心", "解决方案", "案例中心", "技术文章", "关于我们"],
  seo: {
    defaultTitle: "FieldSense 场感｜近场扫描系统与电磁云图分析平台",
    defaultDescription:
      "FieldSense 场感提供近场扫描系统、频谱采集、自动化扫描控制与电磁云图分析能力，帮助工程师快速定位射频干扰源，提升 EMC 测试与硬件研发效率。",
    keywords: [
      "近场扫描系统",
      "近场探头",
      "电磁云图",
      "射频干扰定位",
      "EMC整改",
      "PCB干扰排查",
      "频谱采集",
      "射频测试"
    ]
  }
};

