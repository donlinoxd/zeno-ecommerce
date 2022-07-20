import { AxiosError } from "axios";
import axios, { AxiosRequestConfig } from "axios";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import http from "../config/axios.config";

const useRequest = <TResponseData, TRequestData = any>(
  key: string,
  url: string,
  config?: AxiosRequestConfig<TRequestData>,
  options?: Omit<
    UseQueryOptions<
      TResponseData,
      AxiosError<unknown, TRequestData>,
      TResponseData,
      QueryKey
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<TResponseData, AxiosError<unknown, TRequestData>>(
    key,
    async ({ signal }) => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      const response = await http({
        url,
        method: "get",
        cancelToken: source.token,
        ...config,
      });

      signal?.addEventListener("abort", () => {
        source.cancel("Query was cancelled by React Query");
      });

      return response.data;
    },
    options
  );
};

export default useRequest;
