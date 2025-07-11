"use client";

import { createTheme, rem } from "@mantine/core";

// Financial analytics color palette
// Primary colors for main elements and navigation
const primaryBlue = "#0E4D92"; // Deep blue - main brand color
const secondaryBlue = "#1A73E8"; // Bright blue - for interactive elements

// Success/Growth colors - positive financial indicators
const growthGreen = "#0CA678";
const lightGreen = "#C3FAE8";

// Warning/Decrease colors - negative financial indicators
const decreaseRed = "#E03131";
const lightRed = "#FFE3E3";

// Neutral colors for backgrounds and text
const darkGray = "#1D2939";
const mediumGray = "#667085";
const lightGray = "#F0F2F5";
const subtleGray = "#F9FAFB";

// Highlight colors for charts and visualizations
const chartColors = [
  "#4285F4", // Blue
  "#34A853", // Green
  "#FBBC05", // Yellow
  "#EA4335", // Red
  "#8E24AA", // Purple
  "#00ACC1", // Teal
  "#FB8C00", // Orange
  "#607D8B", // Blue Gray
];

export const theme = createTheme({
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  headings: {
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    sizes: {
      h1: { fontSize: `${rem(32)}`, lineHeight: "1.3", fontWeight: "700" },
      h2: { fontSize: `${rem(24)}`, lineHeight: "1.35", fontWeight: "600" },
      h3: { fontSize: `${rem(20)}`, lineHeight: "1.4", fontWeight: "600" },
      h4: { fontSize: `${rem(16)}`, lineHeight: "1.45", fontWeight: "600" },
      h5: { fontSize: `${rem(14)}`, lineHeight: "1.5", fontWeight: "600" },
      h6: { fontSize: rem(12), lineHeight: "1.5", fontWeight: "600" },
    },
  },
  colors: {
    primary: [
      "#E1EFFF",
      "#B2D4FF",
      "#80B5FF",
      "#5096FF",
      "#2278FF",
      primaryBlue,
      "#0A3C7A",
      "#062C62",
      "#041E4A",
      "#021232",
    ],
    secondary: [
      "#E6F0FF",
      "#CCE0FF",
      "#99C2FF",
      "#66A3FF",
      "#3385FF",
      secondaryBlue,
      "#0055CC",
      "#004099",
      "#002B66",
      "#001733",
    ],
    success: [
      lightGreen,
      "#96F2D7",
      "#63E6BE",
      "#38D9A9",
      "#20C997",
      growthGreen,
      "#099268",
      "#087F5B",
      "#066D4E",
      "#045D42",
    ],
    danger: [
      lightRed,
      "#FFBDBD",
      "#FF9B9B",
      "#FF7A7A",
      "#FF5858",
      decreaseRed,
      "#C92A2A",
      "#B02525",
      "#962020",
      "#7D1A1A",
    ],
    gray: [
      subtleGray,
      lightGray,
      "#E5E7EB",
      "#D2D6DB",
      "#9DA4AE",
      mediumGray,
      "#4B5563",
      "#374151",
      "#1F2937",
      darkGray,
    ],
  },
  primaryColor: "primary",
  primaryShade: 5,

  shadows: {
    xs: "0 1px 2px rgba(16, 24, 40, 0.05)",
    sm: "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)",
    md: "0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)",
    lg: "0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)",
    xl: "0 20px 24px -4px rgba(16, 24, 40, 0.1), 0 8px 8px -4px rgba(16, 24, 40, 0.04)",
  },

  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
  },

  other: {
    chartColors,
    transition: {
      fast: "150ms ease",
      default: "250ms ease",
      slow: "400ms ease",
    },
  },
});
