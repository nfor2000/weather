import React from "react";
import {
     MdArrowForwardIos,
     MdCloudQueue,
     MdCompress,
     MdSunny,
     MdSunnySnowing,
     MdWindPower,
} from "react-icons/md";
import BoardCard from "./BoardCard";
import useWeatherDataContext from "../hooks/useWeatherDataContext";

export interface WeatherCardData {
     title: string;
     icon: React.ReactNode;
     value: number;
     unit: string;
     previous_value: number;
}

const BoardMain = () => {
     const { data } = useWeatherDataContext();
     const { uvindex, windspeed, pressure, precipprob, preciptype } =
          data.currentConditions;

     const weatherInfo: WeatherCardData[] = [
          {
               title: "Wind Speed",
               icon: <MdWindPower size={30} className="text-clr-primary" />,
               value: windspeed,
               unit: "km/h",
               previous_value: 14,
          },
          {
               title: preciptype[0],
               icon: preciptype.includes("rain") ? (
                    <MdCloudQueue size={30} className="text-clr-primary" />
               ) : (
                    <MdSunnySnowing size={30} className="text-clr-primary" />
               ),
               value: precipprob,
               unit: "%",
               previous_value: 14,
          },
          {
               title: "Pressure",
               icon: <MdCompress size={30} className="text-clr-primary" />,
               value: pressure,
               unit: "hpa",
               previous_value: 688,
          },
          {
               title: "UV Index",
               icon: <MdSunny size={30} className="text-clr-primary" />,
               value: uvindex,
               unit: "",
               previous_value: 2.6,
          },
     ];
     return (
          <div className="p-5 flex flex-col gap-5">
               <div className="flex justify-between items-center">
                    <h3>Today overview</h3>
                    <button className="text-clr-primary flex items-center text-sm">
                         <a href="">More details</a>
                         <MdArrowForwardIos />
                    </button>
               </div>
               <div className="grid sm:grid-cols-2 gap-5">
                    {weatherInfo.map((info, index) => (
                         <BoardCard key={index} data={info} />
                    ))}
               </div>
          </div>
     );
};

export default BoardMain;
