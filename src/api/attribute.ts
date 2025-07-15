import api from "./api";
import { Attribute } from "@/types/product";

export const fetchAllAttributes = async (): Promise<Attribute[]> => {
  const res = await api.get("/attributes");
  return res.data;
};
