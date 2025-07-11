import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InsightIQ | Result Page",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
