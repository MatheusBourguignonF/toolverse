import { LucideIcon } from "lucide-react";

interface IProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const Quality = (props: IProps) => {
  const { title, description, icon: Icon } = props;
  return (
    <div className="flex items-center gap-4">
      <Icon className="text-accent-cyan size-8 lg:size-10" size={40} />

      <div className="flex flex-col gap-2">
        <h4 className="text-foreground text-base font-bold w-fit">{title}</h4>

        <p className="text-muted text-sm sm:w-20 lg:w-fit">{description}</p>
      </div>
    </div>
  );
};
