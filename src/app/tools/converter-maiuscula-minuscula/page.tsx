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
    });

    return () => ctx.revert();
  }, []);

  const [selected, setSelected] = useState<"option1" | "option2" | "option3">(
    "option1",
  );
  const [text, setText] = useState<string>("");

  function textFormatting() {
    if (selected === "option1") {
      return text.toUpperCase();
    } else if (selected === "option2") {
      return text.toLowerCase();
    } else {
      return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  }
  return (
    <div className="bg-linear-to-br min-h-screen flex flex-col from-[#0B1429] to-[#050B1A]">
      <Header page="tools" />

      <main className="flex-1 sm:p-10 flex flex-col gap-12">
        <section className="flex flex-col items-center sm:items-start">
          <h1 className="title text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-white font-bold flex-col text-center lg:text-left pt-4">
            <span className="text-white sm:bg-linear-to-r sm:from-[#6938F5] sm:to-[#356BFF] sm:bg-clip-text sm:text-transparent ">
              Converter Maiúsculas e Minúsculas
            </span>
          </h1>
        </section>

        <section className="flex flex-col items-center gap-10">
          <textarea
            onChange={(event) => {
              setText(event.target.value);
              textFormatting();
            }}
            placeholder="Digite seu texto aqui..."
            className="border border-muted/30 rounded-xl text-foreground w-[clamp(280px,95vw,1200px)] h-100 p-2"
          />

          <textarea
            onChange={(event) => setText(event.target.value)}
            placeholder="O resultado aparecerá aqui..."
            className="border border-muted/30 rounded-xl text-foreground w-[clamp(280px,95vw,1200px)] h-100 p-2"
            value={textFormatting()}
            readOnly
          ></textarea>

          <form className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <label className="text-muted flex gap-4">
              <input
                type="radio"
                value="option1"
                checked={selected === "option1"}
                onChange={() => setSelected("option1")}
                className="text-muted"
              />
              Maiúsculas
            </label>

            <label className="text-muted flex gap-4">
              <input
                type="radio"
                value="option2"
                checked={selected === "option2"}
                onChange={() => setSelected("option2")}
                className="text-muted"
              />
              Minúsculas
            </label>

            <label className="text-muted flex gap-4">
              <input
                type="radio"
                value="option3"
                checked={selected === "option3"}
                onChange={() => setSelected("option3")}
                className="text-muted"
              />
              Primeira letra
            </label>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
