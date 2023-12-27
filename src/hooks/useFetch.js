import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState("");
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    async function fetchDataFromAPI() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError("Error Fetching Data");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [url]);

  return { data, isError, isLoading };
}
