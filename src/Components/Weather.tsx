import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Grid,
  Container,
  useTheme,
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

function Weather() {
  const theme = useTheme();

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
        <Container>
          <Grid container spacing={3}>
            {weatherData &&
              weatherData.hourly.time.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      backdropFilter: "blur(50px) saturate(200%)",
                      WebkitBackdropFilter: "blur(18px) saturate(200%)",
                      backgroundColor: "rgba(17, 25, 40, 0.5)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.125)",
                      color: theme.typography.body1.color,
                    }}
                  >
                    <CardHeader title={LL.TIME_LABEL({ time: data })} />
                    <CardMedia
                      component="img"
                      sx={{
                        height: 120,
                        width: 120,
                        margin: "auto",
                      }}
                      image={
                        WMOWeatherCodesURL[
                          weatherData.hourly.weatherCode[index]
                        ]
                      }
                      alt={getWeatherCodeDescription(
                        weatherData.hourly.weatherCode[index]
                      )}
                    />
                    <CardContent>
                      <Typography variant="body2">
                        {LL.TEMPERATURE({
                          temperature: weatherData.hourly.temperature2m[index],
                        })}
                      </Typography>
                      <Typography variant="body2">
                        {LL.HUMIDITY({
                          humidity:
                            weatherData.hourly.relativeHumidity2m[index],
                        })}
                      </Typography>
                      <Typography variant="body2">
                        {LL.APPARENT_TEMPERATURE({
                          apparentTemperature:
                            weatherData.hourly.apparentTemperature[index],
                        })}
                      </Typography>
                      <Typography variant="body2">
                        {LL.WEATHER()}
                        {getWeatherCodeDescription(
                          weatherData.hourly.weatherCode[index]
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Weather;
