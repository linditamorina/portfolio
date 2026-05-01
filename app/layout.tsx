import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindita Morina | Portfolio",
  description: "Software Engineer Portfolio",
  icons: {
    icon: [
      {
        url: "/logo-portfolio.png", // Ky përdoret si fallback
        href: "/logo-portfolio.png",
      },
      {
        url: "/logo-portfolio.png", // Mund të shtosh versionin e prerë këtu
        sizes: "40x40",
        type: "image/png",
      },
    ],
    shortcut: ["/logo-portfolio.png"],
    apple: [
      {
        url: "/logo-portfolio.png",
        sizes: "180x180",
        type: "image/png",
      },
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
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}