import { ArrowRight, CheckCircle2, Route, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { heroTags } from "@/data/home";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white px-4 py-16 md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <Badge>FieldSense 场感</Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-ink-900 md:text-6xl">
            近场扫描系统与电磁云图分析平台
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-ink-600">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      <div className="relative rounded-card border border-brand-100 bg-white p-5 shadow-card">
        <div className="mb-4 grid gap-4 md:grid-cols-[1fr_1fr]">
          <DeviceCard title="扫描平台" subtitle="龙门平台 + XY 运动控制" />
          <DeviceCard title="探头 / 探针" subtitle="H场/E场近场探头阵列" />
          <DeviceCard title="PCB 被测板" subtitle="板级热点区域扫描" />
          <DeviceCard title="频谱 / 采集设备" subtitle="频点同步采样与记录" />
        </div>
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-card border border-line bg-slate-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-ink-900">FieldSense Studio</span>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                采集中
              </span>
            </div>
            <div className="heatmap-surface relative h-56 overflow-hidden rounded-md border border-white shadow-inner">
              <div className="scanner-grid absolute inset-0 opacity-60" />
              <div className="absolute left-8 top-8 h-28 w-36 rounded border border-white/70 bg-white/10" />
              <div className="absolute bottom-7 left-12 h-2 w-40 rounded-full bg-white/80" />
              <div className="absolute right-8 top-10 h-24 w-2 rounded-full bg-white/80" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-red-500 shadow-soft" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Metric label="热点" value="12" />
              <Metric label="频点" value="320MHz" />
              <Metric label="网格" value="48×36" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-card border border-line bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-900">
                <Route className="text-brand-600" size={18} />
                扫描轨迹
              </div>
              <div className="scanner-grid relative h-28 overflow-hidden rounded-md border border-brand-100 bg-brand-50">
                <div className="absolute left-5 top-6 h-16 w-36 rounded border-2 border-dashed border-brand-500" />
                <div className="absolute left-20 top-12 h-4 w-4 rounded-full bg-brand-600 shadow-soft" />
              </div>
            </div>
            <div className="rounded-card border border-line bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-900">
                <Sparkles className="text-brand-600" size={18} />
                频谱数据
              </div>
              <div className="spectrum-bars flex h-28 items-end gap-1.5 rounded-md border border-brand-100 px-3 pb-3">
                {[34, 52, 41, 76, 46, 92, 58, 64, 38, 82, 44, 61].map((height, index) => (
                  <span
                    className="flex-1 rounded-t bg-brand-600/80"
                    key={`${height}-${index}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-card border border-line bg-white p-4 shadow-sm">
              <div className="mb-3 text-sm font-bold text-ink-900">云图分析</div>
              <div className="heatmap-surface relative h-28 rounded-md border border-brand-100">
                <div className="absolute inset-0 scanner-grid opacity-40" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <DeviceCard title="笔记本软件界面" subtitle="任务编排 + 实时曲线 + 报告输出" />
          <DeviceCard title="硬件 + 软件 + 分析闭环" subtitle="设备联动、路径复现、热点定位" />
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
      <div className="mt-3 text-sm font-bold text-ink-900">{title}</div>
      <div className="mt-1 text-xs text-ink-500">{subtitle}</div>
    </div>
  );
}
