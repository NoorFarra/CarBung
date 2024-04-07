
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./Components/nav";
import "./globals.css";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarBung",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     
      <body className={inter.className}>
          <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
