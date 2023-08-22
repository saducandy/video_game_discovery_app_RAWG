import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17769e1a12fb48f9a44fa57d0ad80b6e",
  },
});
