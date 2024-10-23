import { useContext } from "react";
import { WeatherDataContext } from "../context/WeatherDataProvider";

const useWeatherDataContext = () => {
     return useContext(WeatherDataContext);
};

export default useWeatherDataContext;
