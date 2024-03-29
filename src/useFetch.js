import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          else{
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
        })
        .catch((err) => {
          if(err.name ==='AbortError'){
            console.log('Fetch Aborted');
          }
          else{
            setisLoading(false);
            setError(err.message);
          }
        });
    }, 1250);

    return ()=> abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
