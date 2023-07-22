import { Message } from "ai";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="rounded-lg overflow-y-scroll flex-grow flex flex-col justify-end bg-black">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${
            msg.role === "assistant" ? "text-red-800" : "text-gray-400"
          } my-2 p-3 rounded duration-200 flex slide-in-bottom bg-black`}
        >
          <div className="ml-2 flex items-center">
            {/* <ReactMarkdown>{msg.content}</ReactMarkdown> */}
            {msg.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
