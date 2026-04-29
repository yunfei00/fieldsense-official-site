import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { applicationScenarios } from "@/data/home";
import { iconMap } from "@/lib/icons";

export function ApplicationScenarios() {
  return (
    <section className="bg-slate-100/70 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="服务硬件研发、测试实验室和 EMC 整改团队，让问题定位从经验判断变成可视化证据。"
          eyebrow="典型应用场景"
          title="面向研发现场的电磁分析能力"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {applicationScenarios.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card className="overflow-hidden p-0" key={item.title}>
                <div className="relative h-36 border-b border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-4">
                  <div className="scanner-grid absolute inset-0 opacity-40" />
                  <div className="relative flex items-center justify-between">
                    <div className="h-12 w-20 rounded-md border border-brand-200 bg-white/80" />
                    <div className="heatmap-surface h-20 w-28 rounded-md border border-brand-200/70" />
                  </div>
                  <div className="absolute bottom-4 left-4 h-2 w-24 rounded-full bg-brand-500/40" />
                </div>
                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-normal text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

