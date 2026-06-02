import type { Metadata } from "next";
import {
  DynaPuff,
  Geist,
  Geist_Mono,
  Hammersmith_One,
  Lato,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});
const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dynaPuff",
});

export const metadata: Metadata = {
  title: "MediStore",
  description: "A medicine store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${geistMono.variable} ${dynaPuff.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}{" "}
        <script
          src="https://kit.fontawesome.com/dac3f80c3f.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
