import React from "react";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-page text-ink">
      <NavBar />
      <main className="w-full max-w-none">{children}</main>
    </div>
  );
}
