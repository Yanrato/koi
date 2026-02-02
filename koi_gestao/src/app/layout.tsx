import "./globals.css";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koi",
  description: "Task management system for small and medium-sized businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
