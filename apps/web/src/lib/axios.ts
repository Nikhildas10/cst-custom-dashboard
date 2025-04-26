import axios from "axios";
import { useAuthStore } from "@/store/auth";

export const AGENT_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1/";

const apiClient = axios.create({
  baseURL: AGENT_API,
});

apiClient.interceptors.request.use(
  (config) => {
    if (
      !config?.url?.includes("/login") &&
      !config?.url?.includes("/register")
    ) {
      const accessToken = useAuthStore.getState().accessToken;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error: unknown) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export { apiClient };
