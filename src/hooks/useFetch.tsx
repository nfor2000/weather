import { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";

const useFetch = () => {
     const [data, setData] = useState<null | object>(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     const fetchData = async () => {
          try {
               const response = await axiosInstance.get("");
               const data = response.data;
               setData(data);
          } catch (error) {
               console.log(error);
               setError("Something went wrong: Connection problem");
          } finally {
               setIsLoading(false);
          }
     };
     useEffect(() => {
          fetchData();
     }, []);
     return { isLoading, data, error };
};

export default useFetch;
