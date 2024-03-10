
import { useAppSelector } from "../../redux-toolkit/hooks";

const WeatherData = () => {
    const Location = useAppSelector(state => state.setLocation.value);
    const Latitude = useAppSelector(state => state.setlatlong.value.latitude);
    const Longitude = useAppSelector(state => state.setlatlong.value.longitude);
    const CloudCover = useAppSelector(state => state.updateweather.value.cloudCover);
    const DewPoint = useAppSelector(state => state.updateweather.value.dewPoint);
    const Humidity = useAppSelector(state => state.updateweather.value.humidity);
    const PressureSurfaceLevel = useAppSelector(state => state.updateweather.value.pressureSurfaceLevel);
    const Visibility = useAppSelector(state => state.updateweather.value.visibility);
    const WindSpeed = useAppSelector(state => state.updateweather.value.windSpeed);

    const weatherData = {
        Location,
        Latitude,
        Longitude,
        CloudCover,
        DewPoint,
        Humidity,
        PressureSurfaceLevel,
        Visibility,
        WindSpeed
    };

    return weatherData;
};

export default WeatherData;
