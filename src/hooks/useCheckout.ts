import { useMutation } from "@tanstack/react-query";
import { calculateCartTotal, placeOrder } from "@/api/cart";

export const useCartPricing = () =>
  useMutation({
    mutationKey: ["cart", "calculate-total"],
    mutationFn: calculateCartTotal,
  });

export const usePlaceOrder = () =>
  useMutation({
    mutationKey: ["cart", "place-order"],
    mutationFn: placeOrder,
  });
