import { ArrowRight, LucideIcon } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export const ToolCard = (props: ITool) => {
  const { name, description, icon: Icon, color, href } = props;

  const cardRef = useRef<HTMLAnchorElement>(null);

  function handleMouseEnter() {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1.025,
      duration: 0.15,
    });
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.15,
    });
  }

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tool-card opacity-0 bg-card rounded-xl w-35 h-68 flex-col xl:flex-row xl:w-75 xl:h-34 xl:gap-4 justify-between hover:cursor-pointer border border-muted/30 flex items-center p-4 hover:bg-card-hover 2xl:w-92 hover:scale-102 transition-all duration-300"
    >
      <div
        className="bg-accent-cyan p-2 2xl:p-3 rounded-lg"
        style={{ backgroundColor: color }}
      >
        <Icon className="text-white opacity-80" />
      </div>

      <div className="text-center xl:text-start justify-center flex flex-col gap-2 flex-1">
        <h3 className="text-foreground font-bold 2xl:text-lg">{name}</h3>

        <p className="text-muted text-xs 2xl:text-sm">{description}</p>
      </div>

      <div className="bg-card-hover p-1 rounded-full">
        <ArrowRight className="text-white" size={15} />
      </div>
    </Link>
  );
};
