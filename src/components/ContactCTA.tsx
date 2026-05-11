import Image from "next/image";
import { PhoneIcon, MapPinIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function ContactCTA() {
  return (
    <section id="lien-he" className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Liên Hệ Nhận Báo Giá<br />
              <span className="text-amber-500">Cao Nhất</span>
            </h2>
            <p className="text-base text-zinc-500 mb-8 max-w-md mx-auto lg:mx-0">
              Gọi ngay hoặc nhắn Zalo để được tư vấn miễn phí và nhận báo giá trong 5 phút.
            </p>
            <div className="space-y-3 mb-8 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-zinc-600">
                <MapPinIcon className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">115/16 Lê Trọng Tấn, P. Sơn Kỳ, Q. Tân Phú, TP.HCM</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600">
                <PhoneIcon className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">0965 476 598 (Zalo, SMS, Call)</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600">
                <ClockIcon className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">8:00 – 20:00, Thứ 2 – Chủ nhật</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600">
                <GlobeAltIcon className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">thulaptophcm.vn</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-center lg:justify-start">
              <a href="tel:0965476598" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-3 rounded-full active:scale-95 transition-all">
                <PhoneIcon className="w-4 h-4" />
                Gọi ngay
              </a>
              <a href="https://zalo.me/0965476598" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-zinc-200 text-zinc-700 hover:bg-zinc-50 text-sm font-semibold px-6 py-3 rounded-full active:scale-95 transition-all">
                Nhắn Zalo
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/img/THU-MUA-GIA-CAO (1).jpg" alt="CEO LaptopWanry" width={600} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
