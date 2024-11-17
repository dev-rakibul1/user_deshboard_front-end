"use client";

import { useGetAllTaskQuery } from "@/redux/api/taskApi/taskApi";
import { ITaskResponse } from "@/types";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart: React.FC = () => {
  const { data: task, isLoading } = useGetAllTaskQuery({ limit: 100 });

  // Safeguard tasks
  const tasks = task?.data || [];

  // Prepare Chart Data
  const priorityDistribution = [
    {
      name: "HIGH",
      value: tasks.filter((t: ITaskResponse) => t.priority === "HIGH").length,
    },
    {
      name: "MEDIUM",
      value: tasks.filter((t: ITaskResponse) => t.priority === "MEDIUM").length,
    },
    {
      name: "LOW",
      value: tasks.filter((t: ITaskResponse) => t.priority === "LOW").length,
    },
  ];

  const statusDistribution = [
    {
      name: "PENDING",
      value: tasks.filter((t: ITaskResponse) => t.status === "PENDING").length,
    },
    {
      name: "COMPLETED",
      value: tasks.filter((t: ITaskResponse) => t.status === "COMPLETED")
        .length,
    },
  ];

  // Colors for PieChart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 z-0">
          {/* Pie Chart - Task Distribution by Priority */}
          <div className="flex flex-col items-center justify-center w-full min-h-[50vh] z-0">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Task Distribution by Priority
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={priorityDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {priorityDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Task Distribution by Status */}
          <div className="flex flex-col items-center w-full z-0 justify-center min-h-[50vh]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Task Distribution by Status
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={statusDistribution}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
