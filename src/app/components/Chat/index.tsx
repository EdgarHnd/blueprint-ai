// Chat.tsx

import React, { FormEvent, ChangeEvent } from "react";
import Messages from "./Messages";
import { Message } from "ai/react";
import { AiOutlineSend } from "react-icons/ai";

interface Chat {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  messages: Message[];
}

const Chat: React.FC<Chat> = ({
  input,
  handleInputChange,
  handleMessageSubmit,
  messages,
}) => {
  return (
    <div id="chat" className="flex flex-col w-full lg:w-3/5 mr-4 mx-5 lg:mx-0 mb-10">
      <Messages messages={messages} />
      <>
        <form
          onSubmit={handleMessageSubmit}
          className="mt-5 mb-5 relative bg-black rounded-lg"
        >
          <input
            type="text"
            className="input-glow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-black border-gray-600 transition-shadow duration-200"
            placeholder="Ask me anything about Bryan Johnson Blueprint protocol..."
            value={input}
            onChange={handleInputChange}
          />

          <button type="submit" className="cursor-pointer z-20 absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
           <AiOutlineSend />
          </button>
        </form>
      </>
    </div>
  );
};

export default Chat;
