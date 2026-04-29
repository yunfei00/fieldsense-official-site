import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { applicationScenarios } from "@/data/home";
import { iconMap } from "@/lib/icons";

export function ApplicationScenarios() {
  return (
    <section className="bg-slate-50 px-4 py-16 md:px-8">
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
              <Card className="p-7" key={item.title}>
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

