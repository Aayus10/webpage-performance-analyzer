"use client";

import { Button, Grid } from "@mantine/core";
import { StatCell } from "./StatCell";
import { extractNumericValue } from "../../utils";

export const ResultPanel = ({ result }: { result: any }) => {
  const {
    ["speed-index"]: { displayValue: loadTime },
    ["total-byte-weight"]: { displayValue: pageSize },
    ["network-requests"]: {
      details: { items: networkRequests },
    },
  } = result;
  return (
    <>
      <Grid gutter="calc(var(--mantine-spacing-md) * 4)" align="center" mx="xs">
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <StatCell
            value={extractNumericValue(loadTime) * 1000}
            description="Page Load Duration"
            unit="ms"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <StatCell
            value={extractNumericValue(pageSize)}
            description="Aggregate Page Size"
            unit="KiB"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <StatCell
            value={networkRequests?.length || 0}
            description="Total HTTP Requests"
          />
        </Grid.Col>
      </Grid>
    </>
  );
};
