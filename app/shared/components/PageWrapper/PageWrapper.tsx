"use client";

import {
  Badge,
  Box,
  ContainerProps,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MotionReveal from "@/app/shared/components/EntryAnimation";
import classes from "./PageWrapper.module.css";

type PageLayoutProps = ContainerProps & {
  badge?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const PageWrapper = ({
  badge,
  title,
  description,
  children,

  ...containerProps
}: PageLayoutProps) => (
  <Box
    pt={{ base: 30, sm: 150 }}
    pb={"xl"}
    px="sm"
    pos="relative"
    mih="90vh"
    style={{ overflow: "hidden" }}
  >
    <Box mx={25} component="section" mih="90vh" {...containerProps}>
      {/* Background Images */}
      <Image
        pos="absolute"
        inset={0}
        src="https://static.vecteezy.com/system/resources/thumbnails/009/485/257/small_2x/white-gray-studio-background-abstract-gradient-with-border-black-vignette-empty-light-room-clean-design-for-displaying-product-3d-illustration-vector.jpg"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: "none", userSelect: "none" }}
        darkHidden
      />
      <Image
        pos="absolute"
        inset={0}
        src="https://img.freepik.com/free-vector/white-black-grainy-noise-stipple-texture-background_1017-51837.jpg?semt=ais_hybrid&w=740"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: "none", userSelect: "none" }}
        lightHidden
      />
      <Box
        pos="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        className={classes["vertical-backdrop"]}
      />

      <Flex h="100%" align="center" pos="relative" justify="center">
        <Stack
          pt={{ base: "xl", sm: 0 }}
          maw="var(--mantine-breakpoint-md)"
          align="center"
          gap="lg"
          style={{ zIndex: 1 }}
        >
          {/* Badge */}
          {badge && (
            <MotionReveal delay={0.1}>
              <Badge
                variant="default"
                p="xs"
                bg="var(--mantine-color-body)"
                size="lg"
                mb="lg"
                style={{ textTransform: "none" }}
              >
                {badge.toUpperCase()}
              </Badge>
            </MotionReveal>
          )}

          {/* Title */}
          <MotionReveal delay={0.2}>
            <Title
              ta="center"
              order={1}
              fz="h1"
              style={{ textWrap: "balance" }}
            >
              {title}
            </Title>
          </MotionReveal>

          {/* Description */}
          <MotionReveal delay={0.4}>
            <Text
              ta="center"
              maw="var(--mantine-breakpoint-md)"
              fz="md"
              style={{ textWrap: "balance" }}
            >
              {description}
            </Text>
          </MotionReveal>

          {/* Input Field */}
          <MotionReveal delay={0.6}>{children}</MotionReveal>
        </Stack>
      </Flex>
    </Box>
  </Box>
);
