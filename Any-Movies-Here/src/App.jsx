import { createBrowserRouter, RouterProvider } from "react-router";
import Routes from "./routes/Routes";
import FavoriteContext, { FavoriteProvider } from "./Context/FavoriteContext";
import { RegisterProvider } from "./Context/RegisterContext";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <RegisterProvider>
        <FavoriteProvider>
          <div>
            <RouterProvider router={router} />
          </div>
        </FavoriteProvider>
      </RegisterProvider>
    </>
  );
}

export default App;
