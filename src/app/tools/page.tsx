"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tools } from "@/data/tools/tools";
import { ToolCard } from "@/components/ui/ToolCard";

export default function Tools() {
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
      <Header page="tools"></Header>

      <main className="flex-1 p-10 flex flex-col gap-30">
        <section className="flex flex-col items-center sm:items-start gap-10">
          <h1 className="title text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-white font-bold flex-col text-center lg:text-left">
            <span className="text-white sm:bg-linear-to-r sm:from-[#6938F5] sm:to-[#356BFF] sm:bg-clip-text sm:text-transparent">
              Explore
            </span>{" "}
            nossas ferramentas online.
          </h1>

          <form className="border border-muted/30 rounded-xl w-[clamp(300px,90vw,760px)] h-12 items-center flex justify-between bg-card">
            <div className="flex flex-1 items-center gap-2 px-2 sm:px-4">
              <Search className="text-muted" size={20} />

              <input
                className="w-full text-[clamp(12px,4vw,16px)] outline-0 text-foreground placeholder-muted"
                type="text"
                placeholder="Busque por uma ferramenta..."
              />
            </div>

            <Button variant="search" rounded="xl" size="search">
              Buscar
            </Button>
          </form>
        </section>
        
        <section>
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
              color="blue"
              href={tool.href}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
