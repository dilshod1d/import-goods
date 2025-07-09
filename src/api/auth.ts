// src/services/auth.ts
import api from "@/api/api";

export const login = async ({
  email,
  password,
  rememberMe,
}: {
  email: string;
  password: string;
  rememberMe: boolean;
}) => {
  const res = await api.post("/auth/login", { email, password, rememberMe });
  return res.data;
};

export const register = async ({
  email,
  password,
  companyName,
  phone,
}: {
  email: string;
  password: string;
  companyName: string;
  phone: string;
}) => {
  const res = await api.post("/auth/register", {
    email,
    password,
    companyName,
    phone,
  });
  return res.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
};

export const fetchMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const forgotPassword = async (email: string) => {
  const res = await api.post("/auth/forgot-password", { email });
  return res.data;
};

export const resetPassword = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  const res = await api.post("/auth/reset-password", { token, password });
  return res.data;
};

// import axios from "axios";

// export const login = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   const res = await axios.post("/api/auth/login", { email, password });
//   return res.data;
// };

// export const register = async ({
//   email,
//   password,
//   companyName,
//   phone,
// }: {
//   email: string;
//   password: string;
//   companyName: string;
//   phone: string;
// }) => {
//   const res = await axios.post("/api/auth/register", {
//     email,
//     password,
//     companyName,
//     phone,
//   });
//   return res.data;
// };

// export const logout = async () => {
//   await axios.post("/api/auth/logout");
// };

// export const fetchMe = async () => {
//   const res = await axios.get("/api/auth/me");
//   return res.data;
// };

// export const forgotPassword = async (email: string) => {
//   const res = await axios.post("/api/auth/forgot-password", { email });
//   return res.data;
// };

// export const resetPassword = async ({
//   token,
//   password,
// }: {
//   token: string;
//   password: string;
// }) => {
//   const res = await axios.post("/api/auth/reset-password", { token, password });
//   return res.data;
// };
