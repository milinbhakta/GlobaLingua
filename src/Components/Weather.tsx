import {
  ListItem,
  Typography,
  ListItemText,
  styled,
  Grid,
} from "@mui/material";
import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
import { useI18nContext } from "../i18n/i18n-react";

interface WeatherData {
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
    relativeHumidity2m: Float32Array;
    apparentTemperature: Float32Array;
  };
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Using theme.spacing directly
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

function Weather() {
  const { LL } = useI18nContext();
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

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
      const hourly = response.hourly()!;

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        hourly: {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2m: hourly.variables(0)!.valuesArray()!,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
          apparentTemperature: hourly.variables(2)!.valuesArray()!,
        },
      };

      setWeatherData(weatherData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {LL.HOURLY_WEATHER_FORECAST()}
      </Typography>
      <Grid container spacing={3}>
        {weatherData &&
          weatherData.hourly.time.map((time, i) => (
            <Grid item xs={14} sm={8} md={5} lg={4} key={i}>
              <StyledListItem>
                <ListItemText
                  primary={`${LL.TIME_LABEL({ time: time })}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {LL.TEMPERATURE({
                          temperature: weatherData.hourly.temperature2m[i],
                        })}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {LL.HUMIDITY({
                          humidity: weatherData.hourly.relativeHumidity2m[i],
                        })}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {LL.APPARENT_TEMPERATURE({
                          apparentTemperature:
                            weatherData.hourly.apparentTemperature[i],
                        })}
                      </Typography>
                      <br />
                    </>
                  }
                />
              </StyledListItem>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Weather;
