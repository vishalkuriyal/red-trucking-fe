import axios from "axios";

let url = "https://admin.techqilla.com/api/"

const axiosClient = axios.create({
  baseURL: url,
  withCredentials:true,
    headers: {
    "Content-Type": "application/json",
  },
});

export {axiosClient}