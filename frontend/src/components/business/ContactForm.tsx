"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitContact } from "@/lib/api";
import type { LeadPayload } from "@/types/lead";

const initialForm: LeadPayload = {
  name: "",
  company: "",
  department: "",
  phone: "",
  email: "",
  product_interest: "近场扫描系统",
  application_scene: "",
  purchase_time: "",
  message: "",
  source_page: "联系我们页",
  source_url: "/contact"
};

const requiredFields: Array<keyof LeadPayload> = ["name", "company", "phone", "application_scene"];

export function ContactForm() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
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
      const response = await submitContact({
        ...form,
        source_url: typeof window !== "undefined" ? window.location.pathname : form.source_url
      });
      if (response.success) {
        setNotice({ type: "success", message: response.message });
        setForm(initialForm);
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
        <Field label="姓名 *" name="name" onChange={update} value={form.name} />
        <Field label="公司名称 *" name="company" onChange={update} value={form.company} />
        <Field label="联系电话 *" name="phone" onChange={update} value={form.phone} />
        <Field label="邮箱" name="email" onChange={update} type="email" value={form.email || ""} />
        <Field label="部门" name="department" onChange={update} value={form.department || ""} />
        <Field label="关注产品" name="product_interest" onChange={update} value={form.product_interest || ""} />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink-700">
        应用场景 *
        <select
          className="min-h-12 rounded-md border border-line bg-white px-4 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
          onChange={(event) => update("application_scene", event.target.value)}
          value={form.application_scene}
        >
          <option value="">请选择应用场景</option>
          {["PCB干扰排查", "射频模块分析", "EMC整改与验证", "天线评估", "实验室研发测试", "其他"].map(
            (option) => (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink-700">
        需求描述
        <textarea
          className="min-h-32 rounded-md border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
          onChange={(event) => update("message", event.target.value)}
          value={form.message || ""}
        />
      </label>
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
        {loading ? "提交中" : "提交咨询"}
      </Button>
    </form>
  );
}

function Field({
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
        className="min-h-12 rounded-md border border-line bg-white px-4 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
        onChange={(event) => onChange(name, event.target.value)}
        type={type}
        value={value}
      />
    </label>
  );
}
