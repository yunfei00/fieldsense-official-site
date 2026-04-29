import type { Article } from "@/types/content";

export const articleCategories = [
  "近场扫描基础",
  "近场探头",
  "频谱采集",
  "EMC整改",
  "PCB干扰分析",
  "射频测试",
  "软件使用"
];

export const articles: Article[] = [
  {
    slug: "what-is-near-field-scanning",
    title: "什么是近场扫描？它在 EMC 测试中有什么作用",
    category: "近场扫描基础",
    excerpt: "理解近场扫描的测试对象、基本流程，以及它如何补充传统 EMC 测试。",
    readTime: "6 分钟",
    publishedAt: "2026-04-01"
  },
  {
    slug: "pcb-em-heatmap-debugging",
    title: "如何通过电磁云图定位 PCB 板级干扰源",
    category: "PCB干扰分析",
    excerpt: "从关注频点、扫描区域到热点判断，梳理 PCB 干扰源定位的实用方法。",
    readTime: "8 分钟",
    publishedAt: "2026-04-03"
  },
  {
    slug: "h-field-vs-e-field-probes",
    title: "近场探头 H 场和 E 场有什么区别",
    category: "近场探头",
    excerpt: "说明 H 场、E 场探头的测量差异、适用场景和常见选型思路。",
    readTime: "5 分钟",
    publishedAt: "2026-04-05"
  },
  {
    slug: "spectrum-analyzer-with-nfs",
    title: "频谱仪如何配合近场扫描系统使用",
    category: "频谱采集",
    excerpt: "介绍频谱仪参数、扫描路径和数据采集之间的联动关系。",
    readTime: "7 分钟",
    publishedAt: "2026-04-08"
  },
  {
    slug: "emc-before-after-heatmap",
    title: "EMC 整改前后如何通过云图进行验证",
    category: "EMC整改",
    excerpt: "用云图对比呈现整改措施的效果，减少反复试错。",
    readTime: "7 分钟",
    publishedAt: "2026-04-12"
  },
  {
    slug: "near-field-scanning-workflow",
    title: "近场扫描系统的典型测试流程",
    category: "软件使用",
    excerpt: "从测试准备、自动扫描到报告输出，拆解一套完整流程。",
    readTime: "6 分钟",
    publishedAt: "2026-04-16"
  },
  {
    slug: "lab-near-field-solution",
    title: "如何选择适合研发实验室的近场扫描方案",
    category: "近场扫描基础",
    excerpt: "围绕测试对象、硬件兼容、软件能力与扩展需求进行方案评估。",
    readTime: "8 分钟",
    publishedAt: "2026-04-19"
  },
  {
    slug: "pcb-radiation-root-causes",
    title: "PCB 板级辐射问题的常见原因与排查方法",
    category: "PCB干扰分析",
    excerpt: "总结时钟、回流、电源、线缆和屏蔽相关的常见辐射问题。",
    readTime: "9 分钟",
    publishedAt: "2026-04-22"
  }
];

