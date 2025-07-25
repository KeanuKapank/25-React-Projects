import { useEffect, useState } from "react";
import "./theme.css";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue: string;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
