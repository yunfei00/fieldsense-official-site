import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { pcbSolutionDetail } from "@/data/solutions";

export const metadata: Metadata = {
  title: "PCB 板级干扰排查方案｜FieldSense 场感",
  description: "通过近场扫描和电磁云图定位 PCB 板级干扰源，辅助 EMC 整改与验证。"
};

export default function PcbInterferenceDebuggingPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ href: "/solutions", label: "解决方案" }, { label: pcbSolutionDetail.title }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Badge>PCB 干扰排查</Badge>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal text-ink-900 md:text-5xl">
                {pcbSolutionDetail.title}
              </h1>
              <p className="mt-5 text-lg leading-9 text-ink-600">{pcbSolutionDetail.approach}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/demo">
                  预约方案咨询
                  <ArrowRight size={18} />
                </Button>
                <Button href="/products/fieldsense-nfs" variant="outline">
                  查看推荐产品
                </Button>
              </div>
            </div>
            <Card className="p-5">
              <div className="text-sm font-bold text-ink-900">输出示意</div>
              <div className="heatmap-surface mt-4 h-72 rounded-md border border-line" />
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoBlock title="适用对象" items={pcbSolutionDetail.audience} />
          <InfoBlock title="典型痛点" items={pcbSolutionDetail.painPoints} />
          <InfoBlock title="输出结果" items={pcbSolutionDetail.outputs} />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            description="从关注频点到整改后对比，将测试动作和结果沉淀为可复现流程。"
            eyebrow="测试流程"
            title="PCB 板级干扰排查流程"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {pcbSolutionDetail.process.map((step, index) => (
              <Card className="p-5 text-center" key={step}>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div className="mt-4 text-sm font-bold text-ink-900">{step}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="left" eyebrow="推荐产品组合" title="建议配置" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pcbSolutionDetail.recommended.map((item) => (
              <Card className="flex items-start gap-3 p-5" key={item}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-600" size={20} />
                <span className="text-sm font-bold leading-7 text-ink-900">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        description="带着你的 PCB 频点、板卡尺寸和测试目标来聊，我们可以一起确定扫描流程与推荐配置。"
        title="预约 PCB 干扰排查方案咨询"
        primaryLabel="预约方案咨询"
      />
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full p-6">
      <h2 className="text-xl font-bold text-ink-900">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div className="flex gap-3 text-sm leading-7 text-ink-600" key={item}>
            <CheckCircle2 className="mt-1 shrink-0 text-brand-600" size={18} />
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

