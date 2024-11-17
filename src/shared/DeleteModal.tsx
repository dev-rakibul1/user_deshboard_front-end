import { useDeleteTaskMutation } from "@/redux/api/taskApi/taskApi";
import { ITaskResponse } from "@/types";
import { FC } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface CustomModalProps {
  data: ITaskResponse;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const CustomModal: FC<CustomModalProps> = ({
  data,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [deleteTask, { isLoading, isSuccess, isError }] =
    useDeleteTaskMutation();

  const handleClose = () => setIsModalOpen(false);

  const onConfirm = async () => {
    try {
      await deleteTask(data.id).unwrap(); // Perform the delete mutation
      console.log("Task deleted successfully");
      setIsModalOpen(false); // Close modal on success
    } catch (error) {
      console.error("Failed to delete task", error); // Handle error
    }
  };

  return (
    <>
      {isModalOpen && data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-white rounded-lg shadow-lg max-w-md p-6 transform transition-transform scale-100">
            <div className="flex justify-between items-center w-full">
              {/* Header */}
              <div className="mb-4 font-bold text-xl">Delete Task</div>

              {/* Close Icon */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleClose}
              >
                <VscChromeClose size={24} className="text-red-600" />
              </button>
            </div>

            {/* Body */}
            <div className="text-gray-700">
              Are you sure you want to delete{" "}
              <span className=" inline-block font-bold px-1 text-pink-500 rounded">
                {data?.name}
              </span>{" "}
              task?
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                className={`${
                  isLoading ? "bg-red-300" : "bg-red-500 hover:bg-red-600"
                } text-white px-4 py-2 rounded`}
                onClick={onConfirm}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Yes! Delete it"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
