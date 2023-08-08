import axios from "axios";

async function GetWeatherConditions(latitude: number, longitude: number) {
  try {
    const city = "";
    const apiKey = "cd98f51a072efe3c4d6b9f63623d225b";

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    return response.data || undefined;

    // if (response.data.length > 0) {
    //   console.log(response.data);
    //   return response;
    // } else {
    //   console.log("Dados Meteriológicos não encontrados");
    //   return;
    // }
  } catch (error) {
    console.log("Erro ao obter as condições climáticas da cidade");
  }
}

export { GetWeatherConditions };
