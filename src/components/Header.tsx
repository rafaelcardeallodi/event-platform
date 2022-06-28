import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  isMenuMobileOpen: boolean;
  onToggleIsMenuMobileOpen: () => void;
}

export function Header({
  isMenuMobileOpen,
  onToggleIsMenuMobileOpen,
}: HeaderProps) {
  return (
    <header className="w-full fixed py-4 flex items-center justify-between px-6 bg-gray-700 border-b border-gray-600 z-[1000] md:justify-center md:py-5 md:relative">
      <Logo />
      <div className="flex items-center gap-2 md:hidden">
        <span>Aulas</span>
        <button className="text-blue-500" onClick={onToggleIsMenuMobileOpen}>
          {isMenuMobileOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
    </header>
  );
}
