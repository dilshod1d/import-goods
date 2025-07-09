import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  login,
  logout,
  fetchMe,
  register,
  forgotPassword,
  resetPassword,
} from "@/api/auth";

// ✅ useQuery updated to use object syntax
export const useAuth = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false,
  });

// ✅ All useMutation calls updated to object syntax
export const useLogin = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });
};

export const useRegister = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });
};

export const useLogout = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });
};

// Forgot password
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
  });
};

// Reset password
export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};
