import type { Metadata } from "next";
import { Syne, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LocomotiveScrollProvider from "@/app/[locale]/components/scripts/locomotive-scroll";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const syne = Syne({
  variable: "--font-syne-sans",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dheysson Souza | Designer & Developer",
  description:
    "Empowering brands to succeed in the digital landscape. Based in Belgium, I specialize in custom digital design and the development of fully interactive websites from scratch. © Code by Dheysson",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(
        "antialiased",
        syne.variable,
        inter.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="bg-bg-primary font-inter">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothCursor />
          <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
