import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import Link from "next/link";

const Header: React.FC = () => {
  const url: string =
    "https://images.unsplash.com/photo-1545601445-9242104e5d79?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex justify-end pr-4 pt-3 gap-4 items-center">
      <Link
        href="https://mail.google.com"
        className="text-xl hover:underline cursor-pointer"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        className="text-xl hover:underline cursor-pointer"
      >
        Images
      </Link>
      <span className="text-4xl p-2 rounded-full hover:bg-gray-200">
        <TbGridDots />
      </span>
      <Image
        src={url}
        alt="dp"
        width={30}
        height={30}
        className="rounded-full h-10 w-10 object-cover"
      />
    </div>
  );
};

export default Header;
