import type { Metadata } from "next";
import { ProductCard } from "@/components/business/ProductCard";
import { CTASection } from "@/components/ui/CTASection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "产品中心｜FieldSense 场感",
  description: "了解 FieldSense 近场扫描系统、近场探头、频谱采集设备与云图分析软件。"
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="从自动化扫描平台到分析软件，FieldSense 为实验室和研发团队提供完整的近场扫描产品组合。"
            eyebrow="产品中心"
            title="近场扫描系统、探头、采集适配与分析软件"
          />
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <CTASection
        description="告诉我们你的测试对象、频点范围和实验室设备，我们会给出适合的产品组合建议。"
        title="需要一套适合研发实验室的近场扫描系统？"
      />
    </>
  );
}

