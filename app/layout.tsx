import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const trainex = localFont({
  src: "./fonts/Trainex-Regular.otf",
  variable: "--font-trainex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JK Fitness",
  description: "Stronger Starts Here - JK Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${trainex.variable}`}>
      <body className={`${poppins.className} bg-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
