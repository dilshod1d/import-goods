import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, toggleUserBlock, fetchUserOrders } from "@/api/adminUsers";

export const useAdminUsers = () =>
  useQuery({
    queryKey: ["admin", "users"],
    queryFn: fetchUsers,
  });

export const useToggleUserBlock = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: toggleUserBlock,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "users"] }),
  });
};

export const useUserOrders = (userId: string) =>
  useQuery({
    queryKey: ["admin", "user-orders", userId],
    queryFn: () => fetchUserOrders(userId),
    enabled: !!userId,
  });
