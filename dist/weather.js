"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://api.open-meteo.com/v1/forecast?latitude=60.45451&longitude=22.264824&current=temperature_2m,relative_humidity_2m,cloud_cover,surface_pressure,wind_speed_10m&timezone=auto";
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            const data = yield response.json();
            if (!data || !data.current) {
                throw new Error("No weather data available.");
            }
            const { temperature_2m, relative_humidity_2m, cloud_cover, surface_pressure, wind_speed_10m, } = data.current;
            const weatherData = {
                temperature2m: temperature_2m !== null && temperature_2m !== void 0 ? temperature_2m : "N/A",
                relativeHumidity2m: relative_humidity_2m !== null && relative_humidity_2m !== void 0 ? relative_humidity_2m : "N/A",
                cloudCover: cloud_cover !== null && cloud_cover !== void 0 ? cloud_cover : "N/A",
                surfacePressure: surface_pressure !== null && surface_pressure !== void 0 ? surface_pressure : "N/A",
                windSpeed10m: wind_speed_10m !== null && wind_speed_10m !== void 0 ? wind_speed_10m : "N/A",
            };
            const updateElement = (id, text) => {
                const element = document.getElementById(id);
                if (element)
                    element.textContent = text;
            };
            updateElement("temperature", `Temperature: ${weatherData.temperature2m}°C`);
            updateElement("relativeHumidity", `Humidity: ${weatherData.relativeHumidity2m}%`);
            updateElement("cloudCover", `Cloud cover: ${weatherData.cloudCover}%`);
            updateElement("surfacePressure", `Pressure: ${weatherData.surfacePressure} hPa`);
            updateElement("windSpeed", `Wind Speed: ${weatherData.windSpeed10m} m/s`);
        }
        catch (error) {
            console.error("Error fetching weather data:", error.message);
        }
    });
}
document.addEventListener("DOMContentLoaded", getWeather);
