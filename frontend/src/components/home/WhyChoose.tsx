import { whyChoose } from "@/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhyChoose() {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-blue-50 to-brand-100/80 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="围绕研发测试团队最关心的效率、结果表达、硬件兼容和流程沉淀进行设计。"
          eyebrow="为什么选择 FieldSense"
          title="让近场测试更容易被执行和复用"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <div className="rounded-card border border-line bg-white p-6 shadow-card" key={item.title}>
              <div className="text-3xl font-bold text-brand-600">{item.metric}</div>
              <h3 className="mt-4 text-lg font-bold tracking-normal text-ink-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

