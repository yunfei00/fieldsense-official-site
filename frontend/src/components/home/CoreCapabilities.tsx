import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { coreCapabilities } from "@/data/home";
import { iconMap } from "@/lib/icons";

export function CoreCapabilities() {
  const capabilityTags: Record<string, string> = {
    自动扫描: "路径规划",
    数据采集: "频谱采集",
    云图生成: "多频点分析",
    干扰分析: "报告输出"
  };

  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="围绕近场扫描的关键流程，将运动控制、采集、成图与分析组织成清晰稳定的工作台。"
          eyebrow="核心能力"
          title="从扫描到分析，一套流程闭环"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coreCapabilities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card className="border-brand-100 p-6" key={item.title}>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-600 shadow-sm">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-normal text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {capabilityTags[item.title] || "能力增强"}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

