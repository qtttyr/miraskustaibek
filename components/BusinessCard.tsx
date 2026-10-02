"use client";

import { useRef, useState } from "react";
import { profile } from "@/data/profile";

const contacts = [
  { k: "email", v: profile.email, href: `mailto:${profile.email}` },
  { k: "telegram", v: profile.telegram, href: `https://t.me/mmespiderman` },
  { k: "github", v: profile.github.replace("https://", ""), href: profile.github },
];

/**
 * The business card. 3D tilt follows the pointer on desktop,
 * tap-to-flip on touch devices. Fully keyboard/click accessible.
 */
export default function BusinessCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setRy(px * 14);
    setRx(-py * 10);
  };

  const reset = () => {
    setRx(0);
    setRy(0);
  };

  return (
    <div className="perspective-[1600px] w-full max-w-[46rem]">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={() => setFlipped((f) => !f)}
        data-cursor="flip"
        role="button"
        tabIndex={0}
        aria-label="Flip business card"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        className="relative aspect-[1.6/1] w-full select-none [transform-style:preserve-3d] [transition:transform_0.9s_cubic-bezier(0.16,1,0.3,1)] md:[transition:transform_0.12s_linear]"
        style={{ transform: `rotateX(${rx}deg) rotateY(${ry + (flipped ? 180 : 0)}deg)` }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col bg-bone px-5 pt-5 pb-[9%] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:translateZ(0)] sm:px-10 sm:pt-8 sm:pb-[8%]">
          <h1 className="mt-[6%] text-center text-[clamp(1.6rem,7.2vw,4.4rem)] leading-[0.92] font-extrabold tracking-[-0.045em] text-cobalt uppercase">
            {profile.headline}
          </h1>

          <div className="mt-auto text-center">
            <p className="text-[clamp(1rem,4.4vw,2.1rem)] leading-tight font-medium tracking-[-0.03em] text-cobalt lowercase">
              {profile.first} {profile.last}
            </p>

            <div className="mt-3 space-y-0.5 font-mono text-[clamp(0.5rem,1.85vw,0.95rem)] leading-[1.45] tracking-[-0.01em] text-cobalt sm:space-y-1">
              <p className="lowercase">
                <span className="font-bold">miras.</span> developer · startup manager
                · entrepreneur
              </p>
              <p className="lowercase">
                {profile.university.toLowerCase()}
              </p>
              <p className="lowercase">
                astana, kz — utc+5 — available 24/7 for a deal
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[2.6%] bg-cobalt" />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col justify-between bg-ink px-5 pt-5 pb-[9%] text-bone [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-10 sm:pt-8 sm:pb-[8%]">
          <div className="flex items-start justify-between font-mono text-[clamp(0.5rem,1.6vw,0.75rem)] tracking-[0.2em] uppercase opacity-70">
            <span>Card № 001</span>
            <span>Est. 2009</span>
          </div>

          <div>
            <p className="text-[clamp(1.4rem,6vw,3.4rem)] leading-[0.95] font-extrabold tracking-[-0.045em] uppercase">
              Let’s build
              <br />
              something<span className="text-cobalt">.</span>
            </p>
            <p className="mt-3 max-w-md font-mono text-[clamp(0.55rem,1.7vw,0.8rem)] tracking-tight opacity-60">
              Nine roles. One mind. Zero boring ideas.
            </p>
          </div>

          <ul className="space-y-0.5 font-mono text-[clamp(0.55rem,1.8vw,0.85rem)] tracking-tight">
            {contacts.map((c) => (
              <li key={c.k}>
                <span className="opacity-50">{c.k}: </span>
                <a
                  href={c.href}
                  onClick={(e) => e.stopPropagation()}
                  className="link-underline text-cobalt"
                >
                  {c.v}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="/miras.vcf"
              download
              onClick={(e) => e.stopPropagation()}
              data-cursor="save"
              className="rounded-full border border-bone/40 px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-bone hover:text-ink"
            >
              Save contact
            </a>
            <span className="font-mono text-[10px] tracking-[0.2em] text-bone/50 uppercase">
              vcard
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[2.6%] bg-cobalt" />
        </div>
      </div>

      <p className="mt-5 text-center font-mono text-[10px] tracking-[0.25em] text-ink/45 uppercase">
        tap / hover to flip
      </p>
    </div>
  );
}