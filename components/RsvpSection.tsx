import { Bow, HeartDivider, Sparkle, Envelope } from "@/components/decorations";
import RsvpForm from "@/components/RsvpForm";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="relative overflow-hidden py-20 md:py-28">
      <Sparkle className="animate-twinkle absolute left-[12%] top-24 w-4 text-gold" />
      <Sparkle className="animate-twinkle absolute right-[14%] top-40 w-3 text-gold [animation-delay:1.4s]" />
      <Sparkle className="animate-twinkle absolute bottom-24 left-[20%] w-3 text-gold [animation-delay:.6s]" />
      <Envelope className="absolute right-[8%] bottom-16 hidden w-14 -rotate-6 md:block" />

      <div className="mx-auto max-w-lg px-6">
        <div className="text-center">
          <p className="font-script text-3xl text-blossom md:text-4xl">
            Kabari kami ya!
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-[0.25em] text-plum md:text-4xl">
            RSVP
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Mohon konfirmasi kehadiranmu untuk merayakan hari istimewa Mutiara ♡
          </p>
          <HeartDivider className="mt-5" />
        </div>

        <div className="relative mt-12 rounded-[2rem] border border-lilac/70 bg-white/85 p-6 shadow-xl shadow-lilac/30 backdrop-blur-sm sm:p-10">
          <Bow className="absolute -top-8 left-1/2 w-16 -translate-x-1/2" />
          <div className="pt-4">
            <RsvpForm />
          </div>
        </div>
      </div>
    </section>
  );
}
