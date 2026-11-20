"use client";

interface ISalary {
  data: string;
  valor: string;
  readjust: number;
  difference: number;
}

import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MinimumSalaryClient() {
  const [salary, setSalary] = useState<ISalary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [salaryHistory, setSalaryHistory] = useState<ISalary[] | null>(null);

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

  useEffect(() => {
    async function getSalary() {

      try {
        const response = await fetch("/api/salary");

        if (!response.ok) {
          throw new Error("Não foi possível buscar o salário mínimo.");
        }

        const data: ISalary[] = await response.json();

        setSalaryHistory(
          data
            .filter((item, index, array) => {
              return index === 0 || item.valor !== array[index - 1].valor;
            })

            .map((item, index, array) => {
              const previousSalary = array[index - 1];

              const difference = previousSalary
                ? Number(item.valor) - Number(previousSalary.valor)
                : 0;

              const readjust = previousSalary
                ? (difference / Number(previousSalary.valor)) * 100
                : 0;

              return {
                ...item,
                difference,
                readjust,
              };
            }),
        );
        setSalary(data[data.length - 1]);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro inesperado");
      } finally {
        setLoading(false);
      }
    }
    getSalary();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center lg:items-start">
        <h1 className="title text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-white font-bold flex-col text-center lg:text-left pt-4">
          <span className="text-white sm:bg-linear-to-r sm:from-[#6938F5] sm:to-[#356BFF] sm:bg-clip-text sm:text-transparent ">
            Consultar salário mínimo
          </span>
        </h1>
      </section>

      <section className="flex flex-col items-center gap-10">
        <div className="border border-muted/30 rounded-lg p-4 px-12 sm:px-25 flex flex-col justify-center items-center">
          <h3 className="text-foreground">Salário mínimo atual</h3>

          {loading ? (
            <p className="text-foreground font-bold">
              Carregando salário mínimo...
            </p>

          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : salary ? (

            <h2 className="text-foreground font-bold text-4xl">
              {Number(salary.valor).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h2>

          ) : (
            <p className="text-foreground">Nenhum dado encontrado.</p>
          )}
        </div>

        <div className="text-foreground grid grid-cols-2 gap-5 sm:grid-cols-3">
          <div className="border border-muted/30 rounded-lg p-4 text-center">
            <p className="text-xs">Por hora</p>

            <h3 className="font-bold">
              {salary
                ? (Number(salary.valor) / 220).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "Nenhum valor disponível"}
            </h3>
          </div>

          <div className="border border-muted/30 rounded-lg p-4 text-center">
            <p className="text-xs">Por dia</p>

            <h3 className="font-bold">
              {salary
                ? (Number(salary.valor) / 30).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "Nenhum valor disponível"}
            </h3>
          </div>

          <div className="border border-muted/30 rounded-lg p-4 text-center col-span-2 sm:col-span-1 justify-self-center">
            <p className="text-xs">Por ano</p>

            <h3 className="font-bold">
              {salary
                ? (Number(salary.valor) * 12).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "Nenhum valor disponível"}
            </h3>
          </div>
        </div>

        <div className="border border-muted/30 rounded-lg">
          <table className="table-fixed">
            <thead>
              <tr className=" text-foreground rounded-lg text-xs sm:text-base">
                <th className="w-1/4 px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">Data</th>

                <th className="w-1/4 px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">Valor</th>

                <th className="w-1/4 px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">Diferença</th>

                <th className="w-1/4 px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">Reajuste</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistory
                ?.slice()
                .reverse()
                .filter((salary) => {
                  const [day, month, year] = salary.data.split("/").map(Number)
                  return year > 1994 || (year === 1994 && month >= 7)
                })
                .map((salary, index, array) => {
                  return (
                    <tr
                      className={`text-foreground text-xs sm:text-base border-t border-muted/30 ${index === 0 ? "bg-card-hover" : ""}`}
                      key={salary.data}
                    >
                      <td className="px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">{salary.data}</td>

                      <td className="px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">
                        {Number(salary.valor).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>

                      <td className="px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">
                        {index === array.length - 1 ? "-" : Number(salary.difference).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                      
                      <td className="px-2 py-2 sm:px-4 sm:py-4 lg:px-6 text-center">
                        {index === array.length - 1 ? "-" : `${salary.readjust.toFixed(2).replace(".",",")}%`}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
