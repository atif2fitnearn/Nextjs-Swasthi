"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css"
  
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
 
 <html lang="en">
      <head>
        {/* Include any head elements like meta tags, title, etc. */}
      </head>
      <body>
        {children}
      </body>
    </html>

     </>
  );
}