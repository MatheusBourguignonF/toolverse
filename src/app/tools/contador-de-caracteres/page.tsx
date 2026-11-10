"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const [text, setText] = useState<string>("");
  const [characterQuantity, setCharacterQuantity] = useState<number>(0);
  const [noSpace, setnoSpaceQuantity] = useState<number>(0);
  const [words, setWordsQuantity] = useState<number>(0);
  const [lines, setLinesQuantity] = useState<number>(0);

  const textRef = useRef<HTMLTextAreaElement>(null);

  function CharacterCalculate() {
    setCharacterQuantity(text.length);
    console.log(characterQuantity);
  }
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools"></Header>

      <main className="flex-1 sm:p-10 flex flex-col gap-10">
        <section className="flex flex-col items-center sm:items-start">
          <h1 className="title text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-white font-bold flex-col text-center lg:text-left pt-10">
            <span className="text-white sm:bg-linear-to-r sm:from-[#6938F5] sm:to-[#356BFF] sm:bg-clip-text sm:text-transparent ">
              Contador de caracteres
            </span>
          </h1>
        </section>
        <section className="flex flex-col items-center gap-10">
          <textarea
            onChange={(event) => setText(event.target.value)}
            placeholder="Digite seu texto aqui..."
            className="border border-muted/30 rounded-xl text-foreground w-[clamp(280px,95vw,1200px)] h-100 p-2"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <p className="text-muted ">
              Caracteres: <span className="font-bold">{text.length}</span>
            </p>

            <p className="text-muted">
              Sem espaços:{" "}
              <span className="font-bold">
                {text.replace(/\s/g, "").length}
              </span>
            </p>

            <p className="text-muted">
              Palavras:{" "}
              <span className="font-bold">
                {text.trim().split(/\s+/).filter(Boolean).length}
              </span>
            </p>

            <p className="text-muted">
              Linhas:{" "}
              <span className="font-bold">
                {text.length === 0 ? 0 : text.split("\n").length}
              </span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
