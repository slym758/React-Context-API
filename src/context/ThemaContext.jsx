import { createContext, useState, useEffect, useContext } from "react";

const ThemaContext = createContext();

export const ThemaProvider = ({ children }) => {
  const [thema, setThema] = useState(localStorage.getItem("thema") || "light");

  useEffect(() => {
    localStorage.setItem("thema", thema);
  }, [thema]);
  const values = {
    thema,
    setThema,
  };
  return (
    <ThemaContext.Provider value={values}>{children}</ThemaContext.Provider>
  );
};

export const useThema = () => useContext(ThemaContext, ThemaProvider);
