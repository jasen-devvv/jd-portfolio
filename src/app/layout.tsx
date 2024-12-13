import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const quicksand = localFont({
  src: "./fonts/Quicksand.ttf",
  variable: "--font-quicksand",
  weight: "700",
});
const latoRegular = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato-regular",
  weight: "400",
});
const latoBold = localFont({
  src: "./fonts/Lato-Bold.ttf",
  variable: "--font-lato-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: 'JD Portfolio',
  description: 'JD Personal Portfolio Website'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${latoRegular.variable} ${latoBold.variable} bg-white-4 antialiased`}
      >
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
