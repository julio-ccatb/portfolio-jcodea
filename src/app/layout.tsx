import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/providers/themeProvider";

export const metadata = {
  title: "Julio Castaño",
  description: "Personal portfolio",
  icons: [{ rel: "icon", url: "/Logo.svg" }],
};

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
