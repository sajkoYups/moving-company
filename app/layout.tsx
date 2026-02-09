import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { ConsentMode } from "@/components/ConsentMode";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "elbe move",
  description: "elbe move — transparent and fair. Free on-site visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <ConsentMode />
        {children}
      </body>
    </html>
  );
}
