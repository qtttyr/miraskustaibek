"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/** Konami code easter egg + live local clock in the target timezone. */
export default function Extras({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string | null>(null);
  const [egg, setEgg] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [timezone]);

  useEffect(() => {
    let pos = 0;
    const key = (e: KeyboardEvent) => {
      pos = e.key === KONAMI[pos] ? pos + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (pos === KONAMI.length) {
        setEgg(true);
        pos = 0;
        setTimeout(() => setEgg(false), 4000);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  return (
    <>
      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase">
        <span className="inline-block size-1.5 animate-pulse rounded-full bg-cobalt" />
        <span>{time ? `${time} KZ` : "--:--:-- KZ"}</span>
      </div>

      {egg &&
        createPortal(
          <div className="pointer-events-none fixed inset-0 z-[9997] flex items-center justify-center bg-ink/90 px-6 text-center">
            <p className="text-[clamp(2rem,10vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.05em] text-bone uppercase">
              Mode unlocked<span className="text-cobalt">.</span>
              <br />
              <span className="font-mono text-[clamp(0.6rem,2vw,1rem)] tracking-[0.3em] text-cobalt">
                rich get richer
              </span>
            </p>
          </div>,
          document.body
        )}
    </>
  );
}