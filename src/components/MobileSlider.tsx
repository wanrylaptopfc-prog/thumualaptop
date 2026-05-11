"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface MobileSliderProps {
  children: React.ReactNode[];
  className?: string;
}

export default function MobileSlider({ children, className = "" }: MobileSliderProps) {
  const count = children.length;
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const deltaX = useRef(0);
  const locked = useRef<"h" | "v" | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback(
    (i: number) => {
      // Infinite loop: wrap around
      let next = i;
      if (next < 0) next = count - 1;
      if (next >= count) next = 0;
      activeRef.current = next;
      setActive(next);
    },
    [count],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
      deltaX.current = 0;
      locked.current = null;
      isDragging.current = true;
      if (trackRef.current) trackRef.current.style.transition = "none";
    };

    const onMove = (e: TouchEvent) => {
      if (!isDragging.current) return;

      const dx = e.touches[0].clientX - startX.current;
      const dy = e.touches[0].clientY - startY.current;

      if (locked.current === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        locked.current = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
      }

      if (locked.current === "v") return;

      if (locked.current === "h") {
        e.preventDefault();
        deltaX.current = dx;
        if (trackRef.current) {
          const base = -(activeRef.current * 100);
          trackRef.current.style.transform = `translateX(calc(${base}% + ${dx}px))`;
        }
      }
    };

    const onEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      if (trackRef.current) trackRef.current.style.transition = "transform 0.3s ease-out";

      if (locked.current === "h") {
        if (deltaX.current < -40) {
          goTo(activeRef.current + 1);
        } else if (deltaX.current > 40) {
          goTo(activeRef.current - 1);
        } else {
          // Snap back
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${activeRef.current * 100}%)`;
          }
        }
      }

      locked.current = null;
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, [goTo]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.3s ease-out";
      trackRef.current.style.transform = `translateX(-${active * 100}%)`;
    }
  }, [active]);

  return (
    <div className={`sm:hidden ${className}`}>
      <div ref={containerRef} className="overflow-hidden">
        <div ref={trackRef} className="flex" style={{ transform: "translateX(0%)" }}>
          {children.map((child, i) => (
            <div key={i} className="shrink-0 w-full px-1">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === active ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-200"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
