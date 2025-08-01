import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Lao } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const notoLao = Noto_Sans_Lao({
  weight:'400',
  subsets:['lao','latin']
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning >
        <body
          className={`${notoLao.className}  antialiased`}
        >
          <Providers>
            <Navbar />
            <main className="container">
              {children}
            </main>
          </Providers>

        </body>
      </html>
    </ClerkProvider>

  );
}
