"use client";

import { useState } from "react";
import TaskList from "../task/Task";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header toggleSidebar={toggleSidebar} />

        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
