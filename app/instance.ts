import axios from "axios";

export const instanceWithAuthorization = axios.create({
  baseURL: "https://bible-back.vercel.app/",
  headers: {
    Authorization:
      typeof window !== "undefined" && localStorage.getItem("token"),
  },
});

export const instanceWithoutAuthorization = axios.create({
  baseURL: "https://bible-back.vercel.app/",
});
