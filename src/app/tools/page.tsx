import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Metadata } from "next";
import ToolsClient from "./toolsClient";

export const metadata: Metadata = {
  title: "Ferramentas Online Gratuitas | ToolVerse",
  description:
    "Encontre ferramentas online gratuitas para contar caracteres, organizar textos, converter letras e muito mais, sem precisar instalar nada.",
  keywords: [
    "ferramentas online",
    "ferramentas gratuitas",
    "utilitários online",
    "ferramentas de texto",
    "contador de caracteres",
    "ordenar texto",
    "conversor de maiúsculas e minúsculas",
  ],
  openGraph: {
    title: "Ferramentas Online Gratuitas | ToolVerse",
    description:
      "Encontre ferramentas online gratuitas para contar caracteres, organizar textos, converter letras e muito mais, sem precisar instalar nada.",
    type: "website",
    url: "https://toolverse-phi.vercel.app/tools",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ferramentas Online Gratuitas | ToolVerse",
    description:
      "Encontre ferramentas online gratuitas para contar caracteres, organizar textos, converter letras e muito mais, sem precisar instalar nada.",
    images: "/image/homepage.png",
  },

  alternates: {
    canonical: "https://toolverse-phi.vercel.app/tools",
  },
};

export default function Tools() {
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools" />

      <main className="flex-1  flex flex-col gap-10">
        <ToolsClient></ToolsClient>
      </main>

      <Footer />
    </div>
  );
}
