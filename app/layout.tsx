import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// The metadata object tells search engines about your site
export const metadata: Metadata = {
  title: 'VNR | Strategic Wealth & Tax Experts',
  // CORRECTED: Added the essential meta description
  description: 'Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa’s leading families and businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}