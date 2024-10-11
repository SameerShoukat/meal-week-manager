'use client'; // This file is a Client Component

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
  
    <Provider store={store}>
      <main className={`${inter.className} main d-flex items-center justify-center`}>
        {children}
      </main>
    </Provider>
    </>

  );
}
