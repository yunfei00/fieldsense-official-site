import type { CaseItem } from "@/types/content";

export const caseCategories = ["PCB 干扰排查", "射频模块分析", "EMC 整改验证", "天线评估", "实验室测试"];

export const cases: CaseItem[] = [
  {
    id: "case-pcb-clock",
    title: "高速数字板时钟辐射热点定位",
    type: "PCB 干扰排查",
    industry: "工业控制",
    problem: "某控制板在关键频点辐射偏高，传统频谱测试无法快速锁定板上源头。",
    result: "通过云图定位时钟链路附近热点，优化回流路径后峰值明显下降。",
    thumbnail: "/placeholders/heatmap.svg"
  },
  {
    id: "case-rf-shield",
    title: "无线模块屏蔽结构效果评估",
    type: "射频模块分析",
    industry: "智能终端",
    problem: "模块屏蔽罩开孔附近存在异常泄漏，影响整机射频一致性。",
    result: "对比不同屏蔽方案的近场分布，筛选出更稳定的结构方案。",
    thumbnail: "/placeholders/spectrum.svg"
  },
  {
    id: "case-emc-rectification",
    title: "电源区域 EMC 整改前后验证",
    type: "EMC 整改验证",
    industry: "汽车电子",
    problem: "电源模块整改方案较多，缺少直观依据判断措施有效性。",
    result: "生成整改前后云图对比，验证滤波和布局调整对热点抑制有效。",
    thumbnail: "/placeholders/scan-path.svg"
  },
  {
    id: "case-antenna",
    title: "天线馈线附近耦合风险分析",
    type: "天线评估",
    industry: "物联网设备",
    problem: "天线馈线与高速信号区域距离较近，存在潜在耦合风险。",
    result: "通过近场分布观察风险区域，调整走线间距和接地策略。",
    thumbnail: "/placeholders/heatmap.svg"
  }
];

