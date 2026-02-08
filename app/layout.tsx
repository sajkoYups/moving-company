import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConsentMode } from "@/components/ConsentMode";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moving Company Hamburg",
  description: "Umzug Hamburg — transparent and fair. Free on-site visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <ConsentMode />
        {children}
      </body>
    </html>
  );
}
