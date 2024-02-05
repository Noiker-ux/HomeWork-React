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
import { IFilm } from "./assets/IGame";
import { RequireApi } from "./helpers/RequireApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: (
          <RequireApi>
            <Suspense fallback={<>Загрузка...</>}>
              <MainPage />
            </Suspense>
          </RequireApi>
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
        element: <RequireApi><FavoritesPage /></RequireApi>,
      },
      {
        path: "/profile",
        element: <RequireApi><ProfilePage /></RequireApi>,
      },
      {
        path: "/movie/:id",
        element: <RequireApi><DetailPage /></RequireApi>,
        loader: async ({ params }) => {
          const { data }: { data: IFilm } = await axios.get(
            `${PREFIX}/games/${params.id}?key=${API_KEY}`
          );
          return data;
        },
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
