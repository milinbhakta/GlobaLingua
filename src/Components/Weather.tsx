import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  styled,
  CardHeader,
  Grid,
} from "@mui/material";
import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
import { useI18nContext } from "../i18n/i18n-react";
import { Translation } from "../i18n/i18n-types";
import { WMOWeatherCodesURL } from "../utils/helper";

interface WeatherData {
  timezone: string | null;
  timezoneAbbreviation: string | null;
  latitude: number;
  longitude: number;
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
    relativeHumidity2m: Float32Array;
    apparentTemperature: Float32Array;
    weatherCode: Float32Array;
  };
}

const StyledCard = styled(Card)`
  max-width: 345px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 3px 5px 2px rgba(125, 123, 135, 0.3);
`;

function Weather() {
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const { LL } = useI18nContext();

  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    // Weather for Charlottetown, PE, Canada
    const params = {
      latitude: 46.23525,
      longitude: -63.12671,
      hourly: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
      ],
      forecast_days: 1,
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    async function fetchData() {
      const responses = await fetchWeatherApi(url, params);
      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();

      const hourly = response.hourly()!;

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        timezone,
        timezoneAbbreviation,
        latitude,
        longitude,
        hourly: {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2m: hourly.variables(0)!.valuesArray()!,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
          apparentTemperature: hourly.variables(2)!.valuesArray()!,
          weatherCode: hourly.variables(3)!.valuesArray()!,
        },
      };

      setWeatherData(weatherData);
    }

    fetchData();
  }, []);

  const getWeatherCodeDescription = (code: number) => {
    return LL.WMOWeatherCodes[
      code as unknown as string as keyof Translation["WMOWeatherCodes"]
    ]();
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {LL.WEATHER_FORECAST()}
      </Typography>
      <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 130px)" }}>
        <Grid container spacing={3}>
          {weatherData &&
            weatherData.hourly.time.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardHeader title={LL.TIME_LABEL({ time: data })} />
                  <CardMedia
                    component="img"
                    sx={{ height: "100%" }}
                    image={
                      WMOWeatherCodesURL[weatherData.hourly.weatherCode[index]]
                    }
                    alt={getWeatherCodeDescription(
                      weatherData.hourly.weatherCode[index]
                    )}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {LL.TEMPERATURE({
                        temperature: weatherData.hourly.temperature2m[index],
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {LL.HUMIDITY({
                        humidity: weatherData.hourly.relativeHumidity2m[index],
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {LL.APPARENT_TEMPERATURE({
                        apparentTemperature:
                          weatherData.hourly.apparentTemperature[index],
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weather code:{" "}
                      {getWeatherCodeDescription(
                        weatherData.hourly.weatherCode[index]
                      )}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default Weather;
