import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <div className='dark font-poppins'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
