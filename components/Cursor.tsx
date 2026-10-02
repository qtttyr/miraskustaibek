"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const FINE = "(hover: hover) and (pointer: fine)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(FINE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

const getFine = () => window.matchMedia(FINE).matches;

/** Custom cursor: dot + expanding ring, reacts to data-cursor labels. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const enabled = useSyncExternalStore(subscribe, getFine, () => false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(t?.dataset.cursor ?? "");
    };
    const down = () => ring.current?.classList.add("scale-50");
    const up = () => ring.current?.classList.remove("scale-50");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden md:block">
      <div
        ref={ring}
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-ink/60 transition-[width,height,background-color,color] duration-300 ease-out will-change-transform"
        style={{
          width: label ? 84 : 30,
          height: label ? 84 : 30,
          backgroundColor: label ? "#0b0b0c" : "transparent",
        }}
      >
        <span
          className="font-mono text-[9px] tracking-[0.12em] whitespace-nowrap uppercase transition-opacity duration-200"
          style={{ color: "#ece9e2", opacity: label ? 1 : 0 }}
        >
          {label}
        </span>
      </div>
      <div
        ref={dot}
        className="absolute top-0 left-0 size-1.5 rounded-full bg-cobalt will-change-transform"
      />
    </div>
  );
}