import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Interface Innovations LLC",
  description: "Apps by Interface Innovations LLC",
  metadataBase: new URL("https://interfaceinnovations.llc"),
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

