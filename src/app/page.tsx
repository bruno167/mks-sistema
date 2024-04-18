"use client"

import App from "./app";
import './globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
          <App />
  );
}
