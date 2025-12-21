import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/lib/Components/LayoutComponents/Navbar";
import { LoadingProvider } from "@/lib/Context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DBH | Creative Advertising Agency",
  icons: { icon: "/DbhIcon.ico" },
  description:
    "We are the place where brands come when they’re ready to become memorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        <Navbar />
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
