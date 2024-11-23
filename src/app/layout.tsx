import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/providers/themeProvider";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Julio Castaño - Software Developer",
  description:
    "Julio Castaño's personal site showcasing his journey and experience as a software developer, specializing in C# and JavaScript.",
  icons: [{ rel: "icon", url: "/Logo.svg" }],
  authors: { name: "Julio Castaño" },
  keywords:
    "Julio Castaño, software developer, C#, JavaScript, coding, developer portfolio",
  openGraph: {
    title: "Julio Castaño - Software Developer and Technology Enthusiast",
    description:
      "Julio Castaño's personal site showcasing his journey and experience as a software developer.",
    image: "/Logo.svg",
    url: "https://me.jcodea.com/",
    type: "website",
  },
  twitter: {
    title: "Julio Castaño - Software Developer and Technology Enthusiast",
    description:
      "Julio Castaño's personal site showcasing his journey and experience as a software developer.",
    image: "/Logo.svg",
    site: "https://me.jcodea.com/",
  },
  alternates: { canonical: "https://me.jcodea.com/" },
} as Metadata;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} scroll-smooth`}>
      <SpeedInsights />
      <Analytics />
      <body
        className={cn(
          "bg-gradient bg-background-gradient min-h-screen font-sans leading-relaxed antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
