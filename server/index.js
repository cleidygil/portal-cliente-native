import axios from "axios";
import { environment } from "./enviroments.prod";

// Define la URL de tu API Django
const API_URL = environment.API_URL;
const api = axios.create({
  baseURL: API_URL,
});

export default api;
