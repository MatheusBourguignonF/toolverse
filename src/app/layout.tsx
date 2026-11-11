import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ToolVerse | Ferramentas Online Gratuitas",
    template: "%s | ToolVerse",
  },

  description:
    "Utilitários online gratuitos, rápidos e fáceis de usar. Simplifique suas tarefas sem precisar instalar nada.",

  openGraph: {
    siteName: "ToolVerse",
    title: "ToolVerse | Ferramentas Online Gratuitas",
    description:
      "Utilitários online gratuitos, rápidos e fáceis de usar. Simplifique suas tarefas sem precisar instalar nada.",
    type: "website",
    url: "https://toolverse-phi.vercel.app/",
    images: ["/image/homepage.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolVerse | Ferramentas Online Gratuitas",
    description:
      "Utilitários online gratuitos, rápidos e fáceis de usar. Simplifique suas tarefas sem precisar instalar nada.",
    images: ["/image/homepage.png"],
  },

  alternates: {
    canonical: "https://toolverse-phi.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
