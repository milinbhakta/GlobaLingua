import type { Translation } from "../i18n-types";

const fr: Translation = {
  CHOOSE_LOCALE: "Choisir la langue",
  APPNAME: "Application météo",
  WEATHER_FORECAST: "Prévisions météo pour Charlottetown, PEI, Canada",
  TIME_LABEL: "Heure: {time|time}",
  TEMPERATURE: "Température: {temperature|temperature}°C",
  HUMIDITY: "Humidité: {humidity}%",
  APPARENT_TEMPERATURE:
    "Température apparente: {apparentTemperature|temperature}°C",
  WMOWeatherCodes: {
    0: "Ciel dégagé",
    1: "Principalement clair",
    2: "Partiellement nuageux",
    3: "Nuageux",
    45: "Brouillard",
    48: "Brouillard givrant",
    51: "Bruine: Légère",
    53: "Bruine: Modérée",
    55: "Bruine: Dense",
    56: "Bruine verglaçante: Légère",
    57: "Bruine verglaçante: Dense",
    61: "Pluie: Légère",
    63: "Pluie: Modérée",
    65: "Pluie: Forte",
    66: "Pluie verglaçante: Légère",
    67: "Pluie verglaçante: Forte",
    71: "Chute de neige: Légère",
    73: "Chute de neige: Modérée",
    75: "Chute de neige: Forte",
    77: "Grains de neige",
    80: "Averses de pluie: Légères",
    81: "Averses de pluie: Modérées",
    82: "Averses de pluie: Fortes",
    85: "Averses de neige: Légères",
    86: "Averses de neige: Fortes",
    95: "Orage: Léger ou modéré",
    96: "Orage avec grêle légère",
    99: "Orage avec grêle forte",
  },
};

export default fr;
