import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof cancelIdleCallback) return;
        setErrors(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, errors, isLoading };
};

export default useGenres;
