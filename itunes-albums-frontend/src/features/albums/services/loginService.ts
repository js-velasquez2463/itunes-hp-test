import { getConfig } from "../../../share/utils/config";
import { fetchData } from "../../../share/utils/fetchData";

export const loginService = async () => {
  try {
    const { loginCredentials } = getConfig();
    const response = await fetchData(
      "/login",
      {},
      undefined,
      "POST",
      JSON.stringify({
        username: loginCredentials.username,
        password: loginCredentials.password,
      })
    );
    if (response.token) {
      return response.token;
    }
    throw new Error("Login failed");
  } catch (error) {
    console.error("Login service failed:", error);
    throw error;
  }
};

export const getValidToken = async (): Promise<string> => {
  let token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    token = await loginService();
    localStorage.setItem("token", token || "");
  }

  return token || "";
};

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: any = JSON.parse(atob(token.split(".")[1]));
    const expiry = decoded.exp;
    console.log("expiryyy", expiry);
    if (!expiry) return true;
    return Date.now() >= expiry * 1000;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};
