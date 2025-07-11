import { fetchResult } from "@/app/(home)/utils";
import { useQuery } from "@tanstack/react-query";

export const useFetchPerformanceResult = (inputUrl: string) => {
  return useQuery({
    queryKey: ["result", inputUrl],
    queryFn: () => fetchResult(inputUrl!),
  });
};
