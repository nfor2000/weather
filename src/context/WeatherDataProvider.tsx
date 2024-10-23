import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

interface WeatherContextValues {
     data: any;
     showSideBar: boolean;
     toggleSideBar: () => void;
}

const defaultValue: WeatherContextValues = {
     data: null,
     showSideBar: true,
     toggleSideBar: () => {},
};

export const WeatherDataContext =
     createContext<WeatherContextValues>(defaultValue);

const WeatherDataProvider = ({ children }: { children: React.ReactNode }) => {
     const [showSideBar, setShowSideBar] = useState(false);

     const toggleSideBar = () => {
          setShowSideBar((prev) => !prev);
     };

     const { data, isLoading, error } = useFetch();

     return (
          <>
               {isLoading && (
                    <div className="flex flex-col justify-center items-center bg-clr-dark w-full h-screen">
                         <span className="block w-40 h-40 rounded-full border-y-4 border-bg-side-bar animate-spin"></span>
                    </div>
               )}
               {error && (
                    <div className="flex flex-col justify-center items-center bg-clr-dark h-screen w-full">
                         <h2 className="text-clr-progress">{error}</h2>
                    </div>
               )}
               {data && (
                    <WeatherDataContext.Provider
                         value={{
                              data,
                              toggleSideBar,
                              showSideBar,
                         }}
                    >
                         {children}
                    </WeatherDataContext.Provider>
               )}
          </>
     );
};

export default WeatherDataProvider;
