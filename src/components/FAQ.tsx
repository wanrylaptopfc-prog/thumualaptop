"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQS = [
  {
    q: "Làm sao để kiểm tra cấu hình laptop trước khi bán?",
    a: "Trên Windows: Bấm Windows + R, nhập dxdiag, nhấn Enter để xem CPU, RAM, model. Hoặc Ctrl + Shift + Esc mở Task Manager > Performance. Trên macOS: Nhấp Apple Menu > About This Mac.",
  },
  {
    q: "Laptop bị lỗi có thể bán được không?",
    a: "Có. LaptopWanry thu mua mọi tình trạng laptop: hư mainboard, vỡ màn, lỗi bàn phím, hỏng pin, cấn móp, thậm chí xác laptop không sửa được — miễn là máy có nguồn gốc rõ ràng.",
  },
  {
    q: "Tôi cần mang theo gì khi bán laptop?",
    a: "Mang theo máy, sạc, hộp, hóa đơn mua hàng (nếu có). Phụ kiện đầy đủ sẽ giúp định giá cao hơn. Không có phụ kiện vẫn thu mua bình thường.",
  },
  {
    q: "Laptop không còn sạc, mất phụ kiện có bán được không?",
    a: "Vẫn bán được. Laptop được thu mua ngay cả khi mất sạc hoặc phụ kiện đi kèm, chỉ giá sẽ điều chỉnh phù hợp.",
  },
  {
    q: "Cách xem card màn hình (GPU) laptop như thế nào?",
    a: "Trên Windows: Bấm Windows + R, nhập dxdiag, chọn tab Display. Hoặc Windows + X > Device Manager > Display adapters. Trên macOS: Apple Menu > About This Mac > System Report > Graphics/Displays.",
  },
  {
    q: "LaptopWanry có thu mua tận nơi không?",
    a: "Có. Chúng tôi hỗ trợ thu mua laptop tận nơi tại TP.HCM, khách không cần mang máy đến cửa hàng. Thanh toán ngay bằng tiền mặt hoặc chuyển khoản.",
  },
  {
    q: "Dữ liệu trên laptop cũ có được bảo mật không?",
    a: "Tuyệt đối. LaptopWanry hỗ trợ xóa dữ liệu miễn phí trước khi thu mua, đảm bảo thông tin cá nhân của khách hàng được bảo mật an toàn.",
  },
  {
    q: "Laptop đã hết bảo hành có bán được không?",
    a: "Hoàn toàn được. Chúng tôi thu mua cả máy còn bảo hành lẫn hết bảo hành. Bảo hành còn là điểm cộng nhỏ về giá, nhưng không bắt buộc.",
  },
  {
    q: "Thu mua laptop có tính phí kiểm tra không?",
    a: "Không. Toàn bộ quá trình định giá, kiểm tra và tư vấn đều hoàn toàn miễn phí. Kể cả trường hợp bạn không đồng ý bán cũng không mất phí.",
  },
  {
    q: "Laptop xách tay Mỹ, Nhật có bán được không?",
    a: "Hoàn toàn được. Chúng tôi không phân biệt máy xách tay hay chính hãng. Laptop nhập từ Mỹ, Nhật, Hàn đôi khi còn được định giá cao hơn do cấu hình thường cao hơn bản VN.",
  },
  {
    q: "Báo giá qua Zalo rồi mang máy đến, giá có thay đổi không?",
    a: "Giá qua Zalo là giá sơ bộ dựa trên thông tin và ảnh bạn cung cấp. Sau kiểm tra trực tiếp, giá có thể điều chỉnh nếu phát sinh vấn đề chưa đề cập, nhưng sẽ giải thích rõ lý do.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[700px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-base text-zinc-500">
            Giải đáp nhanh các thắc mắc khi bán laptop cũ.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm sm:text-[15px] font-medium text-zinc-800 pr-4">{faq.q}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-48" : "max-h-0"}`}>
                <p className="px-5 pb-4 text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
