import { Stack } from "@mui/material";
import { LayoutHeader, LayoutRoot } from "./modules/layout";
import { useState } from "react";
import {
  Chat,
  ChatField,
  ChatMessageList,
  ChatMessageListItem,
} from "./modules/chat";
import { ChatMessageListItemProps } from "./modules/chat/components";

export default function App() {
  const [chatHistory, setChatHistory] = useState<ChatMessageListItemProps[]>([
    {
      message:
        "OMG 😲 do you remember what you did last night at the work night out?",
      hour: "18:12",
    },
    {
      position: "right",
      message: "No haha",
      hour: "18:16",
    },
    {
      position: "right",
      message: "i don't remember anything 😄",
      hour: "18:16",
    },
  ]);

  return (
    <LayoutRoot>
      <LayoutHeader />
      <Stack
        flexGrow={1}
        justifyContent="flex-end"
        height="calc(100dvh - 74px)"
      >
        <Chat>
          <ChatMessageList>
            {chatHistory.map((messages, index) => (
              <ChatMessageListItem key={index} {...messages} />
            ))}
          </ChatMessageList>
          <ChatField setChatHistory={setChatHistory} />
        </Chat>
      </Stack>
    </LayoutRoot>
  );
}
