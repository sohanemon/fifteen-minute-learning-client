import { RouterProvider } from "react-router-dom";
import UserProvider from "./contexts/user-provider";
import { router } from "./routes/router";

function App() {
  return (
    <div className='dark font-poppins'>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
