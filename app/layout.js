import { Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wrack - Software Engineer",
  description: "Portfolio of Himanshu Lal - Mobile App Developer & Web Developer",
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0b1729',
  metadataBase: new URL("https://www.wrack.dev"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ParticleBackground /> */}
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
