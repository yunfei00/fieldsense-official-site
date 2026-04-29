import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-ink-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

