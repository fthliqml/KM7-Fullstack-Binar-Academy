import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "@pages/AboutMe/AboutMe";
import NotFound from "@pages/NotFound/NotFound";
import Dashboard from "@pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
