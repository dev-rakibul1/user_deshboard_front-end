export type IMeta = {
  limit: number;
  size: number;
  page: number;
};

export interface ITask {
  name: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "COMPLETED";
}
export interface ITaskResponse {
  id: string;
  name: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
}
