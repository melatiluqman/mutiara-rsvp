import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mutiara's Sweet Seventeen — RSVP",
  description:
    "You are invited to Mutiara's Sweet 17th Birthday Party — Friday 24th, 6 PM at Swiss Bellin Cawang. Konfirmasi kehadiranmu di sini.",
};

export const viewport: Viewport = {
  themeColor: "#8e6fbf",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${greatVibes.variable} ${poppins.variable}`}
    >
      <body className="bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  );
}
