import { MdSunnySnowing, MdWbCloudy } from "react-icons/md";
import SunriseSunset from "./SunriseSunset";
import RainProbStats from "./RainProbStats";
import useWeatherDataContext from "../hooks/useWeatherDataContext";
import { format } from "date-fns";

const RightSideBar = () => {
     const { data } = useWeatherDataContext();
     const { resolvedAddress: location, currentConditions } = data;
     let value = "";
     function getLocation() {
          if (navigator.geolocation) {
               navigator.geolocation.watchPosition(showPosition);
          } else {
               value = "Geolocation is not supported by this browser.";
          }
     }

     function showPosition(position: GeolocationPosition) {
          value =
               "Latitude: " +
               position.coords.latitude +
               "<br>Longitude: " +
               position.coords.longitude;
          console.log(value);
     }

     getLocation();

     return (
          <aside className="w-full lg:w-[320px] px-5 py-6 custom-bg text-light flex flex-col gap-10 shrink-0">
               <div className="flex items-center justify-between">
                    <div>
                         <h2 className="text-base text-nowrap font-normal">
                              Nfor Presly
                         </h2>
                         <p className="text-clr-muted text-sm">{location}</p>
                    </div>
                    <p>{format(new Date(), "hh:mm a")}</p>
               </div>

               <div className="flex justify-between items-end border-b border-slate-500 pt-5 pb-2">
                    <div>
                         {currentConditions.icon === "rain" ? (
                              <MdWbCloudy
                                   size={30}
                                   className="text-clr-muted"
                              />
                         ) : (
                              <MdSunnySnowing
                                   size={30}
                                   className="text-clr-muted"
                              />
                         )}
                         <h2 className="text-4xl">
                              {currentConditions?.temp}&deg;C
                         </h2>
                    </div>
                    <div className="text-sm text-right font-semibold">
                         <h4 className="leading-0">Dramatic</h4>
                         <h4 className="leading-0">
                              {currentConditions?.conditions}
                         </h4>
                    </div>
               </div>

               <div>
                    <h3 className="font-medium text-[16px]">Chance of rain</h3>
                    <RainProbStats />
               </div>

               <SunriseSunset />
          </aside>
     );
};

export default RightSideBar;
