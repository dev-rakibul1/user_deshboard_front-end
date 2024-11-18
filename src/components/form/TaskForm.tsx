"use client";

import { useAddANewTaskMutation } from "@/redux/api/taskApi/taskApi";
import { TaskSchema } from "@/schema/Task";
import { ITask } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add reset from useForm
  } = useForm<ITask>({
    resolver: yupResolver(TaskSchema),
  });

  const [addATask, { isLoading }] = useAddANewTaskMutation();

  const onSubmit: SubmitHandler<ITask> = async (data) => {
    try {
      const res = await addATask(data);
      toast.success("Task created successfully!"); // Success toast
      // console.log("Server Response:", res);

      reset(); // Reset the form fields
    } catch (error) {
      toast.error("Failed to create task. Please try again."); // Error toast
      console.error("Error creating task:", error);
    }
  };

  return (
    <div
      className=" max-w-lg mx-auto p-4 bg-white rounded-md shadow-md"
      style={{ margin: "50px auto" }}
    >
      <h2 className="text-xl font-medium mb-4 text-center">
        Create a new task
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1 ">
            Task Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Task name"
            className="w-full border rounded px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block font-medium mb-1">
            Priority:
          </label>
          <select
            id="priority"
            className="w-full border rounded px-3 py-2"
            {...register("priority")}
          >
            <option value="">Select Priority</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block font-medium mb-1">
            Status:
          </label>
          <select
            id="status"
            className="w-full border rounded px-3 py-2"
            {...register("status")}
          >
            <option value="">Select Status</option>
            <option value="PENDING">Pending</option>
            <option value="COMPLETED">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? "Loading..." : "Submit Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
