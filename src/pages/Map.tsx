import useWeatherDataContext from "../hooks/useWeatherDataContext";

import Button from "../components/Button";
import { MdMenu } from "react-icons/md";

const Map = () => {
     const { data, toggleSideBar } = useWeatherDataContext();
     return (
          <div className="px-5 py-6 flex flex-col gap-10">
               <div className="flex items-center justify-between">
                    <div>
                         <h1 className="text-clr-dark">Map</h1>
                         <h2 className="text-clr-primary text-lg">
                              Current location {data.resolvedAddress}
                         </h2>
                    </div>
                    <Button
                         icon={<MdMenu size={30} />}
                         className="p-2 rounded-lg xl:hidden"
                         onPress={toggleSideBar}
                    />
               </div>
          </div>
     );
};

export default Map;
