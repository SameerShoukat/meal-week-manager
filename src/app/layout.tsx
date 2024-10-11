import type { Metadata } from "next";
import RootLayoutClient from "./app";

export const metadata: Metadata = {
  title: "Sameer Shoukat Ali",
  description: "This is an on-boarding test for strugbits",
};


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
