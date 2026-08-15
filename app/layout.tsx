import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Beyond Contrails | Flight Simulation & Aviation",
  description:
    "Beyond Contrails — a flight simulation and aviation platform exploring virtual skies, cinematic flights, flight reports and the world beyond the contrails.",

  openGraph: {
    title: "Beyond Contrails | Flight Simulation & Aviation",
    description:
      "Beyond Contrails — a flight simulation and aviation platform exploring virtual skies, cinematic flights, flight reports and the world beyond the contrails.",
    url: "https://beyondcontrails.com",
    siteName: "Beyond Contrails",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beyond Contrails — Flight Simulation & Aviation",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beyond Contrails | Flight Simulation & Aviation",
    description:
      "Flight simulation, aviation, cinematic flights, flight reports and more.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}