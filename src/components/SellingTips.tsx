import {
  SparklesIcon,
  BoltIcon,
  CloudArrowUpIcon,
  HeartIcon,
  UserMinusIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const TIPS = [
  { icon: SparklesIcon, tip: "Vệ sinh máy sạch sẽ — máy sạch được đánh giá tâm lý cao hơn" },
  { icon: BoltIcon, tip: "Mang sạc zin chính hãng — tăng thêm 200.000 – 500.000đ" },
  { icon: CloudArrowUpIcon, tip: "Backup và xoá dữ liệu cá nhân trước khi mang máy" },
  { icon: HeartIcon, tip: "Kiểm tra pin: Settings → Battery Health, pin >80% = giá tốt" },
  { icon: UserMinusIcon, tip: "Gỡ tài khoản iCloud (MacBook) hoặc Microsoft trước khi bán" },
  { icon: ClockIcon, tip: "Bán sớm trước khi có thế hệ chip mới — tránh mất giá 15–25%/năm" },
];

export default function SellingTips() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Mẹo Bán Laptop Được Giá Cao
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            Chuẩn bị đúng cách để nhận giá tốt nhất khi bán laptop cũ.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible" style={{ scrollbarWidth: "none" }}>
          {TIPS.map((t) => (
            <div key={t.tip} className="shrink-0 w-[240px] sm:w-auto snap-start flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
              <t.icon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-zinc-600 leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
