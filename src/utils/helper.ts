export const getLocalName = (locale: string) => {
  switch (locale) {
    case "en":
      return "English";
    case "fr":
      return "French";
    case "de":
      return "German";
    case "it":
      return "Italian";
    case "hi":
      return "Hindi";
    case "ja":
      return "Japanese";
    case "iw":
      return "Hebrew";
    case "ru":
      return "Russian";
    default:
      return "English";
  }
};

export const WMOWeatherCodesURL: Record<string, string> = {
  "0": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/clear-day.svg",
  "1": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/clear-day.svg",
  "2": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/cloudy.svg",
  "3": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/overcast-day.svg",
  "45": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/fog.svg",
  "48": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/extreme-fog.svg",
  "51": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "53": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "55": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "56": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/extreme-hail.svg",
  "57": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/extreme-hail.svg",
  "61": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "63": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "65": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg",
  "66": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/extreme-hail.svg",
  "67": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/extreme-hail.svg",
  "71": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow.svg",
  "73": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow.svg",
  "75": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow.svg",
  "77": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow.svg",
  "80": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain-showers.svg",
  "81": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain-showers.svg",
  "82": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain-showers.svg",
  "85": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow-showers.svg",
  "86": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow-showers.svg",
  "95": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorm.svg",
  "96": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorm.svg",
  "99": "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorm.svg",
};
