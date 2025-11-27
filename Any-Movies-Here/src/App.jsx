import { createBrowserRouter, RouterProvider } from "react-router";
import Routes from "./routes/Routes";
import { FavoriteProvider } from "./Pages/Favorite/FavoriteProvider";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <FavoriteProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </FavoriteProvider>
    </>
  );
}

export default App;
