import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import Error from './Error/Error'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home'
import Blogdetails from './Pages/Blogdetails'
import {  HelmetProvider } from 'react-helmet-async'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog/:id",
        element: <Blogdetails />,
        loader: () => fetch('/blogdata.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
)
