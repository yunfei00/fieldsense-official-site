import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
      <Link className="hover:text-brand-700" href="/">
        首页
      </Link>
      {items.map((item) => (
        <span className="inline-flex items-center gap-2" key={item.label}>
          <ChevronRight size={14} />
          {item.href ? (
            <Link className="hover:text-brand-700" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

