import { navItems } from '../data';

function Navbar({ activeSection }) {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-black text-bubblegum sm:text-xl">
          <span className="rounded-full bg-sunshine px-3 py-1">🧒</span>
          Kids Worksheet Generator
        </a>
        <div className="flex max-w-full flex-1 flex-wrap items-center justify-end gap-2 overflow-x-auto lg:max-w-none">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id
                  ? 'bg-bubblegum text-white shadow-playful'
                  : 'bg-rose-50 text-slate-600 hover:bg-sky-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
