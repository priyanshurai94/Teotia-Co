import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './modules/Home.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Services from './components/Services.jsx';
import VirtualCfo from './components/VirtualCfo.jsx';
import Resources from './components/Resources.jsx';
import Careers from './components/Careers.jsx';
import ContactUs from './components/ContactUs.jsx'
import ActRule from './components/Resources/ActRule.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/virtualcfo",
        element: <VirtualCfo />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/act-rules",
        element: <ActRule />,
      },

   
    ]
  }
  
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  