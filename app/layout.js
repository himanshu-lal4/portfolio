import { Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wrack",
  description: "Portfolio of wrack aka Himanshu Lal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ParticleBackground /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
