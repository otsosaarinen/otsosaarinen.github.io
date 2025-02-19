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
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            const url = "https://api.open-meteo.com/v1/forecast?latitude=60.45451&longitude=22.264824&current=temperature_2m,relative_humidity_2m,is_day,weather_code,cloud_cover,surface_pressure,wind_speed_10m&timezone=auto";
            const response = yield fetch(url);
            const data = yield response.json();
            if (!data || !data.current) {
                throw new Error("No weather data available.");
            }
            // Extract current weather data
            const current = data.current;
            const weatherData = {
                temperature2m: (_a = current.temperature_2m) !== null && _a !== void 0 ? _a : "N/A",
                relativeHumidity2m: (_b = current.relative_humidity_2m) !== null && _b !== void 0 ? _b : "N/A",
                isDay: (_c = current.is_day) !== null && _c !== void 0 ? _c : "N/A",
                weatherCode: (_d = current.weather_code) !== null && _d !== void 0 ? _d : "N/A",
                cloudCover: (_e = current.cloud_cover) !== null && _e !== void 0 ? _e : "N/A",
                surfacePressure: (_f = current.surface_pressure) !== null && _f !== void 0 ? _f : "N/A",
                windSpeed10m: (_g = current.wind_speed_10m) !== null && _g !== void 0 ? _g : "N/A",
            };
            // Function to safely update an element
            const updateElement = (id, text) => {
                const element = document.getElementById(id);
                if (element)
                    element.textContent = text;
            };
            // Update HTML elements with weather data
            updateElement("temperature", `Temperature: ${weatherData.temperature2m}°C`);
            updateElement("relativeHumidity", `Humidity: ${weatherData.relativeHumidity2m}%`);
            updateElement("surfacePressure", `Pressure: ${weatherData.surfacePressure} hPa`);
            updateElement("windSpeed", `Wind Speed: ${weatherData.windSpeed10m} m/s`);
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
        }
    });
}
// Run when the page loads
document.addEventListener("DOMContentLoaded", getWeather);
