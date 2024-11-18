"use client";

import TaskEditForm from "@/components/form/TaskEditForm";
import { useGetSingleTaskQuery } from "@/redux/api/taskApi/taskApi";
import { useParams } from "next/navigation";

// interface EditTaskProps {
//   params: { id: string };
// }

const EditTask = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : undefined;

  if (!id) {
    return <div>Error: Invalid task ID</div>; // Handle error gracefully
  }

  const { data, isLoading } = useGetSingleTaskQuery(id);

  const updateData = data?.data;

  return (
    <div>
      <TaskEditForm data={updateData} loading={isLoading} />
    </div>
  );
};

export default EditTask;
