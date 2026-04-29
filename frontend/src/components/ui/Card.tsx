import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}

