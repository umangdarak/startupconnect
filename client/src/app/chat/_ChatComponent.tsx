import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

interface EachChatProps {
  chatID: string;
  senderId: string;
  senderModel: string;
  receiverId: string;
  receiverModel: string;
}

interface Message {
  senderId: string;
  senderModel: string;
  receiverId: string;
  receiverModel: string;
  content: string;
  timestamp: Date;
}

const socket = io("http://localhost:8000");

export default function ChatComponent(props: EachChatProps) {
  const authState = useSelector((state: RootState) => state.auth);

  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchChat();
    socket.emit("joinChat", props.chatID);

    socket.on("receiveMessage", (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [props.chatID]);

  const fetchChat = async () => {
    if (props.chatID) {
      try {
        const res = await fetch(`http://localhost:8000/chat/getmessages`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ chatId: props.chatID }),
        });
        if (res.ok) {
          const data = await res.json();
          const fetchedMessages = data.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }));
          fetchedMessages.sort(
            (a: Message, b: Message) => a.timestamp.getTime() - b.timestamp.getTime()
          );
          setMessages(fetchedMessages);
        }
      } catch (error) {
        console.error("Error fetching chat:", error);
      }
    }
  };

  const sendMessage = () => {
    const newMessage = {
      chatID: props.chatID,
      senderId: props.senderId,
      senderModel: props.senderModel,
      receiverId: props.receiverId,
      receiverModel: props.receiverModel,
      content: message,
    };

    socket.emit("sendMessage", newMessage);
    setMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div
        style={{
          maxHeight: "500px",
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.senderId === props.senderId ? "flex-end" : "flex-start",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                backgroundColor:
                  msg.senderId === props.senderId ? "#D1E8FF" : "#F1F0F0",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "60%",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{ width: "80%", padding: "10px", margin: "10px 0" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px 20px" }}>
        Send
      </button>
    </div>
  );
}
