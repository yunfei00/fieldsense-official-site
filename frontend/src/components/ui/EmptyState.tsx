import { FileSearch } from "lucide-react";

export function EmptyState({ title = "暂无内容", description }: { title?: string; description?: string }) {
  return (
    <div className="rounded-card border border-dashed border-line bg-slate-50 p-10 text-center">
      <FileSearch className="mx-auto text-brand-600" size={36} />
      <h3 className="mt-4 text-lg font-semibold text-ink-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-ink-600">{description}</p> : null}
    </div>
  );
}

