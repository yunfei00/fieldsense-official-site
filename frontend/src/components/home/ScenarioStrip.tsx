import { scenarioStrip } from "@/data/home";

export function ScenarioStrip() {
  return (
    <section className="border-y border-line bg-slate-50/70 px-4 py-5 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm font-semibold text-ink-600">
        <span className="text-brand-700">适用于</span>
        {scenarioStrip.map((item, index) => (
          <span className="inline-flex items-center gap-3" key={item}>
            <span>{item}</span>
            {index < scenarioStrip.length - 1 ? <span className="text-slate-300">/</span> : null}
          </span>
        ))}
      </div>
    </section>
  );
}

