import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexClientProvider from "@/components/providers/convex-provider";
import { ClerkProvider } from "@clerk/nextjs";
import {Toaster} from "sonner";
import { ModelProvider } from "@/components/providers/model-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
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
        url: "/favicon.ico",
        href:"/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.ico",
        href:"/favicon-dark.ico",
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
      <ClerkProvider afterSignOutUrl="/">
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange storageKey="notely-theme-2">
        <Toaster position="bottom-center"/>
        <ModelProvider/>
        {children}
        </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider></ClerkProvider>
      </body>
    </html>
  );
}
