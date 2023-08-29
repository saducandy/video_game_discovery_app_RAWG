import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genres } from "./useGenres";

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
  metacritic: number;
}

const useGames = (
  selectedGenre: Genres | null,
  selectedPFHookParam: PF | null
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPFHookParam?.id },
    },
    [selectedGenre?.id, selectedPFHookParam?.id]
  );

export default useGames;
