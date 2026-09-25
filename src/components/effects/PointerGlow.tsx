"use client";

import { useEffect, useRef } from "react";

export function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const update = (event: PointerEvent) => {
      glowRef.current?.style.setProperty("transform", `translate3d(${event.clientX - 240}px, ${event.clientY - 240}px, 0)`);
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div ref={glowRef} className="pointer-glow" aria-hidden="true" />;
}
