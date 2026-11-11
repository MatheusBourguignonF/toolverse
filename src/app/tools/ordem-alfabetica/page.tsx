import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import AlphabeticalOrderClient from "./AlphabeticalOrderClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordenar Texto em Ordem Alfabética | ToolVerse",
  description:
    "Organize listas e textos em ordem alfabética de maneira rápida e gratuita.",
  keywords: [
    "ferramenta",
    "online",
    "utilitário",
    "ordenar texto em ordem alfabética",
    "ordem alfabética",
    "organizar lista em ordem alfabética",
    "ordenar palavras",
    "ordenar lista",
    "ferramenta de ordenação de texto",
  ],
  openGraph: {
    title: "Ordenar Texto em Ordem Alfabética | ToolVerse",
    description:
      "Organize listas e textos em ordem alfabética de maneira rápida e gratuita.",
    type: "website",
    url: "https://toolverse-phi.vercel.app/tools/ordem-alfabetica",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ordenar Texto em Ordem Alfabética | ToolVerse",
    description:
      "Organize listas e textos em ordem alfabética de maneira rápida e gratuita.",
    images: "/image/homepage.png",
  },

  alternates: {
    canonical: "https://toolverse-phi.vercel.app/tools/ordem-alfabetica",
  },
};

export default function AlphabeticalOrder() {
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools" />

      <main className="flex-1 sm:p-10 flex flex-col gap-12">
        <AlphabeticalOrderClient />
      </main>

      <Footer />
    </div>
  );
}
