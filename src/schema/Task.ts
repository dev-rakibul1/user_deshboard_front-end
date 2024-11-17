import * as yup from "yup";

// Validation schema using Yup
export const TaskSchema = yup.object({
  name: yup.string().required("Task Name is required"),
  priority: yup
    .string()
    .oneOf(["HIGH", "MEDIUM", "LOW"], "Priority must be HIGH, MEDIUM, or LOW")
    .required("Priority is required"),
  status: yup
    .string()
    .oneOf(["PENDING", "COMPLETED"], "Status must be PENDING or COMPLETED")
    .required("Status is required"),
});
