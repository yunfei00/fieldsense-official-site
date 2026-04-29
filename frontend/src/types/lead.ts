export type LeadPayload = {
  name: string;
  company: string;
  department?: string;
  phone: string;
  email?: string;
  product_interest?: string;
  application_scene: string;
  purchase_time?: string;
  message?: string;
  source_page?: string;
  source_url?: string;
};

export type LeadResponse = {
  success: boolean;
  message: string;
};

