import React from "react";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#151515" }}
    >
      <NavBar />
      <main className="w-full max-w-none">{children}</main>
    </div>
  );
}
