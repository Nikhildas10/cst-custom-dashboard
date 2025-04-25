import axios from "axios";

export const AGENT_API = 'http://localhost:8000/api/v1/';

const apiClient = axios.create({
  baseURL: AGENT_API,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("Request Config:", config);
    if (
      !config?.url?.includes("/login") &&
      !config?.url?.includes("/register")
    ) {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    console.log(config);
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
