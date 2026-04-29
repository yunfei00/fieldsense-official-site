import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { CaseItem } from "@/types/content";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-44 border-b border-line bg-brand-50">
        <Image alt={`${item.title} 云图缩略图`} className="object-cover" fill src={item.thumbnail} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{item.type}</Badge>
          <span className="text-xs font-semibold text-ink-500">{item.industry}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-normal text-ink-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink-600">{item.problem}</p>
        <p className="mt-3 rounded-md bg-brand-50 p-3 text-sm leading-6 text-brand-900">{item.result}</p>
        <Button className="mt-5 w-full" href="/contact" variant="outline">
          查看详情
          <ArrowRight size={16} />
        </Button>
      </div>
    </Card>
  );
}

