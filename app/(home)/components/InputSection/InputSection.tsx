import { ActionIcon, TextInput, Tooltip } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import classes from "./InputSection.module.css";

export default function InputSection({
  inputUrl,
  setInputUrl,
  handleUrlSubmit,
}: {
  inputUrl?: string;
  setInputUrl?: React.Dispatch<React.SetStateAction<string>>;
  handleUrlSubmit?: (url: string) => void;
}) {
  return (
    <TextInput
      w={600}
      px="md"
      my="sm"
      maw="100vw"
      value={inputUrl}
      onChange={(e) => setInputUrl?.(e.currentTarget.value)}
      placeholder="Enter your website URL (only domain name, exclude http:// or https://)"
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
  );
}
