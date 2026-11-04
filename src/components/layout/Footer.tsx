export const Footer = () => {
  return (
    <footer className="border-t border-t-muted/30 h-fit flex p-4 font-inter justify-between items-center gap-6 mt-10">
      <h1 className="text-white font-bold text-sm sm:text-lg">
        Tool
        <span className="bg-linear-to-r from-[#6938F5] to-[#356BFF] bg-clip-text text-transparent">
          Verse
        </span>
      </h1>

      <p className="text-muted text-xs sm:text-sm">
        &copy; 2026 ToolVerse. Todos os direitos reservados
      </p>

      <nav className="flex text-muted  text-xs sm:text-sm gap-2 items-center">
        <a>Termos de uso</a>

        <span>|</span>

        <a>Privacidade</a>
      </nav>
    </footer>
  );
};
