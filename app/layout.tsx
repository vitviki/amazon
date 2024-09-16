import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amaze - India's Best Online Store",
  icons: {
    icon: {
      url: "/social.png",
      type: "image/png",
    },
    shortcut: { url: "/social.png", type: "image/png" },
  },
  description:
    "India's best online store. Buy electornics, clothes, home decor and much more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
