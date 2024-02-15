import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CvProvider } from "./context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create your cv",
  description: "Ease cv creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CvProvider>{children}</CvProvider>
      </body>
    </html>
  );
}
