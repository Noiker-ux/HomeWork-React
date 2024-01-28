import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MenuLayout from './layouts/MenuLayout/MenuLayout';
import { UserContextProvider } from './context/user.context';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MenuLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />
			},
			{
				path: '/login',
				element: <LoginPage /> 
			},
			{
				path: '/favorites',
				element: <FavoritesPage />
			},
			{
				path: '/profile',
				element: <ProfilePage />
			},
			{
				path: '/movie/:id',
				element: <DetailPage />
			}
		]
	},
	{
		path: '*',
		element: '*'
	}
])

ReactDOM.createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
);
