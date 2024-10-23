import useWeatherDataContext from "../hooks/useWeatherDataContext";
import { format, parse } from "date-fns";

const RainProbStats = () => {
     const currentTime = new Date().getTime();
     const {
          data: { days },
     } = useWeatherDataContext();
     const today = days[0];
     const { hours } = today;
     const stats = hours
          .map((hour) => {
               const time = parse(
                    hour.datetime.split(":", 2).join(":"),
                    "HH:mm",
                    new Date()
               ).getTime();
               if (time >= currentTime) {
                    const { precipprob } = hour;
                    const stat = {
                         time: format(time, "H a"),
                         value: precipprob,
                    };
                    return stat;
               }
          })
          .filter((stat) => stat !== undefined)
          .slice(0, 4);
     return (
          <div className="pt-2 grid gap-4">
               {stats.map(
                    (stat: { value: number; time: string }, index: number) => (
                         <div className="flex items-center gap-2" key={index}>
                              <span className="uppercase">{stat.time}</span>
                              <div className="flex-1 h-[30px] rounded-full bg-clr-progress-bar ">
                                   <div
                                        style={{ width: `${stat.value}%` }}
                                        className="bg-clr-progress h-full rounded-full"
                                   ></div>
                              </div>
                              <span>{stat.value}</span>
                         </div>
                    )
               )}
          </div>
     );
};

export default RainProbStats;
