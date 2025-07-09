import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchInventory, updateProductStock } from "@/api/inventory";

export const useInventory = () =>
  useQuery({
    queryKey: ["inventory"],
    queryFn: fetchInventory,
  });

export const useUpdateStock = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProductStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
  });
};
