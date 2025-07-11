"use client";

import {
  ActionIcon,
  Badge,
  Box,
  ContainerProps,
  Flex,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./Hero.module.css";
import MotionReveal from "@/app/shared/components/EntryAnimation";

type HeroProps = ContainerProps & {
  badge?: string;
  title?: string;
  description?: string;
  inputUrl?: string;
  setInputUrl?: React.Dispatch<React.SetStateAction<string>>;
  handleUrlSubmit?: (url: string) => void;
};

export const Hero = ({
  badge = "InsightIQ: Analyze Now",
  title = "Optimize Your Website for Speed & Efficiency",
  description = "Get real-time insights into load time, page size, and request count. Evaluate performance metrics and improve your site's user experience with data-driven decisions.",
  inputUrl,
  setInputUrl,
  handleUrlSubmit,
  ...containerProps
}: HeroProps) => (
  <Box
    px="sm"
    pos="relative"
    h="100vh"
    mah={950}
    style={{ overflow: "hidden" }}
  >
    <Box mx={25} component="section" h="100vh" mah={950} {...containerProps}>
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
          <MotionReveal delay={0.6}>
            <TextInput
              w={400}
              px="md"
              my="sm"
              maw="100vw"
              value={inputUrl}
              onChange={(e) => setInputUrl?.(e.currentTarget.value)}
              placeholder="Enter your website URL"
              size="md"
              rightSection={
                <Tooltip label="Analyze" withArrow position="right-end">
                  <ActionIcon
                    onClick={() => handleUrlSubmit?.(inputUrl ?? "")}
                    className={classes["cta-icon"]}
                  >
                    <IconArrowRight />
                  </ActionIcon>
                </Tooltip>
              }
              classNames={{ input: classes.input }}
            />
          </MotionReveal>
        </Stack>
      </Flex>
    </Box>
  </Box>
);
