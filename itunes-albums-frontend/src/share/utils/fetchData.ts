import { getConfig } from "./config";

export const fetchData = async (
  endpoint: string,
  queryParams: Record<string, string> = {},
  token?: string,
  method: "GET" | "POST" = "GET",
  body?: string
) => {
  try {
    const { backendUrl } = getConfig();

    // Prepare query string
    const queryString = new URLSearchParams(queryParams).toString();
    const url = queryString
      ? `${backendUrl}${endpoint}?${queryString}`
      : `${backendUrl}${endpoint}`;

    // Set headers, including Authorization if token is provided
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (method === "POST" && body) {
      options.body = body;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Error in the request");
    }

    return await response.json();
  } catch (error) {
    console.error("Error making the request:", error);
    throw error;
  }
};
