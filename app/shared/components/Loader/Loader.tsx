import { Center, Loader } from "@mantine/core";
import React from "react";

export default function CustomLoader() {
  return (
    <div>
      <Center mt={60}>
        <Loader color="dark" type="bars" />
      </Center>
    </div>
  );
}
