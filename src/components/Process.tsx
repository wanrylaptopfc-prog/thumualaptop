import {
  ClipboardDocumentListIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import MobileSlider from "./MobileSlider";

const STEPS = [
  { num: "01", title: "Gửi Thông Tin Laptop", desc: "Gọi hotline 0965 476 598 hoặc gửi qua Zalo, SMS. Cung cấp model, cấu hình, tình trạng máy và phụ kiện đi kèm.", icon: ClipboardDocumentListIcon },
  { num: "02", title: "Định Giá & Báo Giá Ngay", desc: "LaptopWanry định giá minh bạch, báo giá cao hơn thị trường. Không kỳ kèo, không ép giá.", icon: BanknotesIcon },
  { num: "03", title: "Giao Dịch & Thanh Toán", desc: "Mang máy đến cửa hàng hoặc thu tận nơi tại TP.HCM. Thanh toán ngay bằng tiền mặt hoặc chuyển khoản.", icon: DocumentCheckIcon },
  { num: "04", title: "Xuất Hoá Đơn", desc: "Hoàn tất giao dịch, xuất biên nhận đầy đủ cho khách hàng. Hỗ trợ xoá dữ liệu miễn phí.", icon: RocketLaunchIcon },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="text-center py-4">
      <div className="w-[72px] h-[72px] rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
        <step.icon className="w-8 h-8 text-amber-500" />
      </div>
      <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-1 block">Bước {step.num}</span>
      <h3 className="text-sm font-semibold text-zinc-900 mb-2">{step.title}</h3>
      <p className="text-xs text-zinc-400 leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="quy-trinh" className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Quy Trình Thu Mua
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            Chỉ 4 bước đơn giản, nhanh gọn, minh bạch.
          </p>
        </div>

        <MobileSlider>
          {STEPS.map((s) => <StepCard key={s.num} step={s} />)}
        </MobileSlider>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < STEPS.length - 1 && <div className="hidden lg:block absolute top-9 left-[60%] w-[80%] border-t border-dashed border-zinc-200" />}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[72px] h-[72px] rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-amber-500" />
                </div>
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-1">Bước {step.num}</span>
                <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
