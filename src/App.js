import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useTheme } from "./contexts/theme-provider";
import { router } from "./routes/router";

function App() {
  const { nightMode, setNightMode } = useTheme();

  useEffect(() => {
    setNightMode(localStorage.getItem("night_mode"));

    return () => {};
  }, []);

  return (
    <div className={`${nightMode && "dark"}  font-poppins`}>
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
