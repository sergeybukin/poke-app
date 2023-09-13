import axios from "axios";
import { BASE_API_URL } from "../constants/api";

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    switch (status) {
      case 401:
        break;
    }

    throw error;
  },
);
