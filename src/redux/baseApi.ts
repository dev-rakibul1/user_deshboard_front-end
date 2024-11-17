// Need to use the React-specific entry point to import createApi

import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helper/config/env.config";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: ["task"],
});
