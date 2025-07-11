import {
  AnimatedCounter,
  AnimatedCounterProps,
} from "@/app/shared/components/AnimatedCounter";
import { Box, BoxProps, rem, Text } from "@mantine/core";
import { motion } from "framer-motion";

export const StatCell = ({
  value,
  title,
  description,
  unit,
  ...boxProps
}: BoxProps & {
  value: AnimatedCounterProps["value"];
  title?: string;
  description: string;
  unit?: string;
}) => (
  <motion.div
    initial={{ opacity: 0.0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    viewport={{ once: true }}
  >
    <Box {...boxProps}>
      <AnimatedCounter
        ta="center"
        fz={rem(48)}
        fw="bold"
        value={value}
        suffix={unit}
      />
      <Text fz="sm" inline ta="center" c="dimmed">
        {description}
      </Text>
    </Box>
  </motion.div>
);
