import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Grid,
  Container,
  FormControl,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
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
    temperature2m: number[];
    relativeHumidity2m: number[];
    apparentTemperature: number[];
    weatherCode: number[];
  };
}

function Weather() {
  const [city, setCity] = useState("ny");

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const { LL } = useI18nContext();

  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const cities = {
      ny: { latitude: 40.7128, longitude: -74.006 },
      la: { latitude: 34.0522, longitude: -118.2437 },
      ch: { latitude: 41.8781, longitude: -87.6298 },
      sf: { latitude: 37.7749, longitude: -122.4194 },
      cl: { latitude: 51.0447, longitude: -114.0719 },
      fs: { latitude: 55.9833, longitude: -87.65 },
      bom: { latitude: 19.076, longitude: 72.8777 },
      mo: { latitude: 55.7558, longitude: 37.6176 },
      char: { latitude: 46.2382, longitude: -63.1311 },
      su: { latitude: 21.1702, longitude: 72.8311 },
    };

    const params = {
      latitude: cities[city as keyof typeof cities].latitude,
      longitude: cities[city as keyof typeof cities].longitude,
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
      const weatherData: WeatherData = {
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
          temperature2m: Array.from(hourly.variables(0)!.valuesArray()!),
          relativeHumidity2m: Array.from(hourly.variables(1)!.valuesArray()!),
          apparentTemperature: Array.from(hourly.variables(2)!.valuesArray()!),
          weatherCode: Array.from(hourly.variables(3)!.valuesArray()!),
        },
      };

      setWeatherData(weatherData);
    }

    fetchData();
  }, [city]);

  const getWeatherCodeDescription = (code: number) => {
    return LL.WMOWeatherCodes[
      code as unknown as string as keyof Translation["WMOWeatherCodes"]
    ]();
  };

  return (
    <Container style={{ overflowY: "auto" }}>
      <Box
        sx={{
          margin: "auto",
          padding: "10px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{LL.SELECTLABEL()}</Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select labelId="city-label" value={city} onChange={handleCityChange}>
            <MenuItem value="cl">Calgary</MenuItem>
            <MenuItem value="char">Charlottetown</MenuItem>
            <MenuItem value="ch">Chicago</MenuItem>
            <MenuItem value="fs">Fort Severn</MenuItem>
            <MenuItem value="la">Los Angeles</MenuItem>
            <MenuItem value="mo">Moscow</MenuItem>
            <MenuItem value="bom">Mumbai</MenuItem>
            <MenuItem value="ny">New York</MenuItem>
            <MenuItem value="sf">San Francisco</MenuItem>
            <MenuItem value="su">Surat</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3} paddingBottom={16}>
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader title={LL.TIME_LABEL({ time: data })} />
                <CardMedia
                  component="img"
                  sx={{
                    height: 120,
                    width: "auto",
                    margin: "auto",
                  }}
                  image={
                    WMOWeatherCodesURL[weatherData.hourly.weatherCode[index]]
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
                      humidity: weatherData.hourly.relativeHumidity2m[index],
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
  );
}

export default Weather;
