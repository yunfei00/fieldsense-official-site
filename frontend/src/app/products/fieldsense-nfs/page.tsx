import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { applicationScenarios, productComposition } from "@/data/home";
import { nfsDetail } from "@/data/products";
import { iconMap } from "@/lib/icons";

export const metadata: Metadata = {
  title: "FieldSense NFS 近场扫描系统｜FieldSense 场感",
  description: "了解 FieldSense NFS 近场扫描系统的核心功能、技术参数、应用场景与产品构成。"
};

export default function FieldSenseNfsPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ href: "/products", label: "产品中心" }, { label: nfsDetail.name }]} />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Badge>系统产品</Badge>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal text-ink-900 md:text-5xl">
                {nfsDetail.name}
              </h1>
              <p className="mt-5 text-lg leading-9 text-ink-600">{nfsDetail.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/demo">
                  预约演示
                  <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline">
                  获取方案建议
                </Button>
              </div>
            </div>
            <div className="rounded-card border border-brand-100 bg-white p-5 shadow-card">
              <div className="heatmap-surface h-64 rounded-md border border-line" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Metric label="扫描任务" value="自动化" />
                <Metric label="分析结果" value="云图" />
                <Metric label="报告输出" value="支持" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="left" eyebrow="解决问题" title="它能解决哪些问题" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {nfsDetail.problems.map((problem) => (
              <Card className="flex gap-3 p-5" key={problem}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-600" size={20} />
                <p className="text-sm leading-7 text-ink-600">{problem}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="核心功能" title="面向测试流程的完整能力" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nfsDetail.features.map((feature) => (
              <Card className="p-5" key={feature}>
                <div className="flex items-center gap-3 text-sm font-bold text-ink-900">
                  <CheckCircle2 className="text-brand-600" size={20} />
                  {feature}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="left" eyebrow="技术参数" title="第一阶段参数概览" />
          <div className="mt-8 overflow-hidden rounded-card border border-line bg-white shadow-card">
            {nfsDetail.specs.map((spec) => (
              <div className="grid border-b border-line last:border-b-0 md:grid-cols-[220px_1fr]" key={spec.label}>
                <div className="bg-slate-50 px-5 py-4 text-sm font-bold text-ink-900">{spec.label}</div>
                <div className="px-5 py-4 text-sm leading-7 text-ink-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="应用场景" title="适用于多类电磁分析任务" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {applicationScenarios.map((scenario) => {
              const Icon = iconMap[scenario.icon];
              return (
                <Card className="p-6" key={scenario.title}>
                  <Icon className="text-brand-600" size={28} strokeWidth={1.8} />
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{scenario.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="产品构成" title="系统由四类模块组成" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productComposition.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Card className="p-6" key={item.title}>
                  <Icon className="text-brand-600" size={28} strokeWidth={1.8} />
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="left" eyebrow="相关资料" title="产品资料与样例报告" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nfsDetail.materials.map((material) => (
              <Card className="flex items-center justify-between gap-4 p-5" key={material}>
                <span className="inline-flex items-center gap-3 text-sm font-bold text-ink-900">
                  <FileText className="text-brand-600" size={20} />
                  {material}
                </span>
                <Download className="text-ink-500" size={18} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        description="预约一次系统演示，看看 FieldSense NFS 如何在真实测试流程中完成扫描、采集、成图与分析。"
        title="想了解 FieldSense NFS 是否适合你的实验室？"
      />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-slate-50 p-3">
      <div className="text-xs text-ink-500">{label}</div>
      <div className="mt-1 text-sm font-bold text-ink-900">{value}</div>
    </div>
  );
}

