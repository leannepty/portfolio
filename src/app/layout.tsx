"use client"

import { Navbar } from "@/component/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/utils/theme";
import { Footer } from "@/component/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" >
      <body>
        <style jsx global>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}
        </style>
        <ChakraProvider theme={customTheme}>
          <Navbar />
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
