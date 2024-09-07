import React from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ClientMain from './Pages/Client/Main';
import ClientHome from './Pages/Client/Home';
import Header from "./Components/Client/Header";

export default function App() {
  const routes = createBrowserRouter([
    {
      path : '/',
      element : <ClientMain/>,
      children : [
        {
          path : '',
          element : <ClientHome/>
        }
      ]
    }
  ]);



  return (
    <RouterProvider router={routes}/>
  )
} 