import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Button disabled variant="outline">
        <ChevronLeft size={16} />
        上一页
      </Button>
      <span className="rounded-md border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
        1
      </span>
      <Button disabled variant="outline">
        下一页
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}

