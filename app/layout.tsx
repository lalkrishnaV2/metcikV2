import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/mainPage/Header";
import Home from "./(page)/[[...page]]/page";
import ReduxProvider from "@/provider/redux/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font;poppins",
});

export const metadata: Metadata = {
  title: "Metick",
  description: "solution for study new world of fin-tech.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
