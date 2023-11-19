import axios from "axios";

const DEFAULT_ERROR_MESSAGE = "Network Error or Something went wrong.";

export const baseURL = import.meta.env.DEV
  ? "http://127.0.0.1:8000/api/v1"
  : "";

const customRequest = axios.create({ baseURL });
customRequest.interceptors.request.use((config) => {
  const accessToken = JSON.parse(localStorage.getItem("user"))?.token;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export const LoginUser = async (data) => {
  try {
    const res = await customRequest.post(`/auth/login`, data);

    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};
