import {
  ListItem,
  Typography,
  List,
  ListItemText,
  styled,
} from "@mui/material";
import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
import { useI18nContext } from "../i18n/i18n-react";

interface WeatherData {
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
    relativeHumidity2m: Float32Array;
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
    const params = {
      latitude: 52.52,
      longitude: 13.41,
      hourly: ["temperature_2m", "relative_humidity_2m"],
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
      <List>
        {weatherData &&
          weatherData.hourly.time.map((time, i) => (
            <StyledListItem key={i}>
              <ListItemText
                primary={`${LL.TIME_LABEL()} ${time.toISOString()}`}
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
                  </>
                }
              />
            </StyledListItem>
          ))}
      </List>
    </div>
  );
}

export default Weather;
