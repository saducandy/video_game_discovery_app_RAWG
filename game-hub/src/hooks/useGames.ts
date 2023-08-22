import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface PF {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: PF }[];
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof cancelIdleCallback) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;
