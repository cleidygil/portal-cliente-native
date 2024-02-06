import axios from "axios";
import { environment } from "./enviroments.prod";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = environment.API_URL;

const Services = axios.create({
  baseURL: API_URL,
  headers: {},
});

Services.interceptors.request.use(async (config) => {
  try {
    // Recupera el token de AsyncStorage
    const token = await AsyncStorage.getItem("token");

    // Si se encuentra un token en AsyncStorage, agrégalo a los encabezados
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  } catch (error) {
    console.error("Error al obtener el token de AsyncStorage:", error);
    return config;
  }
});
Services.get(`/api/gsoft/portal/contracts/?client=10649`)
  .then((response) => {
    console.log("Respuesta de la solicitud GET:", response.data);
  })
  .catch((error) => {
    console.error("Error en la solicitud GET:", error);
  });

export default Services;
