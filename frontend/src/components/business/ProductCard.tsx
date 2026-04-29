import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { iconMap } from "@/lib/icons";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
          <Icon size={26} strokeWidth={1.8} />
        </div>
        <Badge>{product.category}</Badge>
      </div>
      <div className="mt-5 overflow-hidden rounded-md border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-3">
        <ProductVisual slug={product.slug} />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-normal text-ink-900">{product.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-ink-600">{product.summary}</p>
      <div className="mt-5 grid gap-2">
        {product.highlights.map((highlight) => (
          <span className="text-sm font-medium text-ink-700" key={highlight}>
            · {highlight}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1" href={`/products/${product.slug}`} variant="outline">
          查看详情
          <ArrowRight size={16} />
        </Button>
        <Button className="flex-1" href="/demo">
          预约演示
        </Button>
      </div>
    </Card>
  );
}

function ProductVisual({ slug }: { slug: string }) {
  if (slug === "fieldsense-nfs") {
    return (
      <div className="scanner-grid h-24 rounded-md border border-brand-200 bg-white p-2">
        <div className="flex h-full items-center justify-between">
          <div className="h-12 w-20 rounded border border-brand-200 bg-brand-50" />
          <div className="heatmap-surface h-16 w-20 rounded-md border border-brand-200" />
        </div>
      </div>
    );
  }
  if (slug === "near-field-probes") {
    return (
      <div className="flex h-24 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="h-14 w-4 rounded-full bg-brand-500/70" key={index} />
        ))}
      </div>
    );
  }
  if (slug === "spectrum-acquisition") {
    return (
      <div className="spectrum-bars flex h-24 items-end gap-1 rounded-md border border-brand-200 px-2 pb-2">
        {[35, 55, 40, 70, 48, 90, 52, 64].map((height, index) => (
          <span className="flex-1 rounded-t bg-brand-600/80" key={`${index}-${height}`} style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }
  if (slug === "fieldsense-studio") {
    return (
      <div className="heatmap-surface relative h-24 rounded-md border border-brand-200">
        <div className="scanner-grid absolute inset-0 opacity-45" />
      </div>
    );
  }
  return (
    <div className="flex h-24 items-center justify-center rounded-md border border-brand-200 bg-white">
      <div className="h-12 w-28 rounded-md border border-dashed border-brand-300 bg-brand-50" />
    </div>
  );
}
