import { ReactNode } from "react";
import { Providers } from "@/components/Providers";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noteify",
  description: "Note taking app, built with Next.js and TypeScript",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("bg-neutral-100", font.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
