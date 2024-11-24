import { Button, Stack, TextField } from "@mui/material";
import { PaperPlaneRight, Smiley } from "@phosphor-icons/react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ChatMessageListItemProps } from "../";

interface ChatFieldProps {
  setChatHistory: Dispatch<SetStateAction<ChatMessageListItemProps[]>>;
}

export default function ChatField(props: ChatFieldProps) {
  const { setChatHistory } = props;

  const [message, setMessage] = useState("");

  function handleSendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!message) {
      return;
    }

    const currentDate = new Date();

    const hour = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    setChatHistory((history) => [
      ...history,
      {
        message,
        hour,
        position: "right",
      },
    ]);
    setMessage("");
  }

  return (
    <form onSubmit={handleSendMessage}>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        sx={{
          bgcolor: "white",
        }}
        placeholder="Message"
        fullWidth={true}
        slotProps={{
          input: {
            sx: {
              gap: 1,
              borderRadius: 2.5,
            },
            startAdornment: (
              <Stack sx={{ cursor: "pointer" }}>
                <Smiley size={20} color="#000" />
              </Stack>
            ),
            endAdornment: (
              <Button type="submit">
                <PaperPlaneRight size={20} color="#000" />
              </Button>
            ),
          },
        }}
      />
    </form>
  );
}
