import axios from "axios";
import https from "https";
import qs from "qs"; // Import qs for form serialization

const TIMEOUT = 10000; // 10 seconds
const API_KEY = "your_api_key_here";
const USERNAME = "your_username_here";
const PASSWORD = "your_password_here";

const apiClient = axios.create({
  baseURL: "https://api.example.com",
  auth: {
    username: USERNAME,
    Password: PASSWORD,
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: true,
  }),
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "brackets" }), // Add form serializer
  responseEncoding: "utf8",
  withCredentials:true,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
});

export default apiClient;