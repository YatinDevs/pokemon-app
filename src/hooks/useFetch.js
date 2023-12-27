import React, { useState, useEffect } from "react";

// https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1

export default function useFetch(url) {
  // data,loading,error
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // console.log("inside useEffect");
    // Initially IsLoading So
    setIsLoading(true);
    async function fetchDataFromAPI() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Something Went Wrong");
        }
        const resData = await res.json();
        setData(resData);
        setIsError(null);
        console.log("data send");
      } catch (error) {
        console.dir(error.message);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataFromAPI();
  }, [url]);

  return { data, isError, isLoading };
}
