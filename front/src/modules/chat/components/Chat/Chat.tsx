import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Chat(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Stack
      sx={{
        height: "100%",
        flexGrow: 1,
        py: 3,
        px: 14,
        gap: 2,
      }}
    >
      {children}
    </Stack>
  );
}
