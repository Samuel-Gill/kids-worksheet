import { useEffect, useState } from 'react';
import { navItems } from '../data';

function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 text-base font-black text-bubblegum sm:text-lg lg:text-xl">
            <span className="rounded-full bg-sunshine px-3 py-1">🧒</span>
            <span className="leading-tight">Kids Worksheet Generator</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-rose-50 p-2 text-slate-700 transition hover:bg-rose-100 md:hidden"
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>

          <div className="hidden items-center gap-2 md:flex md:flex-wrap md:justify-end">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'bg-bubblegum text-white shadow-playful'
                    : 'bg-rose-50 text-slate-700 hover:bg-sky-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-3 grid gap-2 rounded-2xl border border-rose-100 bg-white p-3 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`inline-flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'bg-bubblegum text-white shadow-playful'
                    : 'bg-rose-50 text-slate-700 hover:bg-sky-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
