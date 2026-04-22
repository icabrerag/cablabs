type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <a
          href="#"
          className="text-lg font-semibold tracking-wide hover:opacity-80 transition"
        >
          CabLabs
        </a>

        {/* NAV ITEMS */}
        <ul className="hidden gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative group transition"
                >
                {item.label}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}