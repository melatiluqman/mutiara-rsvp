import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import RsvpSection from "@/components/RsvpSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <RsvpSection />
      <Footer />
    </main>
  );
}
