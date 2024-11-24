import { Stack, Typography } from "@mui/material";
import { Check } from "@phosphor-icons/react";

export interface ChatMessageListItemProps {
  message: string;
  hour: string;
  position?: "left" | "right";
}

export default function ChatMessageListItem(props: ChatMessageListItemProps) {
  const { message, hour, position = "left" } = props;

  return (
    <Stack
      sx={{
        maxWidth: "50%",
        px: 1.5,
        py: 0.5,
        bgcolor: position === "right" ? "success.light" : "white",
        width: "fit-content",
        borderRadius: 2.5,
        alignSelf: position === "right" ? "flex-end" : "flex-start",
      }}
    >
      <Typography variant="body2">{message}</Typography>
      <Stack direction="row" alignItems="center" gap={0.5} alignSelf="flex-end">
        <Typography variant="caption">{hour}</Typography>
        <Check size={10} color="#000" />
      </Stack>
    </Stack>
  );
}
