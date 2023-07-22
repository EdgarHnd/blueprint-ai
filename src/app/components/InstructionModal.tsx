import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-white shadow-red-800 p-5 z-50 rounded-lg bg-black shadow-lg relative w-full md:w-5/12">
        <button
          onClick={onClose}
          className="absolute right-2 text-3xl top-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p>
          Blueprint AI is a side project developed purely for entertainment and
          education. It's a user-friendly digital tool designed to provide
          instant, accessible information about Bryan Johnson's Blueprint
          Protocol. With a simple and intuitive interface, the chatbot allows
          users to delve into the details of the Protocol, exploring its
          concepts, principles, and applications in a fun and engaging way.
          Despite being a leisurely project, it has been thoughtfully engineered
          to give users a comprehensive understanding of the Protocol, making
          learning more interactive and enjoyable.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-black z-20 opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default InstructionModal;
