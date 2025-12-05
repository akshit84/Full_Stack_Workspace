import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Routes from "./Routes/Routes";

function App() {
  const router = createBrowserRouter(Routes);
  return <RouterProvider router={router} />;
}

export default App;
