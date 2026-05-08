import { MapPinIcon } from "@heroicons/react/24/solid";

const AREAS = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", "Quận 11", "Quận 12",
  "Bình Thạnh", "Phú Nhuận", "Gò Vấp", "Tân Bình", "Tân Phú", "Bình Tân",
  "TP Thủ Đức", "Hóc Môn", "Củ Chi", "Nhà Bè", "Bình Chánh",
];

export default function ServiceArea() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Phạm Vi Thu Mua Tại TP.HCM
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            Thu mua tận nơi miễn phí tại tất cả quận huyện TP.HCM — kể cả ngoại thành.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
          {AREAS.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-600">
              <MapPinIcon className="w-3.5 h-3.5 text-amber-500" />
              {a}
            </span>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-400 mt-6">
          Trụ sở: 115/16 Lê Trọng Tấn, P. Sơn Kỳ, Q. Tân Phú, TP.HCM · Hotline: 0965 476 598
        </p>
      </div>
    </section>
  );
}
