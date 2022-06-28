import { CaretRight } from "phosphor-react";
import { AnchorHTMLAttributes } from "react";

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// extends ImgHTMLAttributes<HTMLImageElement>

export function Card({ title, description, icon, ...props }: CardProps) {
  return (
    <a
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors pr-6 sm:pr-0 min-h-[150px] md:min-h-0"
      {...props}
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-lg md:text-2xl">{title}</strong>
        <p className="md:text-sm text-xs text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 items-center text-blue-500 hidden sm:flex">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
