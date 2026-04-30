import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { productComposition } from "@/data/home";
import { iconMap } from "@/lib/icons";

export function ProductComposition() {
  const visualStyles = [
    "scanner-grid",
    "bg-gradient-to-r from-brand-100 to-white",
    "spectrum-bars",
    "heatmap-surface"
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="硬件、探头、采集设备和软件平台协同工作，形成可复现的近场扫描系统。"
          eyebrow="产品构成"
          title="从扫描平台到分析软件的完整组合"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {productComposition.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div className="relative" key={item.title}>
                <Card className="h-full p-6">
                  <div className="mb-4 h-20 rounded-md border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-3">
                    <div className="flex h-full items-center justify-between gap-2">
                      <div className={`h-8 w-10 rounded border border-brand-200 ${visualStyles[index]} bg-white`} />
                      <div className="h-5 w-14 rounded-full bg-brand-200/70" />
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-normal text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
                </Card>
                {index < productComposition.length - 1 ? (
                  <div className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-600 shadow-sm lg:flex">
                    <ArrowRight size={18} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

