"use client";

import { useGetAllTaskQuery } from "@/redux/api/taskApi/taskApi";
import Link from "next/link";
import { useState } from "react";

interface Task {
  id: number;
  name: string;
  createdAt: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
}

const TaskList = () => {
  const {
    data: taskData,
    isLoading,
    isError,
  } = useGetAllTaskQuery({ limit: 100 });

  const [filterPriority, setFilterPriority] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  // Handle query result and fallback
  const tasks: Task[] = taskData?.data || [];

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    const matchesPriority = filterPriority
      ? task.priority.toLowerCase() === filterPriority.toLowerCase()
      : true;
    const matchesStatus = filterStatus
      ? task.status.toLowerCase() === filterStatus.toLowerCase()
      : true;
    return matchesPriority && matchesStatus;
  });

  // Handle loading and error states
  if (isLoading) {
    return <div className="p-4 text-center">Loading tasks...</div>;
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">Failed to load tasks.</div>
    );
  }

  return (
    <div className="p-4">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">Task Management</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          className="border rounded px-4 py-2"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          className="border rounded px-4 py-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task Table for larger screens */}
      <div className="hidden sm:block">
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Task Name</th>
              <th className="border p-2">Creation Date</th>
              <th className="border p-2">Priority</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="border p-2">{task.name}</td>
                <td className="border p-2">{task.createdAt}</td>
                <td className="border p-2">{task.priority}</td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2">
                  <Link href={`/manage-task/edit/${task.id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Edit
                    </button>
                  </Link>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Task Cards for smaller screens */}
      <div className="sm:hidden">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-md p-4 mb-4 shadow-sm bg-white"
          >
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold">{task.name}</h2>
              <span className="text-sm text-gray-500">{task.createdAt}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">
                Priority: <strong>{task.priority}</strong>
              </span>
              <span className="text-sm">
                Status: <strong>{task.status}</strong>
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
