import Link from "next/link";
import { FC } from "react";

import { VscChromeClose } from "react-icons/vsc";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 lg:relative`}
    >
      <div className="p-4 text-lg font-bold border-b border-gray-700 flex item-center justify-between">
        Dashboard
        <button
          onClick={toggleSidebar}
          className="text-2xl lg:hidden focus:outline-none"
        >
          <VscChromeClose />
        </button>
      </div>

      <nav className="flex-1">
        <Link
          href="/home"
          className="block p-4 hover:bg-gray-700 transition"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          href="/manage-task"
          className="block p-4 hover:bg-gray-700 transition"
          onClick={onClose}
        >
          Manage Task
        </Link>
        <Link
          href="/create-task"
          className="block p-4 hover:bg-gray-700 transition"
          onClick={onClose}
        >
          Create task
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
