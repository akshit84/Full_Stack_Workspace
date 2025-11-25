import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Routes from "./routes/Routes";

function App() {
  const router = createBrowserRouter(Routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
