import { Box, Group, Loader, ScrollArea, Text } from "@mantine/core";
import Markdown from "react-markdown";

export interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ChatProps {
  messages: Message[];
  isLoading?: boolean;
}

export function Chat({ messages, isLoading }: ChatProps) {
  return (
    <ScrollArea.Autosize
      w={"100%"}
      className={"border-2 border-slate-300"}
      h={"80%"}

    >
      <Group mx={"5%"} w={"90%"} justify={"space-between"}>
        <Text c={"white"}>AI</Text>
        <Text c={"white"}>User</Text>
      </Group>
      {messages.map((message, index) => {
        return (
          <Box
            key={index}
            mx={"1rem"}
            mt={"1rem"}
            maw={"100%"}
            p={"1rem"}
            style={(theme)=>({
              borderColor: message.sender === "user" ? theme.colors.blue[5] : theme.colors.red[5],
            })}
            className={"flex-1 rounded-2xl border-2"}
          >
            {
              <Markdown
                className={

                  (message.sender === "user" ? "text-right" : "text-left")
                }
              >
                {message.text}
              </Markdown>
            }
          </Box>
        );
      })}
      {isLoading && (
        <Box
          mx={"1rem"}
          mt={"1rem"}
          maw={"100%"}
          p={"1rem"}
          style={(theme)=>({
            borderColor: theme.colors.red[5],
          })}
          className={"flex-1 rounded-2xl border-2"}
        >
          <Loader color="blue" type="dots" />
        </Box>
      )}
      <div className={"h-8"}>

      </div>
    </ScrollArea.Autosize>
  );
}
