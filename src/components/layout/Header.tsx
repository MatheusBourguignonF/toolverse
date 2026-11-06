"use client";

import { House, Info, LayoutGrid, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";

interface IProps {
  page: "home" | "tools" | "info";
}

export const Header = (props: IProps) => {
  const { page } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -45,
        duration: 2.25,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(true);
    }
  };
  return (
    <header className="flex relative justify-evenly items-center py-4 font-inter z-50">
      <h2 className="font-bold text-white text-3xl">
        Tool
        <span className="bg-linear-to-r from-[#6938F5] to-[#356BFF] bg-clip-text text-transparent">
          Verse
        </span>
      </h2>
      <nav className="text-sm transition-all duration-900">
        <ul className="hidden sm:flex text-white gap-10 justify-center items-center">
          <li
            className={`flex gap-2 hover:cursor-pointer items-center ${page === "home" ? "bg-primary rounded-full px-4 py-2" : ""}`}
          >
            <House className="size-5 bg-white bg-clip-text text-white" /> Início
          </li>

          <li
            className={`flex gap-2 hover:cursor-pointer items-center ${page === "tools" ? "bg-primary rounded-full px-4 py-2" : ""}`}
          >
            <LayoutGrid className="size-5" /> Todas as ferramentas
          </li>

          <li
            className={`flex gap-2 hover:cursor-pointer items-center ${page === "info" ? "bg-primary rounded-full px-4 py-2" : ""}`}
          >
            <Info className="size-5" /> Sobre
          </li>
        </ul>
      </nav>

      <button
        className="text-white sm:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute flex flex-col p-4 text-white bg-linear-to-br from-[#0B1429] via-[#111C35] to-[#050B1A] top-17 w-full gap-6"
        >
          <li className="flex gap-2">
            <House /> Início
          </li>

          <li className="flex gap-2">
            <LayoutGrid /> Todas as ferramentas
          </li>

          <li className="flex gap-2">
            <Info /> Sobre
          </li>
        </ul>
      )}
    </header>
  );
};
