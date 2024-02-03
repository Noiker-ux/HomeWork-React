import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MenuLayout from "./layouts/MenuLayout/MenuLayout";
import { UserContextProvider } from "./context/user.context";
import LoginPage from "./pages/LoginPage/LoginPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import axios from "axios";
import { PREFIX, API_KEY } from "./helpers/API";
import { IFilm } from "./assets/InitData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <>Ошибка</>,
        loader: async () => {
          const { data } = await axios.get(`${PREFIX}/games?key=${API_KEY}`);
          return data.results as IFilm[];
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/movie/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: "*",
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
