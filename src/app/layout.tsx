import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
})

export const metadata: Metadata = {
  title: "JD Portfolio",
  description: "Welcome to my personal portfolio as a passionate developer, where I showcase my projects and skills in building innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${latoRegular.variable} ${latoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
