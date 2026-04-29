import type { Metadata } from "next";
import { ArticleCard } from "@/components/business/ArticleCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { Pagination } from "@/components/ui/Pagination";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { articleCategories, articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "技术文章｜FieldSense 场感",
  description: "阅读近场扫描、近场探头、频谱采集、EMC 整改、PCB 干扰分析与射频测试相关技术文章。"
};

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="沉淀近场扫描基础知识、测试流程、硬件选型和 EMC 整改实践。"
            eyebrow="技术文章"
            title="围绕近场扫描和电磁云图的知识中心"
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {articleCategories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
        <Pagination />
      </section>
      <CTASection
        description="后续这里可以接入 CMS、SEO 专题页和资料下载表单，持续承接技术搜索流量。"
        title="需要围绕你的测试场景整理技术资料？"
        primaryLabel="预约技术沟通"
      />
    </>
  );
}

