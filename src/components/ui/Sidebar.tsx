import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FC } from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { RiTaskLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, toggleSidebar }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-blue-100 text-black w-64 transform z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 lg:relative`}
      style={{
        minHeight: "100%",
        height: "100%",
        top: "0",
        left: "0",
        overflowY: "hidden",
      }}
    >
      <div className="p-4 text-lg font-medium border-b border-blue-200 flex items-center justify-between">
        User Task
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
          className={`font-medium flex items-center gap-3 p-4 transition ${
            pathname === "/home" ? "bg-blue-300" : "hover:bg-blue-300"
          }`}
          onClick={onClose}
        >
          <AiOutlineHome size={20} /> Home
        </Link>
        <Link
          href="/manage-task"
          className={`font-medium flex items-center gap-3 p-4 transition ${
            pathname === "/manage-task" ? "bg-blue-300" : "hover:bg-blue-300"
          }`}
          onClick={onClose}
        >
          <RiTaskLine size={20} /> Manage Task
        </Link>
        <Link
          href="/create-task"
          className={`font-medium flex items-center gap-3 p-4 transition ${
            pathname === "/create-task" ? "bg-blue-300" : "hover:bg-blue-300"
          }`}
          onClick={onClose}
        >
          <AiOutlinePlusCircle size={20} /> Create Task
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
