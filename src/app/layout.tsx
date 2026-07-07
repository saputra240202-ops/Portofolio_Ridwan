import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridwan Saputra | Web Developer & AI Enthusiast",
  description:
    "Passionate developer turning ideas into beautiful digital experiences. Specializing in modern web apps, AI-assisted development, and IT support. Based in Jakarta, Indonesia.",
  keywords: [
    "Ridwan Saputra",
    "Web Developer",
    "Frontend Developer",
    "AI Developer",
    "Laravel",
    "React",
    "Next.js",
    "Jakarta",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Ridwan Saputra" }],
  creator: "Ridwan Saputra",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ridwan Saputra | Full-Stack Developer & AI Enthusiast",
    description:
      "Passionate developer turning ideas into beautiful digital experiences using AI tools to code faster and smarter.",
    siteName: "Ridwan.Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridwan Saputra | Full-Stack Developer",
    description:
      "Passionate developer turning ideas into beautiful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ridwan Saputra",
              url: "https://ridwan.dev",
              jobTitle: "Full-Stack Developer",
              worksFor: { "@type": "Organization", name: "Freelance" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
              sameAs: [
                "https://github.com/saputra240202-ops",
                "https://www.linkedin.com/in/ridwan-saputra-8a7a3a2a7",
                "https://www.instagram.com/_rdwnnn.24_/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
