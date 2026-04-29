import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Building2, Clock3, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/business/ContactForm";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "联系我们｜FieldSense 场感",
  description: "联系 FieldSense 场感，预约近场扫描系统产品演示与方案咨询。"
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="left"
            description="欢迎留下你的测试需求，我们会尽快与你联系并安排产品演示或方案沟通。"
            eyebrow="联系我们"
            title="让 FieldSense 帮你梳理近场扫描方案"
          />
        </div>
      </section>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <Card className="p-5">
              <h3 className="text-lg font-bold text-ink-900">你可以咨询</h3>
              <ul className="mt-3 grid gap-2 text-sm text-ink-700">
                <li>近场扫描系统选型</li>
                <li>频谱仪与采集设备适配</li>
                <li>EMC 整改测试流程</li>
                <li>近场探头选择</li>
                <li>软件定制与报告输出</li>
                <li>实验室测试方案建设</li>
              </ul>
            </Card>
            <ContactInfo icon={<Mail size={22} />} label="邮箱" value={siteConfig.contact.email} />
            <ContactInfo icon={<Phone size={22} />} label="电话" value={siteConfig.contact.phone} />
            <ContactInfo icon={<Clock3 size={22} />} label="工作时间" value={siteConfig.contact.workTime} />
            <ContactInfo icon={<Building2 size={22} />} label="公司信息" value="FieldSense 场感（公司信息占位）" />
          </div>
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink-900">咨询表单</h2>
            <p className="mt-3 text-sm leading-7 text-ink-600">
              请尽量描述测试对象、关注频点、当前设备和期望解决的问题。
            </p>
            <p className="mt-2 text-sm leading-7 text-brand-700">
              提交后我们将根据您的测试对象、频点范围和应用场景提供初步方案建议。
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

function ContactInfo({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <Card className="flex gap-4 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-ink-500">{label}</div>
        <div className="mt-1 text-base font-bold text-ink-900">{value}</div>
      </div>
    </Card>
  );
}
