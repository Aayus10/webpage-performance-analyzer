import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InsightIQ: Analyze Now",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
