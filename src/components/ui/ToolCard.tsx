import { ArrowRight, LucideIcon } from "lucide-react";

interface IProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const ToolCard = (props: IProps) => {
  const { title, description, icon: Icon, color } = props;
  return (
    <button className="bg-card rounded-xl w-35 h-68 flex-col xl:flex-row xl:w-75 xl:h-34 xl:gap-4 justify-between hover:cursor-pointer border border-muted/30 flex items-center p-4 hover:bg-card-hover 2xl:w-92 ">
      <div
        className="bg-accent-cyan p-2 2xl:p-3 rounded-lg"
        style={{ backgroundColor: color }}
      >
        <Icon className="text-white opacity-80" />
      </div>

      <div className="text-center xl:text-start justify-center flex flex-col gap-2 flex-1">
        <h3 className="text-foreground font-bold 2xl:text-lg">{title}</h3>

        <p className="text-muted text-xs 2xl:text-sm">{description}</p>
      </div>

      <div className="bg-card-hover p-1 rounded-full">
        <ArrowRight className="text-white" size={15} />
      </div>
    </button>
  );
};
