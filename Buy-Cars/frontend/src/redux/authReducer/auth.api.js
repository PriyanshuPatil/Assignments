import axios from "axios";

export const loginAPI = async (creds) => {
  let response = await axios.post("https://enchanting-teal-llama.cyclic.cloud/", creds);
  return response.data;
};