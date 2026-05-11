import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";

const GTM_ID = "GTM-MWMLRPDR";

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
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />

      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}
