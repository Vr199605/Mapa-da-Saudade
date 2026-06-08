import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Mapa da Saudade ❤️",
  description: "Entre João Pessoa e Rio de Janeiro existem milhares de quilômetros. Mas nenhum deles é capaz de medir o que sinto por você.",
  openGraph: {
    title: "O Mapa da Saudade ❤️",
    description: "Um presente digital de amor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "'Jost', sans-serif" }}>{children}</body>
    </html>
  );
}
