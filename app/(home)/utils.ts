import { Bounce, toast } from "react-toastify";
import { apiClient } from "../shared/lib/apiClient";

const API_KEY = process.env.NEXT_PUBLIC_PAGE_SPEED_EVALUATOR_API_KEY; // Make sure this is defined in .env.local

export const fetchResult = async (targetUrl: string) => {
  try {
    const response = await apiClient.get("", {
      params: {
        url: targetUrl,
        strategy: "desktop",
        key: API_KEY,
      },
    });

    return response?.data?.lighthouseResult?.audits;
  } catch (error: any) {
    console.error("Error fetching performance result:", error);
    return;
  }
};
