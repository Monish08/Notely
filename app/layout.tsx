import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notely",
  description: "Notely helps you organize your notes, tasks, and ideas in a powerful Notion-style workspace built for productivity.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notely-logo.svg",
        href:"/notely-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notely-logo-dark.svg",
        href:"/notely-logo-dark.svg",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange storageKey="notely-theme-2">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
