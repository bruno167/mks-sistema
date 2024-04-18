"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";


export default function Home() {
  const client = new QueryClient();
  return (
    <App />
  );
}
