import {
  Bow,
  PaperPlane,
  PlaneTrail,
  Sparkle,
  Heart,
  Envelope,
  WashiTape,
  Stamp,
  HeartDivider,
} from "@/components/decorations";
import { CornerGarden } from "@/components/garden";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Ornamen melayang di area atas */}
      <Bow className="animate-floaty absolute left-6 top-10 w-14 [--floaty-rotate:-12deg] md:left-20 md:top-14 md:w-20" />
      <PaperPlane className="animate-floaty absolute right-8 top-12 w-12 [--floaty-rotate:6deg] [animation-delay:1.2s] md:right-24 md:top-16 md:w-16" />
      <PlaneTrail className="absolute right-20 top-24 hidden w-24 opacity-70 md:block" />
      <Stamp className="absolute left-16 top-44 hidden w-12 -rotate-6 md:block lg:left-32" />
      <WashiTape className="absolute right-10 top-52 hidden w-28 rotate-12 md:block lg:right-36" />
      <Envelope className="absolute left-8 top-[62%] hidden w-14 rotate-6 lg:block" />

      {/* Taburan sparkle & hati */}
      <Sparkle className="animate-twinkle absolute left-[16%] top-[24%] w-4 text-gold" />
      <Sparkle className="animate-twinkle absolute right-[22%] top-[18%] w-3 text-gold [animation-delay:.8s]" />
      <Sparkle className="animate-twinkle absolute left-[38%] top-[12%] w-3 text-gold [animation-delay:1.6s]" />
      <Sparkle className="animate-twinkle absolute right-[12%] top-[42%] w-5 text-gold [animation-delay:.4s]" />
      <Sparkle className="animate-twinkle absolute left-[10%] top-[48%] w-3 text-gold [animation-delay:2.2s]" />
      <Heart className="absolute right-[30%] top-[30%] w-3 text-blossom/50" />
      <Heart className="absolute left-[26%] top-[38%] w-2.5 text-lilac/70" />

      {/* Konten utama */}
      <div className="relative z-10 max-w-2xl">
        <p className="font-body italic tracking-wide text-plum/80 md:text-lg">
          You are invited to
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase tracking-[0.3em] text-plum md:text-7xl md:tracking-[0.35em]">
          Mutiara
        </h1>
        <p className="mt-3 font-script text-4xl text-blossom md:text-5xl">
          Sweet Seventeen
        </p>
        <HeartDivider className="mt-6" />

        <div className="mt-8 flex items-center justify-center gap-4 font-display text-ink md:gap-6">
          <span className="text-xl md:text-2xl">Friday</span>
          <span className="h-10 w-px bg-lilac md:h-12" />
          <span className="text-4xl font-semibold md:text-5xl">
            24
            <sup className="text-lg md:text-xl">th</sup>
          </span>
          <span className="h-10 w-px bg-lilac md:h-12" />
          <span className="text-xl md:text-2xl">6 PM</span>
        </div>
        <p className="mt-4 font-body text-sm font-medium tracking-wide text-ink md:text-base">
          at Swiss Bellin Cawang
        </p>

        <a
          href="#rsvp"
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-plum px-10 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-plum/30 outline-plum transition hover:bg-plum-deep hover:shadow-xl hover:shadow-plum/30 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          RSVP
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1"
          >
            <path d="M3 11.5 21 3l-8.5 18-2.4-7.1L3 11.5Z" />
          </svg>
        </a>
      </div>

      {/* Taman bunga di sudut bawah */}
      <CornerGarden className="pointer-events-none absolute -left-6 bottom-0 w-[75vw] max-w-[420px] sm:left-0 sm:w-[52vw]" />
      <CornerGarden
        flip
        className="pointer-events-none absolute -right-6 bottom-0 hidden w-[52vw] max-w-[420px] sm:block"
      />
    </section>
  );
}
