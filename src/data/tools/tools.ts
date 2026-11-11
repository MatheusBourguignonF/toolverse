import { ArrowDownAZ, CaseSensitive, WholeWord } from "lucide-react";

export const tools: ITool[] = [
    {   
        id: 1,
        name: "Contador de caracteres",
        description: "Conte caracteres e espaços de um texto.",
        icon: WholeWord,
        color: "blue",
        href: "/tools/contador-de-caracteres",
    },
    {
        id: 1,
        name: "Converter Maiúscula e Minúscula",
        description: "Converte o texto para letras maiúsculas ou minúsculas.",
        icon: CaseSensitive,
        color: "blue",
        href: "/tools/converter-maiuscula-minuscula",
    },
    {
        id: 3,
        name: "Ordem alfabética",
        description: "Coloca uma lista em ordem alfabética.",
        icon: ArrowDownAZ,
        color: "blue",
        href: "/tools/ordem-alfabetica"
    }
] 