import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import CharacterCounterClient from "./CharacterCounterClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contador de Caracteres e Espaços | ToolVerse",
  description:
    "Conte caracteres e espaços de um texto de maneira rápida e gratuita.",
  keywords: [
    "ferramenta",
    "online",
    "utilitário",
    "contador de caracteres",
    "contador de espacos",
    "contador de letras",
    "contador de numeros",
    "contador de linhas",
  ],
  openGraph: {
    title: "Contador de Caracteres e Espaços | ToolVerse",
    description:
      "Conte caracteres e espaços de um texto de maneira rápida e gratuita.",
    type: "website",
    url: "https://toolverse-phi.vercel.app/tools/contador-de-caracteres",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contador de Caracteres e Espaços | ToolVerse",
    description:
      "Conte caracteres e espaços de um texto de maneira rápida e gratuita.",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  alternates: {
    canonical: "https://toolverse-phi.vercel.app/tools/contador-de-caracteres",
  },
};

export default function Tools() {
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools" />

      <main className="flex-1 sm:p-10 flex flex-col gap-10">
        <CharacterCounterClient />
      </main>

      <Footer />
    </div>
  );
}
