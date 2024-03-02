import axios from "axios";

export const instanceWithAuthorization = axios.create({
  baseURL: "https://bible-back.onrender.com/",
  headers: {
    Authorization:
      typeof window !== "undefined" && localStorage.getItem("token"),
  },
});

export const instanceWithoutAuthorization = axios.create({
  baseURL: "https://bible-back.onrender.com/",
});
