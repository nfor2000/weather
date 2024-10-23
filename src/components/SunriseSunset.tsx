import { MdArrowDropDown, MdNightlight, MdSunny } from "react-icons/md";
import useWeatherDataContext from "../hooks/useWeatherDataContext";
import { format, parse } from "date-fns";

const SunriseSunset = () => {
     const {
          data: { currentConditions, resolvedAddress: location },
     } = useWeatherDataContext();
     const { sunset, sunrise } = currentConditions;

     const formatTime = (time: string): string => {
          return format(
               parse(time.split(":", 2).join(":"), "HH:mm", new Date()),
               "hh:mm a"
          );
     };

     const sunriseSub = () => {
          let formatedTime: string = "";
          const time =
               new Date().getTime() -
               parse(
                    sunrise.split(":", 2).join(":"),
                    "HH:mm",
                    new Date()
               ).getTime();
          if (time > 0) {
               formatedTime = `${format(time, "H")} hours ago`;
          } else {
               formatedTime = `in ${format(Math.abs(time), "H")} hours`;
          }

          return formatedTime;
     };

     const sunsetSub = () => {
          let formatedTime: string = "";
          const time =
               parse(
                    sunset.split(":", 2).join(":"),
                    "HH:mm",
                    new Date()
               ).getTime() - new Date().getTime();
          if (time > 0) {
               formatedTime = `in ${format(time, "H")} hours`;
          } else {
               formatedTime = `${format(Math.abs(time), "H")} hours ago`;
          }

          return formatedTime;
     };
     return (
          <div className="flex flex-col gap-5">
               <div className="flex justify-between items-center">
                    <h3 className="text-[16px]">Sunrise & Sunset</h3>
                    <button className="flex items-center text-sm">
                         <a href="">{location.split(",", 1)[0]}</a>
                         <MdArrowDropDown />
                    </button>
               </div>

               <div className="grid gap-5">
                    <div className="flex items-center p-[10px] rounded-sm bg-white/10 justify-between">
                         <div className="flex items-center gap-2">
                              <MdSunny size={24} />
                              <div>
                                   <h4 className="text-clr-muted text-sm">
                                        Sunrise
                                   </h4>
                                   <h3 className="font-semibold">
                                        {formatTime(sunrise)}
                                   </h3>
                              </div>
                         </div>
                         <p className="text-xs  text-clr-muted">
                              {sunriseSub()}
                         </p>
                    </div>

                    <div className="flex items-center p-[10px] rounded-sm bg-white/10 justify-between">
                         <div className="flex items-center gap-2">
                              <MdNightlight size={24} />
                              <div>
                                   <h4 className="text-clr-muted text-sm">
                                        Sunset
                                   </h4>
                                   <h3 className="font-semibold">
                                        {formatTime(sunset)}
                                   </h3>
                              </div>
                         </div>
                         <p className="text-xs  text-clr-muted">
                              {sunsetSub()}
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default SunriseSunset;
