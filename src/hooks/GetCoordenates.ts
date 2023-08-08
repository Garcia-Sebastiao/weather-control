import axios from "axios";

async function GetCoordinates(cityName: string) {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        cityName
      )}&format=json`
    );

    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { latitude: lat, longitude: lon };
    } else {
      console.log("Cidade não encontrada");
      return;
    }
  } catch (error) {
    console.log("Erro ao obter as coordenadas da cidade");
  }
}

export { GetCoordinates };
