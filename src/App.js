import { RouterProvider } from "react-router-dom";
import { useTheme } from "./contexts/theme-provider";
import { router } from "./routes/router";

function App() {
  const { nightMode } = useTheme();

  return (
    <div className={`${nightMode && "dark"}  font-poppins`}>
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
