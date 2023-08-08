"use client";

import Link from "next/link";
import Image from "next/image";
import "./style.css";
import {
  arrowDownIcon,
  arrowUpIcon,
  bigRain,
  calendarIcon,
  closeIcon,
  cloudSm,
  humidityIcon,
  line1,
  line2,
  mapIcon,
  moonCloudSm,
  notificationIcon,
  rainIcon,
  sun,
  sunCloud,
  sunCloudSm,
  sunRainIllustration,
  thunderIcon,
  windIcon,
} from "@/assets";
import WeatherCard from "@/components/layout/WeatherCard";
import { useEffect, useState } from "react";
import { GetCoordinates } from "@/hooks/GetCoordenates";
import { GetWeatherConditions } from "@/hooks/GetWheatherConditions";
import { City } from "@/utils/Citys";

type WeatherData = {
  main:
    | {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
      }
    | undefined;
  wind: {
    speed: number;
  };
  weather: {
    main: string;
    icon: string;
    description: string;
  }[];
};

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [country, setCountry] = useState("Luanda");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    GetCoordinates(country).then((data) => {
      GetWeatherConditions(data?.latitude, data?.longitude).then((data) => {
        setWeatherData(data);
      });
    });
  }, []);

  async function onChangeCountry(event: any) {
    const newCountry = event.target.value;
    setCountry(newCountry);

    const coordinates = await GetCoordinates(newCountry);
    const weatherConditions = await GetWeatherConditions(
      coordinates?.latitude,
      coordinates?.longitude
    );
    setWeatherData(weatherConditions);
  }

  return (
    <main className="w-full h-screen overflow-y-auto overflow-x-hidden relative px-6 py-8">
      <Image src={line1} alt="" className="absolute top-0 -right-10 w-48" />
      <Image src={line2} alt="" className="absolute top-20 left-0 w-20" />
      <header className="w-full flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image className="w-6" src={mapIcon} alt="" />
          <form className="flex items-center gap-8">
            <select
              className="text-xl text-white outline-none bg-transparent border-none"
              name=""
              onChange={onChangeCountry}
              id=""
            >
              {City.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </form>
        </div>

        <button>
          <Image src={notificationIcon} alt="" />
        </button>
      </header>

      <section className="w-full flex flex-col gap-8 pt-10 items-center">
        <div className="w-full flex items-center justify-center">
          {weatherData?.main?.temp ? (
            <Image
              width={120}
              height={120}
              src={`/weather-icons/${weatherData?.weather[0].icon}.svg`}
              alt=""
            />
          ) : (
            ""
          )}
        </div>

        <div className="w-full -mt-4 flex items-center flex-col gap-4">
          {Math.ceil((weatherData?.main?.temp || 0) - 273.15) > 0 ? (
            <div className="flex">
              <h2 className="text-white text-7xl font-overpassSemiBold">
                {Math.floor((weatherData?.main?.temp || 0) - 273.15)}
              </h2>
              <span className="text-white font-overpassMedium text-4xl">°</span>
            </div>
          ) : (
            <span className="text-white text-lg">Carregando...</span>
          )}

          {weatherData?.main?.temp ? (
            <div className="flex flex-col items-center gap-1">
              <span className="text-white text-lg">
                {weatherData.weather[0].description}
              </span>
              <span className="text-white text-lg">
                Max.: {Math.floor((weatherData?.main?.temp_max || 0) - 273.15)}°
                Min.: {Math.floor((weatherData?.main?.temp_min || 0) - 273.15)}°
              </span>
            </div>
          ) : (
            ""
          )}

          {weatherData?.wind.speed ? (
            <div className="w-full flex items-center justify-between bg-[#001026] bg-opacity-40 rounded-3xl px-6 py-4">
              <div className="flex items-center gap-1">
                <Image src={rainIcon} alt="" />
                <span className="text-white font-overpassSemiBold">6%</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={humidityIcon} alt="" />
                <span className="text-white font-overpassSemiBold">
                  {weatherData?.main?.humidity || 0}%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={windIcon} alt="" />
                <span className="text-white font-overpassSemiBold">
                  {Math.floor((weatherData?.wind.speed || 0) * 3.6)}km/h
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="w-full flex flex-col items-center justify-between bg-[#001026] bg-opacity-40 rounded-3xl px-6 py-4">
            <header className="w-full flex items-center justify-between">
              <h3 className="text-white text-xl font-overpassSemiBold">
                Today
              </h3>

              <span className="text-white text-base">Mar, 9</span>
            </header>

            <div className="w-full flex pt-8 gap-2 flex-wrap">
              <WeatherCard time="15:00" temperature={29} icon={sunCloudSm} />
              <WeatherCard time="17:00" temperature={24} icon={cloudSm} />
              <WeatherCard time="20:00" temperature={27} icon={moonCloudSm} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-between bg-[#001026] bg-opacity-40 rounded-3xl px-6 py-4">
            <header className="w-full flex items-center justify-between">
              <h3 className="text-white text-xl font-overpassSemiBold">
                Next Forecast
              </h3>

              <Image src={calendarIcon} alt="" />
            </header>

            <table className="table-auto mt-4 text-left w-full">
              <tbody>
                <tr>
                  <td>
                    <span className="text-white text-base font-overpassMedium">
                      Monday
                    </span>
                  </td>

                  <td>
                    <Image src={bigRain} alt="" />
                  </td>

                  <td>
                    <span className="text-sm text-white">13 °C</span>
                  </td>

                  <td>
                    <span className="text-sm text-gray-400">10 °C</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-white text-base font-overpassMedium">
                      Monday
                    </span>
                  </td>

                  <td>
                    <Image src={thunderIcon} alt="" />
                  </td>

                  <td>
                    <span className="text-sm text-white">13 °C</span>
                  </td>

                  <td>
                    <span className="text-sm text-gray-400">10 °C</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setOpenMenu(true)}
          className="bg-white shadow-md w-16 h-16 rounded-full flex items-center justify-center"
        >
          <Image src={arrowUpIcon} alt="" />
        </button>
      </div>

      <div
        className={`w-full transition duration-150 h-screen fixed backdrop-blur-md top-0 left-0 ${
          openMenu ? "" : "hidden"
        }`}
      ></div>

      <footer
        className={`w-full transition duration-150 fixed bottom-0 left-0 shadow-xl px-4 py-6 pb-12 bg-white rounded-t-3xl ${
          openMenu ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <nav className="w-full flex flex-col gap-4">
          <header className="w-full flex items-center justify-between">
            <h2 className="text-[#001026] text-2xl font-overpassSemiBold">
              Pesquisar
            </h2>

            <button onClick={() => setOpenMenu(false)}>
              <Image className="w-5" src={closeIcon} alt="" />
            </button>
          </header>

          <form className="w-full" action="">
            <input
              type="search"
              className="bg-gray-200 outline-none w-full p-4 rounded-md"
              placeholder="Pesquisar localidade..."
            />
          </form>
        </nav>
      </footer>
    </main>
  );
}
