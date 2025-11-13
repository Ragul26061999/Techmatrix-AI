import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Techmatrix AI | Building the Future, One Line of Code at a Time",
  description:
    "Techmatrix AI delivers scalable web, mobile, and AI solutions with human-centered design and modern engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[var(--page-bg)] text-[var(--text-default)] flex flex-col min-h-screen`}
      >
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}