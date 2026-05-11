import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Thu Mua Laptop Cũ Giá Cao Tại TP.HCM | LaptopWanry",
  description:
    "LaptopWanry chuyên thu mua laptop cũ giá cao, không ép giá, thu tất cả các dòng. Thanh toán nhanh, tận nơi tại TP.HCM. Hotline: 0965 476 598",
  keywords: [
    "thu mua laptop cũ",
    "mua laptop cũ giá cao",
    "thu mua laptop tphcm",
    "bán laptop cũ",
    "laptopwanry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="antialiased" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}
