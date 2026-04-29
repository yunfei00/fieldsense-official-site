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
      <div className="cta-shell relative mx-auto max-w-6xl overflow-hidden rounded-card border border-brand-500/40 bg-gradient-to-r from-brand-900 via-brand-700 to-brand-600 p-6 shadow-soft md:p-10">
        <div className="absolute -right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
        <div className="heatmap-surface absolute -right-6 bottom-0 h-40 w-72 rounded-tl-3xl opacity-60" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-normal text-white md:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-blue-100 md:mt-4 md:text-base md:leading-8">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button className="w-full bg-white text-brand-700 hover:bg-blue-50 sm:w-auto" href={primaryHref}>
              {primaryLabel}
              <ArrowRight size={18} />
            </Button>
            <Button className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto" href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

