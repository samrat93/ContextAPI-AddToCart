import axios from "axios";
import { useState, useEffect } from "react";

const useCountryList = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const data = await res?.data;
        setApiData(data?.data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { isLoading, apiData, serverError };
};
export default useCountryList;
