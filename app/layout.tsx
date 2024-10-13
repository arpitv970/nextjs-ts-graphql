import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { GlobalProviders } from "@/components/shared/global-providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Learning GraphQL",
  description: "This is soley for exploring GraphQL, using GraphQL-Yoga, Apollo Client && Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalProviders>
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </GlobalProviders>
      </body>
    </html>
  );
}
