// utils/apiRequest.ts
import axios from "axios";

interface RequestOptions {
  method?: "get" | "post" | "put" | "delete" | "patch";
  api: string;
  data?: any;
  headers?: Record<string, string>;
  params?: any;
}

export default async function APIrequest({
  method = "get",
  api,
  data = {},
  headers = {},
  params = {},
}: RequestOptions) {
  try {
    const response = await axios({
      method,
      url: api,
      data,
      headers,
      params,
    });

    return response.data;
  } catch (error: any) {
    console.error("API Error:", error);
    throw error;
  }
}
