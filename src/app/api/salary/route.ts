import { NextResponse } from "next/server";

interface ISalary {
  data: string;
  valor: string;
}

export async function GET() {
  try {
    const response = await fetch(
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.1619/dados?formato=json",
      {
        next: {
          revalidate: 86400,
        },
      },
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao consultar o Banco Central." },
        { status: 502 },
      );
    }

    const data: ISalary = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao buscar salário mínimo:", error);

    return NextResponse.json(
      { error: "Não foi possível consultar o salário mínimo." },
      { status: 500 },
    );
  }
}
