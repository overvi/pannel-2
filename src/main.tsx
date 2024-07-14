import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";

import ThemeProvider from "./components/ToggleColorMode.tsx";
import "./index.css";
import Account from "./pages/Account.tsx";
import Booking from "./pages/Booking.tsx";
import DataCenter from "./pages/DataCenter.tsx";
import { default as Home } from "./pages/Home.tsx";
import HotelDetails from "./pages/HotelDetails.tsx";
import Hotels from "./pages/Hotels.tsx";
import Logs from "./pages/Logs.tsx";
import Messages from "./pages/Messages.tsx";
import ReciveAddress from "./pages/ReciveAddress.tsx";
import Voucher from "./pages/Voucher.tsx";
import Reservation from "./pages/Reservation.tsx";
import Login from "./pages/Login.tsx";
import LoginB2 from "./pages/LoginB2.tsx";

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
        element: <DataCenter />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/hotels/1",
        element: <HotelDetails />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },

      {
        path: "/logs",
        element: <Logs />,
      },
      {
        path: "/reservations/1",
        element: <Reservation />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/b2",
    element: <LoginB2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
