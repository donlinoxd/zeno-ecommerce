import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import http from "../config/axios.config";

const useHttp = <TResponse, TRequest = any>(
  url: string,
  config?: AxiosRequestConfig<TRequest>
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<TResponse>(null!);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    setError("");

    http(url, { cancelToken: source.token, method: "get", ...config })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          setError(error.response?.data.error);
        } else if (axios.isCancel(error)) {
          console.log(error.message);
        } else {
          setError("Something went wrong!");
        }
      })
      .finally(() => {
        setLoading(false);
      });

    /**
     * * cancel request upon unmounting component
     */
    return () => source.cancel("Request is cancel, unmounting component");
  }, [url, config]);

  return {
    loading,
    error,
    data,
  };
};

export default useHttp;
