import React, { FC } from "react";
import { AiOutlineLink } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

export interface ICard {
  pageContent: string;
  metadata: {
    hash: string;
    url: string;
    chunk: string;
  };
}

interface ICardProps {
  card: ICard;
  selected: string[] | null;
}

export const Card: FC<ICardProps> = ({ card, selected }) => (
  <div
    id={card.metadata.hash}
    className="card w-full p-5 border-b border-gray-600 text-white opacity-60 hover:opacity-80 transition-opacity duration-300 ease-in-out"
  >
    <a href={card.metadata.url} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center">
      <AiOutlineLink className="mr-1" />
      {card.metadata.url}
    </a>
    <ReactMarkdown>{card.metadata.chunk}</ReactMarkdown>
  </div>
);
