import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "fieldsense-nfs",
    name: "FieldSense NFS 近场扫描系统",
    summary: "集成扫描平台、自动控制、频谱采集与电磁云图分析的一体化近场扫描系统。",
    category: "系统产品",
    icon: "scan",
    highlights: ["自动二维扫描", "云图快速生成", "热点定位与报告输出"]
  },
  {
    slug: "near-field-probes",
    name: "近场探头系列",
    summary: "覆盖 H 场、E 场与不同空间分辨率需求，适用于 PCB、模块与线缆辐射分析。",
    category: "测试附件",
    icon: "radar",
    highlights: ["多规格探头", "高空间分辨率", "实验室场景适配"]
  },
  {
    slug: "spectrum-acquisition",
    name: "频谱/采集设备适配",
    summary: "支持对接频谱仪、接收机与采集硬件，实现测试数据统一采集与记录。",
    category: "硬件适配",
    icon: "activity",
    highlights: ["多设备兼容", "统一采集流程", "频点与路径联动"]
  },
  {
    slug: "fieldsense-studio",
    name: "FieldSense Studio 分析软件",
    summary: "用于扫描任务配置、数据采集、云图生成、结果对比和报告输出的软件平台。",
    category: "软件平台",
    icon: "laptop",
    highlights: ["任务编排", "热力云图", "整改前后对比"]
  },
  {
    slug: "services",
    name: "配套服务",
    summary: "提供方案评估、测试流程搭建、探头选型、软件定制与培训支持。",
    category: "服务支持",
    icon: "settings",
    highlights: ["方案咨询", "现场调试", "培训与定制"]
  }
];

export const nfsDetail = {
  name: "FieldSense NFS 近场扫描系统",
  subtitle: "面向硬件研发、EMC 整改与射频测试的自动化近场扫描平台。",
  problems: [
    "PCB 板级辐射源定位依赖经验，测试效率低。",
    "频谱数据与扫描位置难以关联，排查过程不够直观。",
    "整改前后缺少可视化对比，验证结果难以沉淀。",
    "实验室设备分散，自动化测试流程难以复现。"
  ],
  features: [
    "二维路径扫描与坐标控制",
    "频谱仪和采集设备联动",
    "电磁热力云图生成",
    "异常热点定位与频点追踪",
    "整改前后对比分析",
    "测试报告输出与数据归档"
  ],
  specs: [
    { label: "扫描模式", value: "二维平面扫描、点位扫描、批量任务" },
    { label: "数据接口", value: "适配主流频谱仪、接收机与采集设备" },
    { label: "分析能力", value: "热力云图、热点定位、频点对比、报告输出" },
    { label: "典型对象", value: "PCB、射频模块、天线、线缆与结构件" },
    { label: "部署方式", value: "本地软件部署，可按实验室流程定制" }
  ],
  materials: ["产品彩页 PDF", "测试流程白皮书", "样例云图报告"]
};

