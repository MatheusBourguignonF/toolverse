import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import ConvertUppercaseLowercaseClient from "./ConvertUppercaseLowercaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversor de Maiúsculas e Minúsculas | ToolVerse",
  description:
    "Converta o texto para letras maiúsculas ou minúsculas de maneira rápida e gratuita.",
  keywords: [
    "ferramenta",
    "online",
    "utilitário",
    "conversor de maiúsculas e minúsculas",
    "converter texto para maiúsculas",
    "converter texto para minúsculas",
    "alterar letras do texto",
    "primeira letra maiúscula",
  ],
  openGraph: {
    title: "Conversor de Maiúsculas e Minúsculas | ToolVerse",
    description:
      "Converta o texto para letras maiúsculas ou minúsculas de maneira rápida e gratuita.",
    type: "website",
    url: "https://toolverse-phi.vercel.app/tools/converter-maiuscula-minuscula",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conversor de Maiúsculas e Minúsculas | ToolVerse",
    description:
      "Converta o texto para letras maiúsculas ou minúsculas de maneira rápida e gratuita.",
    images: [
      {
        url: "/image/homepage.png",
      },
    ],
  },

  alternates: {
    canonical:
      "https://toolverse-phi.vercel.app/tools/converter-maiuscula-minuscula",
  },
};

export default function Tools() {
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools" />

      <main className="flex-1 sm:p-10 flex flex-col gap-12">
        <ConvertUppercaseLowercaseClient />
      </main>

      <Footer />
    </div>
  );
}
