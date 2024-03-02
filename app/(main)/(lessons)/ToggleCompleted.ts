import { instanceWithAuthorization } from "@/app/instance";
import axios from "axios";

export const axiosToggleCompleted = async (chapter: string, id: number) => {
  const response = await instanceWithAuthorization.post(
    `toggle_card/${chapter}/${id}/`
  );

  console.log(response);
};
