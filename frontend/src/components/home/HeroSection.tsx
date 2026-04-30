import { ArrowRight, CheckCircle2, Radio, Route, ScanLine, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { heroTags } from "@/data/home";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white px-4 py-12 md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
        <div>
          <Badge>FieldSense 场感</Badge>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-normal text-ink-900 md:mt-6 md:text-6xl">
            近场扫描系统与电磁云图分析平台
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-600 md:mt-6 md:text-lg md:leading-9">
            提供探头扫描、频谱采集、自动化控制与云图成像能力，帮助工程师快速定位射频干扰源，提升研发与测试效率。
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-sm font-semibold text-brand-700 shadow-sm"
                key={tag}
              >
                <CheckCircle2 size={15} />
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="/demo">
              申请产品演示
              <ArrowRight size={18} />
            </Button>
            <Button href="/solutions" variant="outline">
              查看解决方案
            </Button>
          </div>
        </div>
        <ProductVisual />
      </div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -left-8 top-6 hidden rounded-full bg-brand-100/70 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm md:block">
        近场扫描平台
      </div>
      <div className="absolute -right-8 top-16 hidden rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm md:block">
        硬件 + 软件 + 数据分析
      </div>
      <div className="relative rounded-card border border-brand-100 bg-white p-4 shadow-card md:p-5">
        <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr] md:gap-4">
          <div className="rounded-card border border-brand-100 bg-gradient-to-br from-slate-50 to-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-ink-900">近场扫描平台</span>
              <ScanLine className="text-brand-600" size={18} />
            </div>
            <div className="relative h-44 rounded-md border border-line bg-white md:h-56">
              <div className="absolute left-4 right-4 top-5 h-3 rounded-full bg-brand-100" />
              <div className="absolute left-6 right-6 top-8 h-2 rounded-full bg-brand-300/80" />
              <div className="absolute left-7 top-11 h-20 w-2 rounded bg-slate-300 md:h-28" />
              <div className="absolute right-7 top-11 h-20 w-2 rounded bg-slate-300 md:h-28" />
              <div className="absolute left-8 right-8 top-12 h-2 rounded-full bg-slate-400" />
              <div className="absolute left-1/2 top-14 h-6 w-6 -translate-x-1/2 rounded-md border border-brand-300 bg-white shadow-sm" />
              <div className="absolute left-1/2 top-[76px] h-5 w-1 -translate-x-1/2 rounded bg-brand-500 md:top-[88px]" />
              <div className="absolute bottom-5 left-8 right-8 h-24 rounded-md border border-brand-200 bg-slate-50 md:h-28">
                <div className="heatmap-surface absolute inset-2 rounded-md" />
                <div className="scanner-grid absolute inset-2 rounded-md opacity-50" />
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-500 shadow-soft" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Metric label="扫描点数" value="1728" />
              <Metric label="峰值" value="42dB" />
              <Metric label="频点" value="320MHz" />
            </div>
          </div>

          <div className="grid gap-3 md:gap-4">
            <div className="rounded-card border border-line bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-ink-900">
                  <Radio className="text-brand-600" size={16} />
                  频谱 / 采集设备
                </div>
                <div className="flex gap-1 text-[10px] font-semibold">
                  <span className="rounded bg-brand-50 px-1.5 py-0.5 text-brand-700">RF IN</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">LAN</span>
                </div>
              </div>
              <div className="spectrum-bars flex h-24 items-end gap-1.5 rounded-md border border-brand-100 px-3 pb-3 md:h-28">
                {[34, 52, 41, 76, 46, 92, 58, 64, 38, 82, 44, 61].map((height, index) => (
                  <span className="flex-1 rounded-t bg-brand-600/80" key={`${height}-${index}`} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-card border border-line bg-white p-4 shadow-sm">
              <div className="mb-3 text-sm font-bold text-ink-900">笔记本软件界面</div>
              <div className="relative h-24 rounded-md border border-brand-100 bg-slate-50 md:h-28">
                <div className="heatmap-surface absolute inset-2 rounded-md" />
                <div className="absolute right-3 top-3 grid gap-1 text-[10px] font-semibold text-ink-700">
                  <span className="rounded bg-white/90 px-1.5 py-0.5">频点 320MHz</span>
                  <span className="rounded bg-white/90 px-1.5 py-0.5">峰值 42dB</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <FloatCard icon={<Route className="text-brand-600" size={14} />} title="扫描轨迹" />
              <FloatCard icon={<Sparkles className="text-brand-600" size={14} />} title="频谱数据" />
              <FloatCard icon={<CheckCircle2 className="text-brand-600" size={14} />} title="云图分析" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          <DeviceCard title="扫描平台" subtitle="龙门架 + 运动控制" />
          <DeviceCard title="近场探头" subtitle="H场 / E场探针" />
          <DeviceCard title="采集设备" subtitle="频谱仪联动采集" />
          <DeviceCard title="分析软件" subtitle="云图与报告输出" />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-white px-3 py-2">
      <div className="text-xs font-medium text-ink-500">{label}</div>
      <div className="mt-1 text-sm font-bold text-ink-900">{value}</div>
    </div>
  );
}

function DeviceCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-md border border-line bg-slate-50 p-3">
      <div className="scanner-grid h-8 rounded border border-slate-200 bg-white" />
      <div className="mt-3 text-xs font-bold text-ink-900 sm:text-sm">{title}</div>
      <div className="mt-1 text-xs text-ink-500">{subtitle}</div>
    </div>
  );
}

function FloatCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="rounded-md border border-brand-100 bg-brand-50/50 px-2 py-2">
      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-700">
        {icon}
        {title}
      </div>
    </div>
  );
}
