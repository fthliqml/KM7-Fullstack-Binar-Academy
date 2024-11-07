import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@pages/Home/Home";
import AboutMe from "@pages/AboutMe/AboutMe";
import NotFound from "@pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
