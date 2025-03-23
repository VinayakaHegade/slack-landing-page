import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avantGarde = localFont({
  src: "../public/fonts/avant-garde.woff2",
  variable: "--font-avant-garde",
});

const sansRegular = localFont({
  src: "../public/fonts/sans-regular.woff2",
  variable: "--font-sans-regular",
});

export const metadata: Metadata = {
  title: "Slack: Where the Future Works",
  description:
    "Slack is your digital HQ. Transform the way you work with one place for everyone and everything you need to get stuff done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg">
      <body
        className={`${avantGarde.variable} ${sansRegular.variable} antialiased min-h-dvh max-w-[81.25rem] mx-auto bg-[#f6efe8]`}
      >
        {children}
      </body>
    </html>
  );
}
