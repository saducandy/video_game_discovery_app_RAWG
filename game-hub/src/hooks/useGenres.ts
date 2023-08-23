import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genres>("/genres");
export default useGenres;
