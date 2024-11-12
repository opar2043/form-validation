import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Signin from './Components/Signin.jsx';
import Order from './Components/Order.jsx';
import PrivateArea from './Components/PrivateArea.jsx';
import Profile from './Components/Profile.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/order',
        element: <PrivateArea><Order></Order></PrivateArea>,
      },
      {
        path: '/profile',
        element: <PrivateArea>
          <Profile></Profile>
        </PrivateArea>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
      
           <RouterProvider router={router} />      
    
  </StrictMode>
);
