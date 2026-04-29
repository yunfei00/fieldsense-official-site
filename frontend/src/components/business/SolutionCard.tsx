import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { iconMap } from "@/lib/icons";
import type { Solution } from "@/types/content";

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = iconMap[solution.icon];

  return (
    <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-normal text-ink-900">{solution.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-600">{solution.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {solution.painPoints.map((point) => (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-600" key={point}>
            {point}
          </span>
        ))}
      </div>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
        href={`/solutions/${solution.slug}`}
      >
        查看方案
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
}

