import App from "@/App";
import About from "@/pages/about";
import Tasks from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default routes;
