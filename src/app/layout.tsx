import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Geist,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AuroraBackground } from "@/components/aurora-bg";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahindradanane.dev"),
  title: {
    default: "Mahindra Danane — Frontend Engineer",
    template: "%s — Mahindra Danane",
  },
  description:
    "Frontend Engineer building real-time, multi-role React.js and React Native applications. WebRTC, Phoenix Channels, Redux Saga, LiveKit.",
  keywords: [
    "Frontend Engineer",
    "React",
    "React Native",
    "TypeScript",
    "WebRTC",
    "LiveKit",
    "Phoenix Channels",
    "Redux",
    "Next.js",
    "Pune",
    "India",
  ],
  authors: [{ name: "Mahindra Danane" }],
  openGraph: {
    title: "Mahindra Danane — Frontend Engineer",
    description:
      "Frontend Engineer building real-time, multi-role React.js and React Native applications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahindra Danane — Frontend Engineer",
    description:
      "Frontend Engineer building real-time, multi-role React.js and React Native applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <AuroraBackground />
        <div className="relative z-20">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
