
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FormPage from './FormPage.jsx';
import Checkout from './checkout.jsx';
import AboutPage from './about.jsx';
import {RouterProvider, createBrowserRouter , BrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/form", element: <FormPage /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/about", element: <AboutPage /> },
]);
createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router} />,
 
);


