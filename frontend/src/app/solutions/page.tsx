import type { Metadata } from "next";
import { SolutionCard } from "@/components/business/SolutionCard";
import { CTASection } from "@/components/ui/CTASection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "解决方案｜FieldSense 场感",
  description: "面向 PCB 干扰排查、射频模块分析、EMC 整改与天线评估的近场扫描解决方案。"
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="围绕研发、EMC、射频和实验室测试任务，提供可落地的近场扫描流程和产品组合。"
            eyebrow="解决方案"
            title="让电磁问题定位更快、更直观"
          />
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </section>
      <CTASection
        description="将你的产品类型、测试频点和当前痛点告诉我们，我们会帮你梳理测试流程和推荐配置。"
        title="需要针对具体项目做方案评估？"
        primaryLabel="预约方案咨询"
      />
    </>
  );
}

