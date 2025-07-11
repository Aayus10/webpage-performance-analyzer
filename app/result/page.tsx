"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

import { ResultPanel } from "./components/ResultPanel/ResultPanel";
import { PageWrapper } from "../shared/components/PageWrapper/PageWrapper";

import { useFetchPerformanceResult } from "../shared/hooks/useFetchPerformanceResult";
import CustomLoader from "../shared/components/Loader/Loader";
import { Button, Center } from "@mantine/core";
import Link from "next/link";
import { showErrorMessage } from "./utils";

export default function ResultPage() {
  return (
    <Suspense fallback={<CustomLoader />}>
      <ResultPageContent />
    </Suspense>
  );
}

// ✅ Nested component that uses useSearchParams()
function ResultPageContent() {
  const params = useSearchParams();
  const inputUrl = params.get("inputUrl");
  const router = useRouter();

  const {
    data: result,
    isLoading,
    isError,
  } = useFetchPerformanceResult(inputUrl ?? "");

  if (isError) {
    showErrorMessage();
    router.push("/");
    return null;
  }

  return (
    <PageWrapper
      title={`Here’s how your website performs`}
      description={`Below are key performance metrics obtained for ${inputUrl}. Use these insights to improve speed, efficiency, and overall user experience.`}
    >
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <ResultPanel result={result} />
          <Center>
            <Button
              component={Link}
              href={"/"}
              color="dark"
              variant="outline"
              mt={60}
            >
              Analyze Another Site
            </Button>
          </Center>
        </>
      )}
    </PageWrapper>
  );
}
