import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.233.228.168:8000",
  baseURL: "https://nodejsbackend.astrologically.in",
  // 65.2.175.154:8000
});

export default instance;
