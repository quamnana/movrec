import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MovRec",
  description: "AI Powered Movie Recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-purple-700/60 to-blue-500/90 max-w-7xl mx-auto">
        <main className="bg-slate-50/50 shadow-2xl drop-shadow-2xl">
          <Header />

          {children}
        </main>
      </body>
    </html>
  );
}
