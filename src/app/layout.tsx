"use client"

import { Navbar } from "@/component/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/utils/theme";

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
