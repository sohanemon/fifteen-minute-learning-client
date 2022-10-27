import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
const Theme = createContext();
export const useTheme = () => useContext(Theme);
const ThemeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(null);
  useEffect(() => {
    setNightMode(JSON.parse(localStorage.getItem("night_mode")));

    return () => {};
  }, []);
  return (
    <Theme.Provider value={{ nightMode, setNightMode }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
