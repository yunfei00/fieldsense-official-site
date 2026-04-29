import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "pcb-interference-debugging",
    title: "PCB 板级干扰排查方案",
    summary: "通过近场扫描与云图分析定位 PCB 热点区域，辅助布局优化、器件筛查与整改验证。",
    target: "硬件研发、EMC 整改工程师、实验室测试团队",
    icon: "cpu",
    painPoints: ["辐射源难定位", "整改方向不清晰", "缺少前后对比依据"]
  },
  {
    slug: "rf-module-analysis",
    title: "射频模块近场分析方案",
    summary: "观察模块周边电磁分布，分析屏蔽、接地、走线和器件布局对射频表现的影响。",
    target: "射频工程师、模块研发团队",
    icon: "radio",
    painPoints: ["模块热点异常", "屏蔽效果难评估", "频点分布不直观"]
  },
  {
    slug: "emc-rectification",
    title: "EMC 整改与验证方案",
    summary: "建立整改前后云图对比与频谱记录，帮助团队快速判断整改是否有效。",
    target: "EMC 工程师、认证测试团队",
    icon: "shield",
    painPoints: ["整改周期长", "验证成本高", "报告难沉淀"]
  },
  {
    slug: "antenna-field-evaluation",
    title: "天线与电磁分布评估方案",
    summary: "对天线、馈线和周边结构进行近场扫描，辅助评估能量分布与耦合风险。",
    target: "天线工程师、无线产品团队",
    icon: "antenna",
    painPoints: ["耦合路径复杂", "结构影响难判断", "空间分布缺少可视化"]
  },
  {
    slug: "lab-rd-testing",
    title: "实验室研发测试方案",
    summary: "为研发实验室构建可复现、可沉淀、可扩展的近场扫描测试流程。",
    target: "研发实验室、测试平台团队",
    icon: "flask",
    painPoints: ["设备分散", "流程不统一", "数据难复用"]
  }
];

export const pcbSolutionDetail = {
  title: "PCB 板级干扰排查方案",
  audience: ["硬件研发工程师", "EMC 整改工程师", "实验室测试团队"],
  painPoints: [
    "辐射超标后难以判断主要干扰源来自哪个器件或走线区域。",
    "人工手持探头扫描重复性低，结果难以在团队内复盘。",
    "整改措施缺少云图对比依据，容易陷入反复试错。"
  ],
  approach:
    "FieldSense 将扫描坐标、频谱数据和热力云图关联起来，帮助工程师从频点出发观察 PCB 表面电磁分布，并针对异常热点进行器件、走线、接地和屏蔽策略验证。",
  process: ["明确关注频点", "设置扫描区域", "执行自动扫描", "生成电磁云图", "定位热点源头", "整改后复测对比"],
  outputs: ["热点云图", "频谱记录", "整改前后对比图", "测试结论与报告"],
  recommended: ["FieldSense NFS 近场扫描系统", "近场探头系列", "FieldSense Studio 分析软件"]
};

