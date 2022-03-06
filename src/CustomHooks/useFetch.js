import React ,{useEffect,useState}from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("fething is not succesful");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoding(false);
            setError(null);
          })
          .catch((error) => {
            setError(error.message);
            setIsLoding(false);
          });
      });
    },[url]);
  return {data,isLoding,error}
}
