import { HeartDivider, Sparkle, Bow } from "@/components/decorations";

const PASTEL_DOTS = ["#efe9f8", "#fbdfea", "#dcebfb", "#fdeed7", "#e7f0dd"];
const BOYS_DOTS = ["#c9a988", "#ffffff", "#bdbdbd"];

function DetailCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-lilac/60 bg-white/80 p-6 shadow-sm shadow-lilac/20">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lilac-soft text-plum">
        {icon}
      </div>
      <h3 className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
        {title}
      </h3>
      <div className="mt-2 font-display text-2xl text-ink">{children}</div>
    </div>
  );
}

export default function EventDetails() {
  return (
    <section id="detail" className="relative overflow-hidden bg-mist/60 py-20 md:py-28">
      <Sparkle className="animate-twinkle absolute left-[8%] top-16 w-4 text-gold" />
      <Sparkle className="animate-twinkle absolute right-[10%] bottom-20 w-3 text-gold [animation-delay:1s]" />
      <Bow className="absolute -right-4 top-10 w-16 rotate-12 opacity-60 md:right-12" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-3xl text-plum md:text-4xl">Save the Date</p>
        <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.25em] text-ink md:text-3xl">
          Detail Acara
        </h2>
        <HeartDivider className="mt-5" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <DetailCard
            title="Hari &amp; Tanggal"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="3" />
                <path d="M8 3v4M16 3v4M3 10h18" />
              </svg>
            }
          >
            Friday, 24<sup className="text-sm">th</sup> July 2026
          </DetailCard>
          <DetailCard
            title="Waktu"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            }
          >
            6 PM
          </DetailCard>
          <DetailCard
            title="Lokasi"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            }
          >
            Swiss Bellin Cawang
          </DetailCard>
        </div>

        <div className="mt-8 rounded-3xl border border-lilac/60 bg-white/80 p-8 shadow-sm shadow-lilac/20">
          <h3 className="font-display text-xl font-semibold uppercase tracking-[0.25em] text-plum">
            Dress Code
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-blossom-soft/50 p-6">
              <p className="font-script text-2xl text-blossom">Girls</p>
              <p className="mt-2 text-sm font-medium text-ink">Pastel Colours</p>
              <p className="mt-1 text-xs text-ink-soft">
                Dress atau rok lebih disukai
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {PASTEL_DOTS.map((c) => (
                  <span
                    key={c}
                    className="h-5 w-5 rounded-full border border-ink/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-lilac-soft/60 p-6">
              <p className="font-script text-2xl text-plum">Boys</p>
              <p className="mt-2 text-sm font-medium text-ink">
                Light Brown · White · Grey
              </p>
              <p className="mt-1 text-xs text-ink-soft">Kemeja rapi &amp; sopan</p>
              <div className="mt-4 flex justify-center gap-2">
                {BOYS_DOTS.map((c) => (
                  <span
                    key={c}
                    className="h-5 w-5 rounded-full border border-ink/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
