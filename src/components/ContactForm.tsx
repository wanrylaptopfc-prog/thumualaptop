"use client";

import { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, CheckCircleIcon, ArrowRightIcon, ArrowLeftIcon, ChevronDownIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

const CPUS = ["Intel Core i3", "Intel Core i5", "Intel Core i7", "Intel Core i9", "Intel Celeron / Pentium", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7", "AMD Ryzen 9", "Apple M1", "Apple M2", "Apple M3", "Apple M4", "Khác"];
const RAMS = ["4GB", "8GB", "16GB", "32GB", "64GB", "Khác"];
const STORAGES = ["128GB", "256GB", "512GB", "1TB", "2TB", "Khác"];
const STORAGE_TYPES = ["SSD NVMe", "SSD SATA", "HDD", "SSD + HDD", "Không rõ"];
const SCREENS = ["13 inch", "14 inch", "15.6 inch", "16 inch", "17.3 inch", "Khác"];
const RESOLUTIONS = ["HD (1366x768)", "Full HD (1920x1080)", "2K (2560x1440)", "4K (3840x2160)", "Retina", "Không rõ"];
const CONDITIONS = ["Mới 99% - Như mới", "Đẹp 95% - Trầy xước nhẹ", "Khá 85% - Cấn móp nhỏ", "Trung bình - Trầy nhiều", "Hư hỏng - Không hoạt động"];
const FEATURES = ["2-in-1", "X360 (Xoay gập)", "Cảm ứng", "Camera IR", "Vân tay", "Đèn bàn phím"];

const COOLDOWN_MS = 10 * 60 * 1000; // 10 phút

/* ── Custom Dropdown ── */
function Dropdown({ options, placeholder, value, onChange }: { options: string[]; placeholder: string; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onPointerUp={(e) => { e.preventDefault(); setOpen(!open); }}
        className={`w-full h-12 sm:h-11 px-4 rounded-xl border text-left text-sm flex items-center justify-between transition-colors cursor-pointer select-none ${
          open ? "border-amber-400 ring-1 ring-amber-400" : "border-zinc-200"
        } ${value ? "text-zinc-900" : "text-zinc-400"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDownIcon className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-zinc-200 rounded-xl shadow-lg max-h-60 overflow-y-auto py-1">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onPointerUp={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-3 sm:py-2.5 text-sm transition-colors cursor-pointer select-none ${
                value === opt ? "bg-amber-50 text-amber-600 font-medium" : "text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
        {label}
        {required && <span className="text-zinc-300 ml-1">(bắt buộc)</span>}
        {hint && <span className="text-zinc-300 ml-1">({hint})</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "cooldown">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [feats, setFeats] = useState<string[]>([]);

  // Step 1
  const [productName, setProductName] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [storageType, setStorageType] = useState("");
  const [screen, setScreen] = useState("");
  const [resolution, setResolution] = useState("");
  const [gpu, setGpu] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [desiredPrice, setDesiredPrice] = useState("");

  // Step 2
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  // Honeypot
  const [website, setWebsite] = useState("");

  const toggleFeat = (f: string) => setFeats((p) => p.includes(f) ? p.filter((x) => x !== f) : [...p, f]);

  const checkCooldown = (): boolean => {
    const last = localStorage.getItem("laptopwanry_last_submit");
    if (last) {
      const diff = Date.now() - parseInt(last, 10);
      if (diff < COOLDOWN_MS) {
        const remaining = Math.ceil((COOLDOWN_MS - diff) / 60000);
        setErrorMsg(`Bạn đã gửi yêu cầu gần đây. Vui lòng đợi ${remaining} phút.`);
        setStatus("cooldown");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkCooldown()) return;

    setStatus("loading");
    setErrorMsg("");

    const payload = {
      productName, cpu, ram, storage, storageType, screen, resolution,
      gpu, features: feats.join(", "), condition, description, desiredPrice,
      name, phone, email, address, note, website,
    };

    try {
      const res = await fetch(SHEET_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.status === "success") {
        localStorage.setItem("laptopwanry_last_submit", Date.now().toString());
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Có lỗi xảy ra, vui lòng thử lại.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Không thể kết nối. Vui lòng gọi 0965 476 598.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-10 sm:py-14 bg-white">
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center py-12 rounded-2xl border border-emerald-200 bg-emerald-50">
            <CheckCircleIcon className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <p className="text-lg font-semibold text-zinc-900 mb-1">Gửi thành công!</p>
            <p className="text-sm text-zinc-500">Chúng tôi sẽ chủ động liên hệ và báo giá ngay.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">
            Tư Vấn & Báo Giá Miễn Phí
          </h2>
          <p className="text-sm text-zinc-500">Nhập đầy đủ thông tin để nhận báo giá chính xác nhất.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-0">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-amber-500 text-white" : "bg-zinc-100 text-zinc-400"}`}>1</div>
              <span className={`text-sm font-medium ${step >= 1 ? "text-zinc-900" : "text-zinc-400"}`}>Sản phẩm</span>
            </div>
            <div className={`w-10 sm:w-16 h-0.5 mx-3 rounded-full ${step >= 2 ? "bg-amber-500" : "bg-zinc-200"}`} />
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-amber-500 text-white" : "bg-zinc-100 text-zinc-400"}`}>2</div>
              <span className={`text-sm font-medium ${step >= 2 ? "text-zinc-900" : "text-zinc-400"}`}>Liên hệ</span>
            </div>
          </div>
        </div>

        {/* Error / Cooldown */}
        {(status === "error" || status === "cooldown") && (
          <div className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
            <ExclamationCircleIcon className="w-5 h-5 shrink-0" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 p-5 sm:p-8">
          {/* Honeypot — hidden from users */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <Field label="Tên sản phẩm" required>
                <input type="text" required placeholder="Ví dụ: Dell XPS 13 9300" className="form-input" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </Field>

              <Field label="CPU" hint="không bắt buộc">
                <Dropdown options={CPUS} placeholder="Vui lòng chọn" value={cpu} onChange={setCpu} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="RAM" hint="không bắt buộc"><Dropdown options={RAMS} placeholder="Vui lòng chọn" value={ram} onChange={setRam} /></Field>
                <Field label="Ổ cứng" hint="không bắt buộc"><Dropdown options={STORAGES} placeholder="Vui lòng chọn" value={storage} onChange={setStorage} /></Field>
              </div>

              <Field label="Loại ổ cứng" hint="không bắt buộc">
                <Dropdown options={STORAGE_TYPES} placeholder="Vui lòng chọn" value={storageType} onChange={setStorageType} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Màn hình" hint="không bắt buộc"><Dropdown options={SCREENS} placeholder="Vui lòng chọn" value={screen} onChange={setScreen} /></Field>
                <Field label="Độ phân giải" hint="không bắt buộc"><Dropdown options={RESOLUTIONS} placeholder="Vui lòng chọn" value={resolution} onChange={setResolution} /></Field>
              </div>

              <Field label="Card màn hình" hint="không bắt buộc">
                <input type="text" placeholder="Ví dụ: Nvidia GTX 4050 6GB" className="form-input" value={gpu} onChange={(e) => setGpu(e.target.value)} />
              </Field>

              <Field label="Tính năng" hint="không bắt buộc">
                <div className="flex flex-wrap gap-2">
                  {FEATURES.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFeat(f)}
                      className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                        feats.includes(f) ? "bg-amber-50 border-amber-300 text-amber-700" : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Tình trạng - Ngoại hình" hint="không bắt buộc">
                <Dropdown options={CONDITIONS} placeholder="Vui lòng chọn" value={condition} onChange={setCondition} />
              </Field>

              <Field label="Mô tả thêm" hint="không bắt buộc">
                <textarea rows={3} placeholder="Tình trạng hoạt động, lỗi cụ thể nếu có..." className="form-input !h-auto py-3 resize-none" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Field>

              <Field label="Giá bán mong muốn" hint="không bắt buộc">
                <input type="text" placeholder="Ví dụ: 10 triệu" className="form-input" value={desiredPrice} onChange={(e) => setDesiredPrice(e.target.value)} />
              </Field>

              <div className="pt-2 flex justify-end">
                <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-3 rounded-full active:scale-95 transition-all">
                  Tiếp theo <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Field label="Họ và tên" required>
                <input type="text" required placeholder="Nguyễn Văn A" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label="Số điện thoại" required>
                <input type="tel" required placeholder="0965 476 598" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Field>
              <Field label="Email" hint="không bắt buộc">
                <input type="email" placeholder="email@example.com" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label="Địa chỉ" hint="để hỗ trợ thu tận nơi">
                <input type="text" placeholder="Quận / Huyện, TP.HCM" className="form-input" value={address} onChange={(e) => setAddress(e.target.value)} />
              </Field>
              <Field label="Ghi chú" hint="không bắt buộc">
                <textarea rows={3} placeholder="Thời gian thuận tiện liên hệ..." className="form-input !h-auto py-3 resize-none" value={note} onChange={(e) => setNote(e.target.value)} />
              </Field>

              <div className="pt-2 flex items-center justify-between">
                <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-700">
                  <ArrowLeftIcon className="w-4 h-4" /> Quay lại
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-3 rounded-full active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-4 h-4" /> Gửi yêu cầu báo giá
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
