import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="h-full p-6">
      <Badge>{article.category}</Badge>
      <h3 className="mt-4 text-xl font-bold tracking-normal text-ink-900">{article.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-600">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold text-ink-500">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} />
          {article.publishedAt}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 size={14} />
          {article.readTime}
        </span>
      </div>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
        href="/contact"
      >
        阅读文章
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
}

