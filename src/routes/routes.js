import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/Main";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Main
      }
    ]
  }
])