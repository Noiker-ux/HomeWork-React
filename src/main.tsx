import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MenuLayout from "./layouts/MenuLayout/MenuLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import axios from "axios";
import { PREFIX_LINK_TO_API, API_KEY } from "./helpers/API";
import { IGame } from "./assets/IGame";
import { RequireApi } from "./helpers/RequireApi";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Error404 from "./pages/Error404/Error404";



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
          const { data } = await axios.get(`${PREFIX_LINK_TO_API}/games?key=${API_KEY}&dates=2024-01-01,2024-12-31`);
          return data.results as IGame[];
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/favorites",
        element: <RequireApi><Suspense fallback={<>Загрузка...</>}><FavoritesPage /></Suspense></RequireApi>,
      },
      {
        path: "/profile",
        element: <RequireApi><ProfilePage /></RequireApi>,
      },
      {
        path: "/games/:id",
        element: <RequireApi><DetailPage /></RequireApi>,
        loader: async ({ params }) => {
          const { data }: { data: IGame } = await axios.get(
            `${PREFIX_LINK_TO_API}/games/${params.id}?key=${API_KEY}`
          );
          return data;
        },
        errorElement: <>Ошибка загрузки детальной страницы</>
      },
      {
        path: "*",
        element: <Error404 />,
      }
    ],
  },
]);





ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>

  
);
