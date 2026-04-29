import type { Metadata } from "next";
import { CaseCard } from "@/components/business/CaseCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { Pagination } from "@/components/ui/Pagination";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { caseCategories, cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "案例中心｜FieldSense 场感",
  description: "查看 FieldSense 在 PCB 干扰排查、射频模块分析、EMC 整改验证等场景中的模拟案例。"
};

export default function CasesPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="第一阶段使用模拟案例展示近场扫描与云图分析在不同研发测试场景中的价值。"
            eyebrow="案例中心"
            title="从问题定位到整改验证的实践样例"
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {caseCategories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cases.map((item) => (
            <CaseCard item={item} key={item.id} />
          ))}
        </div>
        <Pagination />
      </section>
      <CTASection
        description="如果你正在处理类似的干扰定位或整改验证问题，可以预约演示并提供测试背景。"
        title="想看更贴近你项目的云图分析流程？"
      />
    </>
  );
}

