import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PAGE_SPEED_EVALUATOR_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
