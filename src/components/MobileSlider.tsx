"use client";

import { useState, useRef, useCallback } from "react";

interface MobileSliderProps {
  children: React.ReactNode[];
  className?: string;
}

export default function MobileSlider({ children, className = "" }: MobileSliderProps) {
  const count = children.length;
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const goTo = useCallback(
    (i: number) => setActive(Math.max(0, Math.min(count - 1, i))),
    [count],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    setDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - startX.current;
    deltaX.current = dx;
    setOffset(dx);
  };

  const onTouchEnd = () => {
    setDragging(false);
    setOffset(0);
    if (deltaX.current < -40) goTo(active + 1);
    else if (deltaX.current > 40) goTo(active - 1);
  };

  return (
    <div className={`sm:hidden ${className}`}>
      <div
        className="overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${active * 100}% + ${dragging ? offset : 0}px))`,
            transition: dragging ? "none" : "transform 0.3s ease-out",
          }}
        >
          {children.map((child, i) => (
            <div key={i} className="shrink-0 w-full px-1">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
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
