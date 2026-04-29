import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const footerHref: Record<string, string> = {
  产品中心: "/products",
  解决方案: "/solutions",
  案例中心: "/cases",
  技术文章: "/articles",
  关于我们: "/contact"
};

export function Footer() {
  return (
    <footer className="bg-footer px-4 py-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-xl font-bold">{siteConfig.name}</div>
          <p className="mt-3 max-w-md text-sm leading-7 text-blue-100">
            {siteConfig.tagline}
            <br />
            {siteConfig.description}
          </p>
          <p className="mt-3 text-sm font-semibold text-blue-100">专注近场扫描、频谱采集与电磁云图分析。</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">站点导航</h3>
          <div className="mt-4 grid gap-3 text-sm text-blue-100">
            {siteConfig.footerLinks.map((link) => (
              <Link className="transition hover:text-white" href={footerHref[link]} key={link}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">联系方式</h3>
          <div className="mt-4 grid gap-3 text-sm text-blue-100">
            <span className="inline-flex items-center gap-2">
              <Mail size={16} />
              {siteConfig.contact.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} />
              {siteConfig.contact.phone}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-blue-100">
        © 2026 FieldSense. All rights reserved.
      </div>
    </footer>
  );
}

