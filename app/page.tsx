import BusinessCard from "@/components/BusinessCard";
import CopyEmail from "@/components/CopyEmail";
import Counter from "@/components/Counter";
import Cursor from "@/components/Cursor";
import Extras from "@/components/Extras";
import RevealObserver from "@/components/RevealObserver";
import { bio, manifesto, profile, roster, stats, timeline } from "@/data/profile";

const nav = [
  { label: "the card", href: "#card" },
  { label: "about", href: "#about" },
  { label: "the roster", href: "#roster" },
  { label: "the log", href: "#log" },
  { label: "contact", href: "#contact" },
];

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Telegram", href: "https://t.me/" },
  { label: "GitHub", href: profile.github },
  { label: "X", href: profile.x },
  { label: "Instagram", href: profile.instagram },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Cursor />
      <RevealObserver />

      {/* ---------------- NAV ---------------- */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 mix-blend-difference sm:px-10">
        <a
          href="#card"
          className="font-mono text-[11px] tracking-[0.3em] text-bone uppercase"
        >
          MK/17
        </a>
        <ul className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                data-cursor="go"
                className="font-mono text-[11px] tracking-[0.25em] text-bone/80 uppercase transition-colors hover:text-cobalt"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <Extras timezone={profile.timezone} />
      </nav>

      {/* ---------------- HERO / CARD ---------------- */}
      <section
        id="card"
        className="flex min-h-[100svh] flex-col items-center justify-center gap-10 px-5 pt-24 pb-16 sm:px-10"
      >
        <BusinessCard />
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="overflow-hidden border-y border-ink/15 bg-cobalt py-4 text-bone select-none sm:py-5">
        <div className="animate-marquee flex w-max [animation-duration:38s] hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {profile.roles.map((r) => (
                <span
                  key={`${dup}-${r}`}
                  className="flex items-center gap-6 pr-6 text-[clamp(1.2rem,4vw,2.6rem)] font-extrabold tracking-[-0.04em] whitespace-nowrap uppercase"
                >
                  {r}
                  <span className="text-bone/40">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- MANIFESTO ---------------- */}
      <section className="px-5 py-24 sm:px-10 sm:py-36">
        {manifesto.map((line, i) => (
          <h2
            key={line.text}
            data-reveal
            style={{ transitionDelay: `${i * 90}ms` }}
            className={`text-[clamp(1.8rem,8.5vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.05em] uppercase ${
              line.accent ? "text-cobalt" : ""
            } ${i % 2 === 1 ? "text-right" : "text-left"}`}
          >
            {line.text}
          </h2>
        ))}
      </section>
    {/* ---------------- ABOUT ---------------- */}
      <section
        id="about"
        className="border-t border-ink/15 px-5 py-24 sm:px-10 sm:py-36"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p
              data-reveal
              className="mb-8 font-mono text-[11px] tracking-[0.35em] text-cobalt uppercase"
            >
              {bio.eyebrow} — 001
            </p>

            <h2
              data-reveal="mask"
              className="text-[clamp(2rem,7vw,4.6rem)] leading-[0.92] font-extrabold tracking-[-0.05em] uppercase"
            >
              {bio.title}
            </h2>

            <p
              data-reveal
              className="mt-8 max-w-2xl text-[clamp(1.05rem,2.4vw,1.6rem)] leading-[1.35] font-medium tracking-[-0.02em] text-ink"
            >
              {bio.lead}
            </p>

            <p
              data-reveal
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60"
            >
              {bio.body}
            </p>
          </div>

          <dl className="flex flex-col justify-end gap-0 border-t border-ink/15">
            {bio.facts.map((f, i) => (
              <div
                key={f.k}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group border-b border-ink/15 py-5 transition-colors duration-500 hover:border-cobalt sm:py-6"
              >
                <dt className="font-mono text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                  {f.k}
                </dt>
                <dd className="mt-2 text-[clamp(1rem,2.2vw,1.35rem)] leading-tight font-semibold tracking-[-0.025em] text-ink transition-transform duration-500 group-hover:translate-x-1.5 sm:group-hover:translate-x-2">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    {/* ---------------- ROSTER ---------------- */}
      <section
        id="roster"
        className="bg-ink px-5 py-24 text-bone sm:px-10 sm:py-36"
      >
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2
            data-reveal="mask"
            className="text-[clamp(2.2rem,9vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.05em] uppercase"
          >
            The roster
          </h2>
          <p
            data-reveal
            className="max-w-xs font-mono text-[11px] leading-relaxed tracking-tight text-bone/50"
          >
            09 roles. 01 brain. Tap an entry — every version of me is the same
            obsession in a different shirt.
          </p>
        </div>

        <ul className="border-t border-bone/15">
          {roster.map((r, i) => (
            <li
              key={r.id}
              className="group border-b border-bone/15"
            >
              <details className="group/details" data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <summary className="flex list-none items-center gap-4 py-5 sm:gap-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-cobalt">
                    {r.id}
                  </span>
                  <h3 className="flex-1 text-[clamp(1.4rem,5.5vw,3.6rem)] leading-none font-extrabold tracking-[-0.045em] uppercase transition-transform duration-500 ease-out group-hover:translate-x-3">
                    {r.role}
                  </h3>
                  <span className="font-mono text-lg text-cobalt transition-transform duration-500 group-open/details:rotate-45">
                    +
                  </span>
                </summary>
                <div className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3 sm:gap-10">
                  <p className="text-base leading-relaxed text-bone/70 sm:col-span-2 sm:text-lg">
                    {r.detail}
                  </p>
                  <ul className="flex flex-wrap gap-2 sm:justify-end">
                    {r.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-bone/25 px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="grid grid-cols-1 border-b border-ink/15 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
            className="flex flex-col items-center justify-center gap-2 border-ink/15 px-6 py-16 sm:border-r sm:py-24 last:sm:border-r-0"
          >
            <p className="text-[clamp(3.5rem,14vw,9rem)] leading-none font-extrabold tracking-[-0.06em] text-cobalt">
              <Counter value={s.value} />
              {s.suffix}
            </p>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase">{s.label}</p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-ink/40 lowercase">
              {s.note}
            </p>
          </div>
        ))}
      </section>
    {/* ---------------- TIMELINE ---------------- */}
      <section id="log" className="px-5 py-24 sm:px-10 sm:py-36">
        <h2
          data-reveal="mask"
          className="mb-14 text-[clamp(2.2rem,9vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.05em] uppercase"
        >
          The log
        </h2>
        <ol className="border-t border-ink/15">
          {timeline.map((t, i) => (
            <li
              key={t.year}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
              className="group grid grid-cols-1 gap-2 border-b border-ink/15 py-7 transition-colors duration-500 hover:bg-ink hover:text-bone sm:grid-cols-[7rem_1fr_1.4fr] sm:gap-8 sm:px-4"
            >
              <span className="font-mono text-[11px] tracking-[0.25em] text-cobalt">
                {t.year}
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">{t.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60 group-hover:text-bone/70 sm:text-base">
                {t.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="flex flex-col items-center gap-14 bg-cobalt px-5 py-28 text-bone sm:px-10 sm:py-40"
      >
        <p data-reveal className="font-mono text-[11px] tracking-[0.35em] uppercase">
          open to work · cofounder · anything interesting
        </p>
        <h2
          data-reveal="mask"
          className="max-w-5xl text-center text-[clamp(2.2rem,10vw,7.5rem)] leading-[0.88] font-extrabold tracking-[-0.055em] uppercase"
        >
          Let’s build something
        </h2>

        <div
          data-reveal
          className="[&_a]:text-bone [&_button]:border-bone/40 [&_button]:text-bone [&_button:hover]:bg-bone [&_button:hover]:text-cobalt"
        >
          <CopyEmail email={profile.email} />
        </div>

        <ul data-reveal className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="link-underline font-mono text-[11px] tracking-[0.25em] uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase">
          Konami ↑↑↓↓←→←→ba unlocks something
        </p>
      </footer>
    </main>
  );
}