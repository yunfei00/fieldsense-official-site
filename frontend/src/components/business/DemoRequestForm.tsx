"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitDemoRequest } from "@/lib/api";
import type { LeadPayload } from "@/types/lead";

const initialForm: LeadPayload = {
  name: "",
  company: "",
  department: "",
  phone: "",
  email: "",
  product_interest: "FieldSense NFS 近场扫描系统",
  application_scene: "",
  purchase_time: "",
  message: "",
  source_page: "预约演示页",
  source_url: "/demo"
};

const requiredFields: Array<keyof LeadPayload> = ["name", "company", "phone", "application_scene"];

export function DemoRequestForm({ sourcePage = "预约演示页" }: { sourcePage?: string }) {
  const [form, setForm] = useState<LeadPayload>({ ...initialForm, source_page: sourcePage });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const canSubmit = useMemo(
    () => requiredFields.every((field) => String(form[field] || "").trim().length > 0),
    [form]
  );

  const update = (name: keyof LeadPayload, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (!canSubmit) {
      return "请填写姓名、公司名称、联系电话和应用场景。";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "请填写合法的邮箱地址。";
    }
    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) {
      return;
    }
    const error = validate();
    if (error) {
      setNotice({ type: "error", message: error });
      return;
    }

    setLoading(true);
    setNotice(null);
    try {
      const response = await submitDemoRequest({
        ...form,
        source_url: typeof window !== "undefined" ? window.location.pathname : form.source_url
      });
      if (response.success) {
        setNotice({ type: "success", message: "您的预约已提交，我们会尽快与您联系。" });
        setForm({ ...initialForm, source_page: sourcePage });
      } else {
        setNotice({ type: "error", message: response.message });
      }
    } catch {
      setNotice({ type: "error", message: "提交失败，请稍后重试或直接联系我们。" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="姓名 *" name="name" onChange={update} value={form.name} />
        <Input label="公司名称 *" name="company" onChange={update} value={form.company} />
        <Input label="联系电话 *" name="phone" onChange={update} value={form.phone} />
        <Input label="邮箱" name="email" onChange={update} type="email" value={form.email || ""} />
        <Input label="部门" name="department" onChange={update} value={form.department || ""} />
        <Select
          label="关注产品"
          name="product_interest"
          onChange={update}
          options={["FieldSense NFS 近场扫描系统", "近场探头系列", "FieldSense Studio 分析软件", "配套服务"]}
          value={form.product_interest || ""}
        />
        <Select
          label="应用场景 *"
          name="application_scene"
          onChange={update}
          options={["PCB干扰排查", "射频模块分析", "EMC整改与验证", "天线评估", "实验室研发测试"]}
          placeholder="请选择应用场景"
          value={form.application_scene}
        />
        <Select
          label="预计采购时间"
          name="purchase_time"
          onChange={update}
          options={["1个月内", "3个月内", "6个月内", "今年内", "仅了解方案"]}
          placeholder="请选择预计时间"
          value={form.purchase_time || ""}
        />
      </div>
      <Textarea label="需求描述" name="message" onChange={update} value={form.message || ""} />
      {notice ? (
        <div
          className={
            notice.type === "success"
              ? "rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
              : "rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
          }
        >
          {notice.message}
        </div>
      ) : null}
      <Button className="w-full md:w-fit" disabled={loading} type="submit">
        {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        {loading ? "提交中" : "提交预约"}
      </Button>
    </form>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  type = "text"
}: {
  label: string;
  name: keyof LeadPayload;
  value: string;
  onChange: (name: keyof LeadPayload, value: string) => void;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-700">
      {label}
      <input
        className="min-h-12 rounded-md border border-line bg-white px-4 text-sm text-ink-900 outline-none transition placeholder:text-ink-500 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
        onChange={(event) => onChange(name, event.target.value)}
        type={type}
        value={value}
      />
    </label>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder
}: {
  label: string;
  name: keyof LeadPayload;
  value: string;
  onChange: (name: keyof LeadPayload, value: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-700">
      {label}
      <select
        className="min-h-12 rounded-md border border-line bg-white px-4 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
        onChange={(event) => onChange(name, event.target.value)}
        value={value}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  value,
  onChange
}: {
  label: string;
  name: keyof LeadPayload;
  value: string;
  onChange: (name: keyof LeadPayload, value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-700">
      {label}
      <textarea
        className="min-h-32 rounded-md border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
        onChange={(event) => onChange(name, event.target.value)}
        value={value}
      />
    </label>
  );
}
