"use client";

import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { useState } from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-3 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
