"use client";

import { House, Info, LayoutGrid, Menu, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
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
      if (!menuRef.current) return;
      gsap.to(menuRef.current, {
        y: -300,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(true);
    }
  };

  useLayoutEffect(() => {
    if (!isOpen || !menuRef) return;

    gsap.fromTo(
      menuRef.current,
      { y: -300, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    );
  }, [isOpen]);

  return (
    <header className="relative font-inter">
      <div className="relative z-50 flex justify-evenly items-center py-4 bg-linear-to-br from-[#0B1429] to-[#050B1A]">
        <h2 className=" font-bold text-white text-3xl z-50">
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
              <House className="size-5 bg-white bg-clip-text text-white" />{" "}
              Início
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
          onClick={toggleMenu}
          className="text-white sm:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <ul
          ref={menuRef}
          id="mobile-menu"
          className="absolute z-1 flex flex-col p-4 text-white bg-linear-to-br from-[#0B1429] via-[#111C35] to-[#050B1A] top-17 w-full gap-6"
        >
          <li className={`flex gap-2 w-fit hover:cursor-pointer ${page === "home" ? "bg-primary rounded-full px-4 py-2" : ""}`}>
            <House /> Início
          </li>

          <li className={`flex gap-2 w-fit hover:cursor-pointer ${page === "tools" ? "bg-primary rounded-full px-4 py-2" : ""}`}>
            <LayoutGrid /> Todas as ferramentas
          </li>

          <li className={`flex gap-2 w-fit hover:cursor-pointer ${page === "info" ? "bg-primary rounded-full px-4 py-2" : ""}`}>
            <Info /> Sobre
          </li>
        </ul>
      )}
    </header>
  );
};
