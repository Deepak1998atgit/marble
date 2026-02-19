import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salam Telecom",
  description: "Salam 5G Business Wireless Internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
