"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={cn("sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur transition", scrolled && "shadow-md")}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        <Link className="flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-600 text-base font-bold text-white">
            FS
          </span>
          <span>
            <span className="block text-base font-bold text-ink-900">{siteConfig.name}</span>
            <span className="hidden text-xs text-ink-500 sm:block">近场扫描与电磁云图</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-ink-600 transition hover:bg-brand-50 hover:text-brand-700",
                isActive(item.href) && "bg-brand-50 text-brand-700"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/demo" variant="secondary">
            预约演示
          </Button>
          <Button href="/contact">立即咨询</Button>
        </div>

        <button
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-4 py-4 shadow-card lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-ink-600",
                  isActive(item.href) && "bg-brand-50 text-brand-700"
                )}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Button href="/demo" variant="secondary">
                预约演示
              </Button>
              <Button href="/contact">立即咨询</Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
