import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchData<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof cancelIdleCallback) return;
        setErrors(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, errors, isLoading };
};

export default useData;
