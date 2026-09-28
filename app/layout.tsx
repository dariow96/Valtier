import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valtiere Jewelery | Bridal Diamond Rentals",
  description: "Shine like a star on your wedding day. Rent bridal diamond jewelry for at least four days and receive a purchase voucher valid for three years.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

