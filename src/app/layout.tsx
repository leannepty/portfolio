"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/utils/theme";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "PAUTY Léanne",
//   description: "Portfolio PAUTY Léanne", // TODO: a voir 
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
