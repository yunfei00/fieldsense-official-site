import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  description,
  primaryHref = "/demo",
  primaryLabel = "预约演示",
  secondaryHref = "/contact",
  secondaryLabel = "联系我们",
  className
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("bg-white px-4 py-16 md:px-8", className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-card border border-brand-100 bg-brand-50 p-8 shadow-soft md:flex-row md:items-center md:p-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-normal text-ink-900 md:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-ink-600">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button className="w-full sm:w-auto" href={primaryHref}>
            {primaryLabel}
            <ArrowRight size={18} />
          </Button>
          <Button className="w-full sm:w-auto" href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

