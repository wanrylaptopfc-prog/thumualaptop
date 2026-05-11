import {
  SparklesIcon,
  BoltIcon,
  CloudArrowUpIcon,
  HeartIcon,
  UserMinusIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import MobileSlider from "./MobileSlider";

const TIPS = [
  { icon: SparklesIcon, tip: "Vệ sinh máy sạch sẽ — máy sạch được đánh giá tâm lý cao hơn" },
  { icon: BoltIcon, tip: "Mang sạc zin chính hãng — tăng thêm 200.000 – 500.000đ" },
  { icon: CloudArrowUpIcon, tip: "Backup và xoá dữ liệu cá nhân trước khi mang máy" },
  { icon: HeartIcon, tip: "Kiểm tra pin: Settings → Battery Health, pin >80% = giá tốt" },
  { icon: UserMinusIcon, tip: "Gỡ tài khoản iCloud (MacBook) hoặc Microsoft trước khi bán" },
  { icon: ClockIcon, tip: "Bán sớm trước khi có thế hệ chip mới — tránh mất giá 15–25%/năm" },
];

function TipCard({ t }: { t: (typeof TIPS)[number] }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
      <t.icon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
      <p className="text-sm text-zinc-600 leading-relaxed">{t.tip}</p>
    </div>
  );
}

export default function SellingTips() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Mẹo Bán Laptop Được Giá Cao
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            Chuẩn bị đúng cách để nhận giá tốt nhất khi bán laptop cũ.
          </p>
        </div>

        <MobileSlider>
          {TIPS.map((t, i) => <TipCard key={i} t={t} />)}
        </MobileSlider>

        <div className="hidden sm:grid max-w-3xl mx-auto sm:grid-cols-2 gap-3">
          {TIPS.map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
              <t.icon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-zinc-600 leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
