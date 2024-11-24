import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function LayoutRoot(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Stack flexGrow={1} bgcolor="grey.100">
      {children}
    </Stack>
  );
}
