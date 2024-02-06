import AsyncStorage from "@react-native-async-storage/async-storage";

async function obtenerValorDelAlmacenamiento() {
  try {
    const valor = await AsyncStorage.getItem("token");
    if (valor !== null) {
      console.log("Valor obtenido del almacenamiento:", valor);
      return valor;
      // return HEADERS;
    } else {
      return null;
      // console.log("La clave no existe en el almacenamiento.");
    }
  } catch (error) {
    console.error("Error al obtener el valor del almacenamiento:", error);
  }
}
obtenerValorDelAlmacenamiento();
// console.log(HEADERS, "HEADERS");
// export default HEADERS;

// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Función para obtener el token y guardarlo en una variable
// const obtenerToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem('token');
//     return token; // Retorna el token obtenido
//   } catch (error) {
//     console.error('Error al obtener el token:', error);
//     return null;
//   }
// };
