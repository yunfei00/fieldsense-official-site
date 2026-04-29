import type { LeadPayload, LeadResponse } from "@/types/lead";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

async function postLead(endpoint: string, payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = (await response.json()) as LeadResponse;
  if (!response.ok) {
    return {
      success: false,
      message: data.message || "提交失败，请检查表单信息。"
    };
  }
  return data;
}

export function submitDemoRequest(payload: LeadPayload) {
  return postLead("/api/leads/demo-request/", payload);
}

export function submitContact(payload: LeadPayload) {
  return postLead("/api/leads/contact/", payload);
}

