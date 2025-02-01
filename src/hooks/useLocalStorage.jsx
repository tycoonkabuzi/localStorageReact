import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("user");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data));
    }
  }, [data]);

  const sendToLocalStorage = (newData) => {
    setData((prev) => {
      return [...prev, newData];
    });
  };

  return [data, sendToLocalStorage];
};
export default useLocalStorage;
