import axios from "axios";

const query = {
     unitGroup: "metric",
     key: "GDPR7PNDBLCFRD6BWQW3NE33U",
     contentType: "json",
};

const axiosInstance = axios.create({
     baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bamenda",
     headers: {
          "Content-Type": "application/json",
     },
     params: { ...query },
});

export default axiosInstance;
