import { createBrowserRouter } from "react-router-dom";
import { Home, Auth, Chat } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path: "/chat",
    element: <Chat/>,
  }
]);
