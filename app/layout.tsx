import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WILDVERSE — Explore Every Life",
  description: "A growing home for the curious, dedicated to discovering and understanding animal life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
