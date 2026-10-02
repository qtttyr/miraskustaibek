"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("done");
    } catch {
      setState("fail");
    }
    setTimeout(() => setState("idle"), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={`mailto:${email}`}
        data-cursor="write"
        className="link-underline text-center font-mono text-[clamp(0.85rem,3.2vw,1.6rem)] tracking-tight break-all"
      >
        {email}
      </a>
      <button
        onClick={copy}
        data-cursor="copy"
        className="rounded-full border border-ink/25 px-6 py-3 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:bg-ink hover:text-bone"
      >
        {state === "done"
          ? "Copied ✓"
          : state === "fail"
            ? "Press ⌘C"
            : "Copy email"}
      </button>
    </div>
  );
}