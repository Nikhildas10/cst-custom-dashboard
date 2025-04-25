import { apiClient } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth";

export function useLogin() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      try {
        const response = await apiClient.post("user/auth/login", {
          email,
          password,
        });
        const { accessToken, name: username } = response?.data?.data;
        setAuth(accessToken, username);
        return response.data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Login successful");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useRegister() {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) => {
      try {
        const response = await apiClient.post("user/auth/register", {
          name,
          email,
          password,
        });
        return response.data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Registration successful");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
