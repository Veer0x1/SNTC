// 'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNTC IIT BHU Varanasi",
  description: "Science and Technology Council IIT BHU Varanasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon:
    },
    {
      name: "Clubs",
      link: "/clubs",
      //icon:
    },
    {
      name: "Activities",
      link: "/activities",
      //icon:
    },
    {
      name: "Achievements",
      link: "/#achievements",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body className={inter.className}>
      <div className={'p-2 ml-4 mr-4'}>
          <FloatingNav navItems={navItems} />
        </div>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
