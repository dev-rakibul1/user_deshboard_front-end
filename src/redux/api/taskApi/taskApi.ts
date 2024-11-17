import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tags";

const TASK_URL = "/task";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create a new task
    addANewTask: build.mutation({
      query: (data) => ({
        url: `${TASK_URL}/create-task/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.task],
    }),

    // get all task
    getAllTask: build.query({
      query: () => ({
        url: `${TASK_URL}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.task],
    }),

    // Get single task
    getSingleTask: build.query({
      query: (id: string) => ({
        url: `${TASK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.task],
    }),

    // Update api
    updateTask: build.mutation({
      query: (data) => ({
        url: `${TASK_URL}/${data?.id}/`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.task],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddANewTaskMutation,
  useGetAllTaskQuery,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} = taskApi;
