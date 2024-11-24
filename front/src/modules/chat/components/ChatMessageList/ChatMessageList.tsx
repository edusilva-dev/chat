import { Stack } from "@mui/material";
import { Children, PropsWithChildren, useEffect, useRef } from "react";

export default function ChatMessageList(props: PropsWithChildren) {
  const { children } = props;

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const element = containerRef.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [Children.count(children)]);

  return (
    <Stack
      ref={containerRef}
      sx={{
        height: "100%",
        gap: 2,
        overflowY: "auto",
      }}
    >
      {children}
    </Stack>
  );
}
