import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
