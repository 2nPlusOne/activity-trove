import "./globals.scss";
import "../inter-font/inter.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Activity Center",
  description: "Warmups and icebreakers for your next meeting or event.",
  icons: ["./noto-dragon.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-950`}
      >
        <Navbar />
        <main className="flex flex-col grow items-center p-2 md:p-4 lg:p-6 xl:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
