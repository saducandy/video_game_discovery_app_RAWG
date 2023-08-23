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

const useGames = (selectedGenre: Genres | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
