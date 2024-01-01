import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { MdRocket } from "react-icons/md";

interface GetDataResponse {
  responseData: any; // Replace 'any' with the actual type of your response data
  getLoading: boolean;
  getData: (url: string) => Promise<void>;
}

const useGetData = (): GetDataResponse => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const access_token = isLocalStorageAvailable
    ? localStorage.getItem("ACCESS_TOKEN")
    : null;

  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState<any>(null);

  const getData = async (url: string) => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + url,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponseData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle the error by setting the response data and loading state
        setResponseData(error.response?.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return { responseData, getLoading: loading, getData };
};

export default useGetData;
