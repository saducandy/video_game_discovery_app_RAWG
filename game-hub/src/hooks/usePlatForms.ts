import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatForms = () => useData<Platforms>("/platforms/lists/parents");
export default usePlatForms;
