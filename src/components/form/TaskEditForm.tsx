"use client";

import { useUpdateTaskMutation } from "@/redux/api/taskApi/taskApi";
import { TaskSchema } from "@/schema/Task";
import { ITask, ITaskResponse } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Props = {
  data: ITaskResponse;
};

const TaskEditForm = ({ data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITask>({
    resolver: yupResolver(TaskSchema),
    defaultValues: {
      name: data?.name || "",
      priority: data?.priority || "LOW",
      status: data?.status || "PENDING",
    },
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<ITask> = async (formData) => {
    try {
      const updateData = {
        name: formData?.name,
        priority: formData?.priority,
        status: formData?.status,
      };
      const response = await updateTask({
        id: data?.id,
        body: updateData,
      }).unwrap();

      if (response?.data) {
        toast.success("Task updated successfully!");
        reset();
        router.push("/manage-task");
      }
    } catch (error) {
      toast.error("Failed to update task.");
    }
  };

  return (
    <div
      className="max-w-lg mx-auto p-4 bg-white rounded-md shadow-md"
      style={{ margin: "50px auto" }}
    >
      <div className="text-center mb-5">
        <h2 className="text-xl font-medium">Edit Task</h2>
        <p className="mb-0 text-pink-800">{data?.name}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Task Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="priority" className="block font-medium mb-1">
            Priority:
          </label>
          <select
            id="priority"
            className="w-full border rounded px-3 py-2"
            {...register("priority")}
          >
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

        <div>
          <label htmlFor="status" className="block font-medium mb-1">
            Status:
          </label>
          <select
            id="status"
            className="w-full border rounded px-3 py-2"
            {...register("status")}
          >
            <option value="PENDING">Pending</option>
            <option value="COMPLETED">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? "Updating..." : "Update Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskEditForm;
