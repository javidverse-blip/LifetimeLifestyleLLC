import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Lifetime Lifestyle | Biblical Health, Publishing & Community", template: "%s | Lifetime Lifestyle" },
  description: "Helping families, authors, and individuals transform their lives through biblical health, publishing, and education.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.bunny.net" /><link href="https://fonts.bunny.net/css?family=dancing-script:400,700|montserrat:400,700|nunito:400,700|raleway:400,700|roboto:400,700" rel="stylesheet" /></head><body><Header /><main>{children}</main><Footer /></body></html>;
}
