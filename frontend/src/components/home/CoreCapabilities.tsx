import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { coreCapabilities } from "@/data/home";
import { iconMap } from "@/lib/icons";

export function CoreCapabilities() {
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
              <Card className="p-6" key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-normal text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

