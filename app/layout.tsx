import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Active Auroras",
  description:
    "Active Auroras is a website that helps you find active auroras all around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <head>
        <link rel="icon" href="/tablogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
