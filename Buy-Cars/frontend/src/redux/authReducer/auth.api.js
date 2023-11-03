import axios from "axios";

export const loginAPI = async (creds) => {
  let response = await axios.post("", creds);
  return response.data;
};