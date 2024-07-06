import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";

import ThemeProvider from "./components/ToggleColorMode.tsx";
import "./index.css";
import { default as Home } from "./pages/Home.tsx";
import Messages from "./pages/Messages.tsx";
import Account from "./pages/Account.tsx";
import ReciveAddress from "./pages/ReciveAddress.tsx";
import Voucher from "./pages/Voucher.tsx";
import Datacenter from "./pages/DateCenter.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/recive",
        element: <ReciveAddress />,
      },
      {
        path: "/voucher",
        element: <Voucher />,
      },
      {
        path: "/datacenter",
        element: <Datacenter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
