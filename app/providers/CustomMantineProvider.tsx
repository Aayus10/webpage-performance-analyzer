import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import "@mantine/core/styles.css";
import { theme } from "@/theme";

export default function CustomMantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
