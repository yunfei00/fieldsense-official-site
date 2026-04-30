"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { apiUrl } from "@/lib/api";

type LeadStatus = "new" | "contacted" | "qualified" | "invalid" | "closed";
type LeadType = "demo_request" | "contact" | "download";

type LeadItem = {
  id: number;
  created_at: string;
  lead_type: LeadType;
  lead_type_display: string;
  name: string;
  company: string;
  department: string;
  phone: string;
  email: string;
  product_interest: string;
  application_scene: string;
  purchase_time: string;
  message: string;
  source_page: string;
  source_url: string;
  status: LeadStatus;
  status_display: string;
  remark: string;
  updated_at: string;
};

type LeadListResponse = {
  count: number;
  page: number;
  page_size: number;
  results: LeadItem[];
};

type LeadStats = {
  total: number;
  today: number;
  new: number;
  contacted: number;
  qualified: number;
  invalid: number;
  closed: number;
};

type Filters = {
  keyword: string;
  status: string;
  lead_type: string;
  date_range: string;
};

const tokenKey = "fieldsense_leads_admin_token";
const defaultStats: LeadStats = { total: 0, today: 0, new: 0, contacted: 0, qualified: 0, invalid: 0, closed: 0 };

function toQueryString(params: Record<string, string | number | undefined>) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && String(value).trim() !== "") {
      search.set(key, String(value));
    }
  });
  const text = search.toString();
  return text ? `?${text}` : "";
}

function statusBadgeClass(status: LeadStatus) {
  if (status === "new") return "border-blue-200 bg-blue-50 text-blue-700";
  if (status === "contacted") return "border-amber-200 bg-amber-50 text-amber-700";
  if (status === "qualified") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (status === "invalid") return "border-slate-200 bg-slate-100 text-slate-600";
  return "border-ink-700 bg-ink-700 text-white";
}

async function requestJson<T>(url: string, token: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Lead-Admin-Token": token,
      ...(options?.headers || {})
    }
  });
  if (response.status === 403) {
    throw new Error("FORBIDDEN");
  }
  if (!response.ok) {
    throw new Error("REQUEST_FAILED");
  }
  return (await response.json()) as T;
}

export default function LeadsDashboardPage() {
  const [token, setToken] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<LeadStats>(defaultStats);
  const [filters, setFilters] = useState<Filters>({ keyword: "", status: "", lead_type: "", date_range: "" });
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<LeadItem[]>([]);
  const [selected, setSelected] = useState<LeadItem | null>(null);
  const [saving, setSaving] = useState(false);

  const totalPages = useMemo(() => Math.max(Math.ceil(count / pageSize), 1), [count, pageSize]);

  const handleForbidden = () => {
    localStorage.removeItem(tokenKey);
    setToken("");
    setLoggedIn(false);
    setSelected(null);
    setNotice("管理密码错误或已失效");
  };

  const loadData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const query = toQueryString({
        page,
        page_size: pageSize,
        keyword: filters.keyword,
        status: filters.status,
        lead_type: filters.lead_type,
        date_range: filters.date_range
      });
      const [statsData, listData] = await Promise.all([
        requestJson<LeadStats>(`${apiUrl("/api/leads/stats/")}${query}`, token),
        requestJson<LeadListResponse>(`${apiUrl("/api/leads/")}${query}`, token)
      ]);
      setStats(statsData);
      setItems(listData.results);
      setCount(listData.count);
      setNotice("");
    } catch (error) {
      if (error instanceof Error && error.message === "FORBIDDEN") {
        handleForbidden();
      } else {
        setNotice("加载线索失败，请稍后重试");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem(tokenKey) || "";
    if (stored) {
      setToken(stored);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      loadData();
    }
  }, [loggedIn, token, page]); // eslint-disable-line react-hooks/exhaustive-deps

  const enterDashboard = () => {
    if (!passwordInput.trim()) {
      setNotice("请输入管理密码");
      return;
    }
    localStorage.setItem(tokenKey, passwordInput.trim());
    setToken(passwordInput.trim());
    setLoggedIn(true);
    setPage(1);
    setNotice("");
  };

  const applyFilters = () => {
    setPage(1);
    loadData();
  };

  const resetFilters = () => {
    setFilters({ keyword: "", status: "", lead_type: "", date_range: "" });
    setPage(1);
    setTimeout(() => loadData(), 0);
  };

  const openDetail = async (id: number) => {
    try {
      const data = await requestJson<LeadItem>(apiUrl(`/api/leads/${id}/`), token);
      setSelected(data);
      setNotice("");
    } catch (error) {
      if (error instanceof Error && error.message === "FORBIDDEN") {
        handleForbidden();
      } else {
        setNotice("获取线索详情失败");
      }
    }
  };

  const saveDetail = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      const updated = await requestJson<LeadItem>(apiUrl(`/api/leads/${selected.id}/`), token, {
        method: "PATCH",
        body: JSON.stringify({ status: selected.status, remark: selected.remark || "" })
      });
      setSelected(updated);
      setNotice("保存成功");
      await loadData();
    } catch (error) {
      if (error instanceof Error && error.message === "FORBIDDEN") {
        handleForbidden();
      } else {
        setNotice("保存失败，请稍后重试");
      }
    } finally {
      setSaving(false);
    }
  };

  const exportCsv = async () => {
    try {
      const query = toQueryString({
        keyword: filters.keyword,
        status: filters.status,
        lead_type: filters.lead_type,
        date_range: filters.date_range
      });
      const response = await fetch(`${apiUrl("/api/leads/export/")}${query}`, {
        headers: { "X-Lead-Admin-Token": token }
      });
      if (response.status === 403) {
        handleForbidden();
        return;
      }
      if (!response.ok) {
        throw new Error("EXPORT_FAILED");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "fieldsense-leads.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch {
      setNotice("导出失败，请稍后重试");
    }
  };

  const logout = () => {
    localStorage.removeItem(tokenKey);
    setLoggedIn(false);
    setToken("");
    setPasswordInput("");
    setSelected(null);
  };

  if (!loggedIn) {
    return (
      <section className="bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-xl">
          <Card className="p-8 hover:translate-y-0">
            <h1 className="text-3xl font-bold text-ink-900">FieldSense 线索管理</h1>
            <p className="mt-3 text-sm text-ink-600">请输入管理密码后进入管理台</p>
            <input
              className="mt-6 min-h-12 w-full rounded-md border border-line px-4 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder="管理密码"
              type="password"
              value={passwordInput}
            />
            {notice ? <p className="mt-3 text-sm font-semibold text-red-600">{notice}</p> : null}
            <Button className="mt-6 w-full" onClick={enterDashboard} type="button">
              进入管理台
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card className="p-6 hover:translate-y-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-ink-900">FieldSense 线索管理</h1>
              <p className="mt-2 text-sm text-ink-600">查看客户咨询、预约演示和资料下载线索</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={loadData} type="button" variant="outline">
                刷新
              </Button>
              <Button onClick={exportCsv} type="button" variant="outline">
                导出 CSV
              </Button>
              <Button onClick={logout} type="button" variant="secondary">
                退出
              </Button>
            </div>
          </div>
          {notice ? <p className="mt-3 text-sm font-semibold text-brand-700">{notice}</p> : null}
        </Card>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          <StatCard label="全部线索" value={stats.total} />
          <StatCard label="今日新增" value={stats.today} />
          <StatCard label="新线索" value={stats.new} />
          <StatCard label="已联系" value={stats.contacted} />
          <StatCard label="有效线索" value={stats.qualified} />
          <StatCard label="已关闭" value={stats.closed} />
        </div>

        <Card className="p-5 hover:translate-y-0">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
            <input
              className="min-h-11 rounded-md border border-line px-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 xl:col-span-2"
              onChange={(event) => setFilters((prev) => ({ ...prev, keyword: event.target.value }))}
              placeholder="姓名/公司/电话/邮箱/需求"
              value={filters.keyword}
            />
            <select
              className="min-h-11 rounded-md border border-line px-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              onChange={(event) => setFilters((prev) => ({ ...prev, lead_type: event.target.value }))}
              value={filters.lead_type}
            >
              <option value="">全部类型</option>
              <option value="contact">联系咨询</option>
              <option value="demo_request">预约演示</option>
              <option value="download">资料下载</option>
            </select>
            <select
              className="min-h-11 rounded-md border border-line px-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              onChange={(event) => setFilters((prev) => ({ ...prev, status: event.target.value }))}
              value={filters.status}
            >
              <option value="">全部状态</option>
              <option value="new">新线索</option>
              <option value="contacted">已联系</option>
              <option value="qualified">有效线索</option>
              <option value="invalid">无效线索</option>
              <option value="closed">已关闭</option>
            </select>
            <select
              className="min-h-11 rounded-md border border-line px-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              onChange={(event) => setFilters((prev) => ({ ...prev, date_range: event.target.value }))}
              value={filters.date_range}
            >
              <option value="">全部时间</option>
              <option value="today">今天</option>
              <option value="7d">近7天</option>
              <option value="30d">近30天</option>
            </select>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={applyFilters} type="button">
                查询
              </Button>
              <Button className="flex-1" onClick={resetFilters} type="button" variant="outline">
                重置
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden p-0 hover:translate-y-0">
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full text-left text-sm">
              <thead className="bg-brand-50">
                <tr className="text-ink-700">
                  <th className="px-4 py-3">提交时间</th>
                  <th className="px-4 py-3">类型</th>
                  <th className="px-4 py-3">姓名</th>
                  <th className="px-4 py-3">公司</th>
                  <th className="px-4 py-3">电话</th>
                  <th className="px-4 py-3">关注产品</th>
                  <th className="px-4 py-3">应用场景</th>
                  <th className="px-4 py-3">状态</th>
                  <th className="px-4 py-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-ink-500" colSpan={9}>
                      加载中...
                    </td>
                  </tr>
                ) : items.length === 0 ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-ink-500" colSpan={9}>
                      暂无线索数据
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr className="border-t border-line" key={item.id}>
                      <td className="px-4 py-3 text-ink-600">{item.created_at.replace("T", " ").slice(0, 19)}</td>
                      <td className="px-4 py-3">{item.lead_type_display}</td>
                      <td className="px-4 py-3 font-semibold text-ink-900">{item.name}</td>
                      <td className="px-4 py-3">{item.company}</td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3">{item.product_interest || "-"}</td>
                      <td className="px-4 py-3">{item.application_scene || "-"}</td>
                      <td className="px-4 py-3">
                        <Badge className={statusBadgeClass(item.status)}>{item.status_display}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Button onClick={() => openDetail(item.id)} type="button" variant="outline">
                          查看
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-line px-4 py-3">
            <Button disabled={page <= 1} onClick={() => setPage((prev) => Math.max(prev - 1, 1))} type="button" variant="outline">
              上一页
            </Button>
            <span className="text-sm font-semibold text-ink-700">
              {page} / {totalPages}
            </span>
            <Button
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              type="button"
              variant="outline"
            >
              下一页
            </Button>
          </div>
        </Card>

        {selected ? (
          <Card className="p-6 hover:translate-y-0">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-ink-900">线索详情</h2>
              <Button onClick={() => setSelected(null)} type="button" variant="outline">
                关闭
              </Button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <DetailItem label="姓名" value={selected.name} />
              <DetailItem label="公司" value={selected.company} />
              <DetailItem label="部门/职位" value={selected.department} />
              <DetailItem label="电话" value={selected.phone} />
              <DetailItem label="邮箱" value={selected.email} />
              <DetailItem label="关注产品" value={selected.product_interest} />
              <DetailItem label="应用场景" value={selected.application_scene} />
              <DetailItem label="预计采购时间" value={selected.purchase_time} />
              <DetailItem label="来源页面" value={selected.source_page} />
              <DetailItem label="来源地址" value={selected.source_url} />
              <DetailItem label="提交时间" value={selected.created_at.replace("T", " ").slice(0, 19)} />
              <DetailItem label="更新时间" value={selected.updated_at.replace("T", " ").slice(0, 19)} />
            </div>
            <div className="mt-4 grid gap-2">
              <label className="text-sm font-semibold text-ink-700">需求描述</label>
              <textarea className="min-h-24 rounded-md border border-line px-3 py-2 text-sm" readOnly value={selected.message || "-"} />
            </div>
            <div className="mt-4 grid gap-2 md:max-w-sm">
              <label className="text-sm font-semibold text-ink-700">当前状态</label>
              <select
                className="min-h-11 rounded-md border border-line px-3 text-sm"
                onChange={(event) => setSelected((prev) => (prev ? { ...prev, status: event.target.value as LeadStatus } : prev))}
                value={selected.status}
              >
                <option value="new">新线索</option>
                <option value="contacted">已联系</option>
                <option value="qualified">有效线索</option>
                <option value="invalid">无效线索</option>
                <option value="closed">已关闭</option>
              </select>
            </div>
            <div className="mt-4 grid gap-2">
              <label className="text-sm font-semibold text-ink-700">内部备注</label>
              <textarea
                className="min-h-24 rounded-md border border-line px-3 py-2 text-sm"
                onChange={(event) => setSelected((prev) => (prev ? { ...prev, remark: event.target.value } : prev))}
                value={selected.remark || ""}
              />
            </div>
            <div className="mt-4">
              <Button disabled={saving} onClick={saveDetail} type="button">
                {saving ? "保存中..." : "保存"}
              </Button>
            </div>
          </Card>
        ) : null}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-4 hover:translate-y-0">
      <div className="text-sm font-semibold text-ink-600">{label}</div>
      <div className="mt-2 text-2xl font-bold text-ink-900">{value}</div>
    </Card>
  );
}

function DetailItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <div className="text-xs font-semibold text-ink-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink-900">{value || "-"}</div>
    </div>
  );
}
