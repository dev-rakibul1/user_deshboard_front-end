import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex md:flex-none items-center justify-between lg:pl-64">
      <div className="lg:flex justify-end items-center w-full">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <button
        onClick={toggleSidebar}
        className="text-2xl lg:hidden focus:outline-none"
      >
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export default Header;
