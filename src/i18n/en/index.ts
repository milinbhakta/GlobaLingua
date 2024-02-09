import type { BaseTranslation } from "../i18n-types";

const en: BaseTranslation = {
  CHOOSE_LOCALE: "Choose Locale",
  APPNAME: "Weather App",
  WEATHER_FORECAST: "Weather Forecast for Charlottetown, PEI, Canada",
  TIME_LABEL: "Time: {time:Date|time}",
  TEMPERATURE: "Temperature: {temperature:Float32Array|temperature}°C",
  HUMIDITY: "Humidity: {humidity:Float32Array}%",
  APPARENT_TEMPERATURE:
    "Feels Like: {apparentTemperature:Float32Array|temperature}°C",
  WMOWeatherCodes: {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense",
    56: "Freezing Drizzle: Light",
    57: "Freezing Drizzle: Dense",
    61: "Rain: Slight",
    63: "Rain: Moderate",
    65: "Rain: Heavy",
    66: "Freezing Rain: Light",
    67: "Freezing Rain: Heavy",
    71: "Snow fall: Slight",
    73: "Snow fall: Moderate",
    75: "Snow fall: Heavy",
    77: "Snow grains",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    85: "Snow showers: Slight",
    86: "Snow showers: Heavy",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  },
};

export default en;
