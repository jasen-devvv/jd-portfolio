"use client";

import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  setInterval(() => {
    setShow(true)
  }, 700);

  useEffect(() => {
    setShow(false)
  }, [pathname])
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${latoRegular.variable} ${latoBold.variable} bg-white-4 antialiased`}
        style={{ overflow: "hidden", position: "relative", margin: 0 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            animate={{ x: [0, '-100%'], transition: { duration: 1, ease: 'easeInOut'} }}
            className="fixed top-0 left-0 w-full h-full bg-primary z-50"
          >
            <Image src="/img/logo.png" width={200} height={200} alt="Logo" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-black-sb" />
          </motion.div>
        </AnimatePresence>

        {show && (
          <div className="z-10 relative">
            <NavBar />
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
