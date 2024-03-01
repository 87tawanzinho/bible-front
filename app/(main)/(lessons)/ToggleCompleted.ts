import axios from "axios";

export const axiosToggleCompleted = async (chapter: string, id: number) => {
  const response = await axios.post(
    `https://bible-back.onrender.com/toggle_card/${chapter}/${id}/`,
    null,
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

  console.log(response);
};
