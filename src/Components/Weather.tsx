import { Typography, Card, CardContent } from "@mui/material";
import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
import { useI18nContext } from "../i18n/i18n-react";
import { WMOWeatherCodes } from "../utils/helper";

interface WeatherData {
  timezone: string | null;
  timezoneAbbreviation: string | null;
  latitude: number;
  longitude: number;
  current: {
    time: Date;
    temperature2m: number;
    relativeHumidity2m: number;
    apparentTemperature: number;
    weatherCode: number;
  };
}

function Weather() {
  const { LL } = useI18nContext();

  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    // Weather for Charlottetown, PE, Canada
    const params = {
      latitude: 46.23525,
      longitude: -63.12671,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
      ],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    async function fetchData() {
      const responses = await fetchWeatherApi(url, params);
      console.log(responses);
      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();

      const current = response.current()!;

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        timezone,
        timezoneAbbreviation,
        latitude,
        longitude,
        current: {
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
          temperature2m: current.variables(0)!.value(),
          relativeHumidity2m: current.variables(1)!.value(),
          apparentTemperature: current.variables(2)!.value(),
          weatherCode: current.variables(3)!.value(),
        },
      };

      setWeatherData(weatherData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {LL.WEATHER_FORECAST()}
      </Typography>
      {weatherData && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {LL.TIME_LABEL({ time: weatherData.current.time })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {LL.TEMPERATURE({
                temperature: weatherData.current.temperature2m,
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {LL.HUMIDITY({
                humidity: weatherData.current.relativeHumidity2m,
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {LL.APPARENT_TEMPERATURE({
                apparentTemperature: weatherData.current.apparentTemperature,
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weather code: {WMOWeatherCodes[weatherData.current.weatherCode as keyof typeof WMOWeatherCodes]}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Weather;
