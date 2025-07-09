import { useQuery } from "@tanstack/react-query";
import { fetchAnalyticsOverview } from "@/api/analytics";

export const useAnalyticsOverview = () =>
  useQuery({
    queryKey: ["admin", "analytics"],
    queryFn: fetchAnalyticsOverview,
  });
