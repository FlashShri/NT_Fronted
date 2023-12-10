import axios from "axios";
import { BASE_URL } from "./apiConstant";

export async function login(credentials) {
  const res = await axios.post(`${BASE_URL}/admin/login`, credentials);
//   console.log(res);
  return res;
}
