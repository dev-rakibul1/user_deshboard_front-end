import { useDeleteTaskMutation } from "@/redux/api/taskApi/taskApi";
import { ITaskResponse } from "@/types";
import { FC } from "react";
import toast from "react-hot-toast";
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
      await deleteTask(data.id).unwrap();
      toast.success("Task deleted successfully");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  return (
    <>
      {isModalOpen && data && (
        <div
          className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-80"
          style={{
            background: "#000",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            opacity: 0.9,
          }}
        >
          <div className=" bg-white rounded-lg shadow-lg max-w-md p-6 transform transition-transform scale-100">
            <div className="flex justify-between items-center w-full">
              {/* Header */}
              <div className="mb-4 font-medium text-xl">Delete Task</div>

              {/* Close Icon */}
              <button
                className="absolute top-0 right-0 text-gray-900 hover:text-gray-800 "
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  margin: "10px",
                }}
                onClick={handleClose}
              >
                <VscChromeClose size={24} className="text-red-600" />
              </button>
            </div>

            {/* Body */}
            <div className="text-gray-700 pb-7 inline-block">
              Are you sure you want to delete{" "}
              <span className=" inline-block font-medium px-1 text-pink-500 rounded">
                {data?.name}
              </span>{" "}
              task?
            </div>
            <br />
            {/* Footer */}
            <div className=" flex justify-end gap-4 pt-12">
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
