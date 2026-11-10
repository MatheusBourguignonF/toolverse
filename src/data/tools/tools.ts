import { CaseSensitive, WholeWord } from "lucide-react";

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
        color: "red",
        href: "/tools/converter-maiuscula-minuscula",
    }
] 