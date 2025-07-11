"use client";

import React, { useState } from "react";
import { Hero } from "./components/HeroSection/Hero";
import { useRouter } from "next/navigation";
import InputSection from "./components/InputSection/InputSection";
import { PageWrapper } from "../shared/components/PageWrapper/PageWrapper";

export default function HomePage() {
  const [inputUrl, setInputUrl] = useState<string>("");
  const router = useRouter();

  const handleUrlSubmit = (url: string) => {
    if (url) {
      router.push(`/result?inputUrl=https://${encodeURIComponent(url)}`);
    }
  };

  return (
    <PageWrapper
      badge="InsightIQ: Analyze Now"
      title="Optimize Your Website for Speed & Efficiency"
      description="Get real-time insights into load time, page size, and request count. Evaluate performance metrics and improve your site's user experience with data-driven decisions."
    >
      <InputSection
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        handleUrlSubmit={handleUrlSubmit}
      />
    </PageWrapper>
  );
}
