import type { Metadata } from "next";
import { DemoRequestForm } from "@/components/business/DemoRequestForm";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "预约演示｜FieldSense 场感",
  description: "预约 FieldSense 近场扫描系统产品演示，了解自动扫描、频谱采集与电磁云图分析流程。"
};

export default function DemoPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="提交你的需求后，我们会尽快与你联系，安排 FieldSense NFS 近场扫描系统演示。"
            eyebrow="预约演示"
            title="看看近场扫描如何服务你的研发与测试流程"
          />
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-card border border-brand-100 bg-brand-50 p-6">
            <h2 className="text-2xl font-bold text-ink-900">演示内容</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-ink-600">
              <p>· 扫描任务设置与路径控制</p>
              <p>· 频谱采集设备联动方式</p>
              <p>· 电磁云图生成与热点定位</p>
              <p>· PCB 干扰排查与整改前后对比</p>
              <p>· 实验室落地配置建议</p>
            </div>
          </div>
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink-900">预约演示表单</h2>
            <p className="mt-3 text-sm leading-7 text-ink-600">带星号字段为必填项。</p>
            <div className="mt-6">
              <DemoRequestForm />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

