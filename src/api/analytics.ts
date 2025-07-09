import axios from "axios";

export interface AnalyticsOverview {
  totalSales: number;
  totalOrders: number;
  recentSales: { _id: string; total: number }[];
  topProducts: { _id: string; quantitySold: number }[];
}

export const fetchAnalyticsOverview = async (): Promise<AnalyticsOverview> => {
  const res = await axios.get("/api/admin/analytics/overview");
  return res.data;
};
