import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
  description:
    "Explore high-quality study materials, previous year question papers, and expert resources for students. Learn smarter with Acadigo.",
  keywords:
    "Acadigo,2nd Puc,Puc karnataka, study materials, previous year question papers, exam preparation, learning resources, PUC question papers",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
    description:
      "Access the best study materials and exam resources. Prepare smarter with Acadigo.",
    url: "https://yourwebsite.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black `}
      >
        {children}
        <Analytics />
        <Toaster />
        <script
          type="text/javascript"
          src="//pl25970916.effectiveratecpm.com/cc/6a/f8/cc6af81f6c9b6db6dff0546b0bbec8f7.js"
        ></script>
      </body>
    </html>
  );
}
