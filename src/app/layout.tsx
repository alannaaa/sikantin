import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  // variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pesan Makanan dari Kantin UI Jadi Mudah - SiKantin",
  description: "Pesan Makanan dari Kantin UI Jadi Mudah - SiKantin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className}`}
      >
        {children}
      </body>
    </html>
  );
}
