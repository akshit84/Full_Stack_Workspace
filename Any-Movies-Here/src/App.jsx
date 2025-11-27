import { createBrowserRouter, RouterProvider } from "react-router";
import Routes from "./routes/Routes";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <div >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
