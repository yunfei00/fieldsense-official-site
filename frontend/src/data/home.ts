import type { Capability, IconName } from "@/types/content";

export const heroTags = ["探头扫描", "频谱采集", "自动控制", "云图成像", "干扰定位"];

export const scenarioStrip = ["研发实验室", "EMC测试", "射频分析", "PCB调试", "天线评估"];

export const coreCapabilities: Capability[] = [
  {
    title: "自动扫描",
    description: "支持二维路径扫描、坐标控制与批量任务执行。",
    icon: "scan"
  },
  {
    title: "数据采集",
    description: "兼容频谱仪、探头与多类测试硬件，统一采集流程。",
    icon: "activity"
  },
  {
    title: "云图生成",
    description: "快速生成高质量热力云图，直观展示电磁分布。",
    icon: "map"
  },
  {
    title: "干扰分析",
    description: "辅助定位异常热点与潜在干扰源，支持报告输出。",
    icon: "target"
  }
];

export const applicationScenarios: Capability[] = [
  {
    title: "PCB板级干扰排查",
    description: "快速定位 PCB 板上的辐射干扰源，指导布局优化与整改。",
    icon: "cpu"
  },
  {
    title: "射频模块近场分析",
    description: "分析射频模块周边电磁场分布，优化屏蔽、接地与器件布局。",
    icon: "radio"
  },
  {
    title: "EMC整改与验证",
    description: "对比整改前后电磁分布变化，辅助验证整改效果。",
    icon: "shield"
  }
];

export const productComposition: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "扫描平台",
    description: "稳定执行二维扫描路径，支持坐标控制与任务复现。",
    icon: "scan"
  },
  {
    title: "近场探头",
    description: "覆盖 H 场、E 场及多种测试距离，适配板级与模块级分析。",
    icon: "radar"
  },
  {
    title: "频谱/采集设备",
    description: "对接频谱仪、接收机与采集硬件，沉淀一致化测试数据。",
    icon: "chart"
  },
  {
    title: "分析软件",
    description: "完成云图生成、热点定位、结果对比与报告输出。",
    icon: "laptop"
  }
];

export const whyChoose = [
  {
    title: "更快定位问题",
    metric: "1套系统",
    description: "扫描、采集、成图与分析流程统一，减少人工切换。"
  },
  {
    title: "更直观的云图结果",
    metric: "分钟级成图",
    description: "用热力云图观察异常热点，让沟通和判断更直接。"
  },
  {
    title: "降低测试门槛",
    metric: "多类硬件兼容",
    description: "适配常见实验室硬件，降低系统引入和协同成本。"
  },
  {
    title: "支持定制化扩展",
    metric: "报告可输出",
    description: "面向研发、测试和整改场景扩展自动化脚本与报告模板。"
  }
];
