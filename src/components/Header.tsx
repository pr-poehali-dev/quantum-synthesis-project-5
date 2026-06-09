interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">Мужское здоровье</div>
        <nav className="flex gap-4 items-center">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs tracking-wider whitespace-nowrap"
          >
            О курсе
          </a>
          <a
            href="#buy"
            className="text-white bg-white/10 hover:bg-white/20 transition-colors duration-300 uppercase text-xs tracking-wider px-3 py-1.5 border border-white/30 whitespace-nowrap"
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}