"use client"

import "./globals.css";
import NavBar from "./components/NavBar";
import { Navbar } from "react-bootstrap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gestione Contratti</title>
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
