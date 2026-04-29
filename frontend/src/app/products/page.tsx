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
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
          <SectionTitle
            align="left"
            description="从自动化扫描平台到分析软件，FieldSense 为实验室和研发团队提供完整的近场扫描产品组合。"
            eyebrow="产品中心"
            title="近场扫描系统、探头、采集适配与分析软件"
          />
          <div className="relative hidden h-48 overflow-hidden rounded-card border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-brand-100 p-4 lg:block">
            <div className="scanner-grid absolute inset-0 opacity-45" />
            <div className="relative grid h-full grid-cols-3 gap-3">
              <div className="rounded-md border border-brand-200 bg-white/90" />
              <div className="heatmap-surface rounded-md border border-brand-200/70" />
              <div className="spectrum-bars rounded-md border border-brand-200" />
            </div>
          </div>
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

