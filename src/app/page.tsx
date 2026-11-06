"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Quality } from "@/components/ui/Quality";
import { ToolCard } from "@/components/ui/ToolCard";
import gsap from "gsap";
import {
  ArrowRight,
  Crop,
  Gift,
  Monitor,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".image", {
        y: 0,
        opacity: 100,
      });

      SplitText.create(".title", {
        type: "lines, words, chars",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: "start",
            },
          });
        },
      });

      SplitText.create(".paragraph", {
        type: "lines, words, chars",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: "start",
            },
          });
        },
      });

      gsap.utils.toArray<HTMLElement>(".tool-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "elastic.in",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="home" />

      <main className="flex flex-col gap-10 flex-1">
        <section className="font-inter grid lg:flex items-center text-center lg:justify-evenly gap-10">
          <div className="flex flex-col gap-10 mt-20 items-center lg:items-start lg:pl-4">
            <h1 className="title text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-white font-bold flex-col text-center lg:text-left">
              <span className="text-white sm:bg-linear-to-r sm:from-[#6938F5] sm:to-[#356BFF] sm:bg-clip-text sm:text-transparent">
                Ferramentas
              </span>{" "}
              online <br />
              para facilitar o seu dia!
            </h1>

            <div className="text-center lg:text-left">
              <p className="paragraph text-muted">
                Utilitários rápidos, gratuítos, e sem necessidade de instalação.
              </p>
              <p className="paragraph text-muted">
                Tudo o que você precisa em um só lugar!
              </p>
            </div>

            <form className="border border-muted/30 rounded-xl w-[clamp(300px,90vw,760px)] h-12 items-center flex justify-between bg-card">
              <div className="flex flex-1 items-center gap-2 px-2 sm:px-4">
                <Search className="text-muted" size={20} />

                <input
                  className="w-full text-[clamp(12px,6vw,16px)] outline-0 text-foreground placeholder-muted"
                  type="text"
                  placeholder="Busque por uma ferramenta..."
                />
              </div>

              <Button variant="search" rounded="xl" size="search">
                Buscar
              </Button>
            </form>
          </div>
          <div className="flex justify-center">
            <Image
              className="image pt-4 w-100 sm:w-120 lg:w-140 xl:w-190 h-auto translate-y-10 opacity-0"
              src="/images/computer.png"
              alt="Computer"
              width={800}
              height={800}
              draggable={false}
            ></Image>
          </div>
        </section>

        <section className="flex justify-center items-center">
          <div className="w-[80%] sm:w-[95%] grid sm:flex font-inter gap-4 sm:gap-6 justify-center xl:justify-evenly  bg-card border border-muted/30 py-6 rounded-2xl">
            <Quality
              icon={Zap}
              title="Rápido e fácil"
              description="Use em segundos"
            ></Quality>

            <hr className="bg-muted/30 w-55 h-0.5 sm:w-0.5 sm:h-20 sm:rotate-180" />

            <Quality
              icon={ShieldCheck}
              title="Seguro"
              description="Seus dados protegidos"
            ></Quality>

            <hr className="bg-muted/30 w-55 h-0.5 sm:w-0.5 sm:h-20 sm:rotate-180" />

            <Quality
              icon={Monitor}
              title="100% Online"
              description="Sem instalação"
            ></Quality>

            <hr className="bg-muted/30 w-55 h-0.5 sm:w-0.5 sm:h-20 sm:rotate-180" />

            <Quality
              icon={Gift}
              title="Gratuito"
              description="Sempre grátis"
            ></Quality>
          </div>
        </section>

        <section className="font-inter gap-10 flex flex-col">
          <div className="flex flex-col text-center justify-center xl:justify-between xl:mx-12 gap-6 sm:flex-row sm:justify-evenly items-center">
            <h2 className="text-foreground text-3xl font-bold">
              Principais Ferramentas
            </h2>

            <Button
              className="flex gap-2 items-center"
              variant="outline"
              rounded="full"
              size="responsive"
            >
              Ver todas as ferramentas <ArrowRight />
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
              <ToolCard
                title="Recortar imagem"
                description="Recorte suas imagens com precisão"
                color="red"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Seletor de cores"
                description="Acesse o seletor de cores e escolha sua cor de preferência"
                color="green"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Gerador de senhas"
                description="Gere senhas seguras de acordo com informações fornecidas"
                color="purple"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Calculadora Online"
                description="Realize cálculos matemáticos básicos e avançados"
                color="pink"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Gerador de QR Code"
                description="Gere um QR Code de acordo com informações fornecidas"
                color="blue"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Compactador de arquivos"
                description="Reduz o tamanho de arquivos"
                color="cyan"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Gerador de números"
                description="Gere números aleatórios de acordo com informações fornecidas"
                color="orange"
                icon={Crop}
              ></ToolCard>

              <ToolCard
                title="Contador de caracteres"
                description="Calcule quantos caracteres existem no texto"
                color="violet"
                icon={Crop}
              ></ToolCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
