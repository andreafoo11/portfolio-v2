import React from "react";
import { ThemeProvider } from "../context/ThemeContext";

export default function Root({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
