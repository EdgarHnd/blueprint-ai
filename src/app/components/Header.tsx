import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";
import bjgod from "../../../public/bj-god.png";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex md:flex-row  items-center justify-center text-gray-200 ${className}`}
    >
      <h1 className="text-2xl md:text-4xl font-bold">Blueprint</h1>
      <div className="w-24 md:w-32">
      <Image
        src={bjgod}
        alt="bjgod"
        className=""
      />
      </div>
      <p className="text-2xl md:text-4xl font-bold">AI</p>
    </header>
  );
}
