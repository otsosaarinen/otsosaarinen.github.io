async function getWeather(): Promise<void> {
    try {
        const url: string =
            "https://api.open-meteo.com/v1/forecast?latitude=60.45451&longitude=22.264824&current=temperature_2m,relative_humidity_2m,cloud_cover,surface_pressure,wind_speed_10m&timezone=auto";

        const response: Response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status} - ${response.statusText}`
            );
        }

        const data: any = await response.json();

        if (!data || !data.current) {
            throw new Error("No weather data available.");
        }

        // Extract current weather data
        const {
            temperature_2m,
            relative_humidity_2m,
            cloud_cover,
            surface_pressure,
            wind_speed_10m,
        } = data.current;

        const weatherData = {
            temperature2m: temperature_2m ?? "N/A",
            relativeHumidity2m: relative_humidity_2m ?? "N/A",
            cloudCover: cloud_cover ?? "N/A",
            surfacePressure: surface_pressure ?? "N/A",
            windSpeed10m: wind_speed_10m ?? "N/A",
        };

        // Function to safely update an element
        const updateElement = (id: string, text: string): void => {
            const element = document.getElementById(id);
            if (element) element.textContent = text;
        };

        // Update HTML elements with weather data
        updateElement(
            "temperature",
            `Temperature: ${weatherData.temperature2m}°C`
        );
        updateElement(
            "relativeHumidity",
            `Humidity: ${weatherData.relativeHumidity2m}%`
        );
        updateElement("cloudCover", `Cloud cover: ${weatherData.cloudCover}%`);
        updateElement(
            "surfacePressure",
            `Pressure: ${weatherData.surfacePressure} hPa`
        );
        updateElement(
            "windSpeed",
            `Wind Speed: ${weatherData.windSpeed10m} m/s`
        );
    } catch (error: any) {
        console.error("Error fetching weather data:", error.message);
    }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", getWeather);
