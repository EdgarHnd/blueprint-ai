// page.tsx

"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
import { Context } from "@/components/Context";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import { useChat } from "ai/react";
import InstructionModal from "./components/InstructionModal";
import { AiOutlineBook, AiOutlineInfoCircle } from "react-icons/ai";
import { ICard } from "./components/Context/Card";
import Image from "next/image";
import edgarhnd from "../../public/edgarhnd.jpeg";

const Page: React.FC = () => {
  const [gotMessages, setGotMessages] = useState(false);
  /*  const [context, setContext] = useState<string[] | null>(null); */
  const [context, setContext] = useState<ICard[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async () => {
      setGotMessages(true);
    },
  });

  const prevMessagesLengthRef = useRef(messages.length);

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setContext([]);
    setGotMessages(false);
  };

  useEffect(() => {
    const getContext = async () => {
      const response = await fetch("/api/context", {
        method: "POST",
        body: JSON.stringify({
          messages,
        }),
      });
      const { context } = await response.json();
      /* setContext(context.map((c: any) => c.id)); */
      console.log(context);
      setContext(context.map((c: any) => c as ICard));
    };
    if (gotMessages && messages.length >= prevMessagesLengthRef.current) {
      getContext();
    }

    prevMessagesLengthRef.current = messages.length;
  }, [messages, gotMessages]);

  return (
    <div className="flex flex-col justify-between h-screen bg-black mx-auto max-w-full">
      <Header className="mt-5 mb-5" />
      <button
        onClick={() => {
          window.open("https://twitter.com/edgarhnd", "_blank");
        }}
        className="input-glow flex flex-row items-center fixed left-4 top-4 text-xl text-white rounded-md py-1 px-2 bg-black z-10"
      >
        <Image src={edgarhnd} alt="bjgod" width="25" className="rounded-full" />
        <span className="ml-2 text-sm">follow me</span>
      </button>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 top-4 text-xl text-white animate-pulse-once"
      >
        <AiOutlineInfoCircle />
      </button>

      <InstructionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex w-full justify-center flex-grow overflow-hidden relative">
        <Chat
          input={input}
          handleInputChange={handleInputChange}
          handleMessageSubmit={handleMessageSubmit}
          messages={messages}
        />
        <div className="absolute transform translate-x-full transition-transform duration-500 ease-in-out right-0 w-4/5 lg:w-1/3 h-1/2 bg-black overflow-y-auto lg:ml-4 rounded-l-md border-l border-y border-gray-600">
          <Context className="" selected={context} />
        </div>
      </div>
      <button
        type="button"
        className="absolute flex flex-row items-center rounded-full right-4 top-36 md:top-14 text-white py-2 px-4 hover:text-red-800"
        onClick={(e) => {
          e.currentTarget.parentElement
            ?.querySelector(".transform")
            ?.classList.toggle("translate-x-full");
        }}
      >
        <AiOutlineBook />
        <p className="text-sm ml-1">sources</p>
      </button>
    </div>
  );
};

export default Page;
