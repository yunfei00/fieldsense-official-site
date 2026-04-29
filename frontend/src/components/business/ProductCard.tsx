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
