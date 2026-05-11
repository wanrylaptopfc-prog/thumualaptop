import Hero from "@/components/Hero";
import LaptopSlider from "@/components/LaptopSlider";
import PriceTable from "@/components/PriceTable";
import PriceFactors from "@/components/PriceFactors";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Categories from "@/components/Categories";
import Policies from "@/components/Policies";
import SellingTips from "@/components/SellingTips";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

/* ── JSON-LD Structured Data ── */

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LaptopWanry - Thu Mua Laptop Cũ Giá Cao",
  image: "https://thulaptophcm.vn/img/THU-MUA-GIA-CAO-6.jpg",
  "@id": "https://thulaptophcm.vn",
  url: "https://thulaptophcm.vn",
  telephone: "0965476598",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "115/16 Lê Trọng Tấn, P. Sơn Kỳ",
    addressLocality: "Quận Tân Phú",
    addressRegion: "TP.HCM",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.8018,
    longitude: 106.6297,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "08:30",
    closes: "20:30",
  },
  sameAs: [
    "https://www.facebook.com/thumualaptopcuhcm",
    "https://zalo.me/0965476598",
  ],
  description:
    "LaptopWanry chuyên thu mua laptop cũ giá cao, không ép giá, thu tất cả các dòng. Thanh toán nhanh, tận nơi tại TP.HCM.",
  areaServed: {
    "@type": "City",
    name: "Hồ Chí Minh",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Làm sao để kiểm tra cấu hình laptop trước khi bán?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trên Windows: Bấm Windows + R, nhập dxdiag, nhấn Enter để xem CPU, RAM, model. Trên macOS: Nhấp Apple Menu > About This Mac.",
      },
    },
    {
      "@type": "Question",
      name: "Laptop bị lỗi có thể bán được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. LaptopWanry thu mua mọi tình trạng laptop: hư mainboard, vỡ màn, lỗi bàn phím, hỏng pin, cấn móp, thậm chí xác laptop không sửa được.",
      },
    },
    {
      "@type": "Question",
      name: "LaptopWanry có thu mua tận nơi không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chúng tôi hỗ trợ thu mua laptop tận nơi tại TP.HCM, khách không cần mang máy đến cửa hàng. Thanh toán ngay bằng tiền mặt hoặc chuyển khoản.",
      },
    },
    {
      "@type": "Question",
      name: "Thu mua laptop có tính phí kiểm tra không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không. Toàn bộ quá trình định giá, kiểm tra và tư vấn đều hoàn toàn miễn phí.",
      },
    },
    {
      "@type": "Question",
      name: "Dữ liệu trên laptop cũ có được bảo mật không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyệt đối. LaptopWanry hỗ trợ xóa dữ liệu miễn phí trước khi thu mua, đảm bảo thông tin cá nhân được bảo mật an toàn.",
      },
    },
    {
      "@type": "Question",
      name: "Laptop xách tay Mỹ, Nhật có bán được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn được. Chúng tôi không phân biệt máy xách tay hay chính hãng. Laptop nhập từ Mỹ, Nhật, Hàn đôi khi còn được định giá cao hơn.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />
      <LaptopSlider />
      <PriceTable />
      <PriceFactors />
      <Process />
      <ContactForm />
      <Categories />
      <Policies />
      <SellingTips />
      <FAQ />
      <ServiceArea />
      <ContactCTA />
      <Footer />
    </>
  );
}
