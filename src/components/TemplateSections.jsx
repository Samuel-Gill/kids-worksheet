import { alphabetItems, countingItems, shapeItems } from '../data';

const traceClassName = 'tracking-[0.18em] text-transparent [-webkit-text-stroke:1.4px_rgba(148,163,184,0.95)]';

function ShapeArt({ name }) {
  const common = 'fill-none stroke-slate-400 stroke-[6]';

  switch (name) {
    case 'Circle':
      return <circle cx="60" cy="60" r="38" className={common} strokeDasharray="10 10" />;
    case 'Square':
      return <rect x="24" y="24" width="72" height="72" rx="6" className={common} strokeDasharray="10 10" />;
    case 'Triangle':
      return <polygon points="60,18 105,96 15,96" className={common} strokeDasharray="10 10" />;
    case 'Rectangle':
      return <rect x="15" y="32" width="90" height="56" rx="6" className={common} strokeDasharray="10 10" />;
    case 'Star':
      return <polygon points="60,14 72,44 105,46 80,66 88,98 60,78 32,98 40,66 15,46 48,44" className={common} strokeDasharray="10 10" />;
    case 'Heart':
      return <path d="M60 98 20 58a24 24 0 1 1 40-22 24 24 0 1 1 40 22Z" className={common} strokeDasharray="10 10" />;
    default:
      return null;
  }
}

function SectionShell({ id, title, emoji, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-playful sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-bubblegum">{emoji} Worksheet Library</p>
            <h2 className="mt-2 text-2xl font-black text-slate-800">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function AlphabetsSection() {
  return (
    <SectionShell
      id="alphabets"
      title="Alphabet Tracing Templates"
      emoji="🔤"
      subtitle="Uppercase and lowercase practice cards with simple words and emojis for quick classroom recognition."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {alphabetItems.map(([upper, lower, word, emoji]) => (
          <article key={upper} className="rounded-3xl bg-gradient-to-br from-sky-50 to-rose-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-4xl">{emoji}</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-slate-500">{word}</span>
            </div>
            <p className={`mt-4 text-5xl font-black ${traceClassName}`}>{upper} {lower}</p>
            <p className={`mt-4 text-2xl font-black ${traceClassName}`}>{word}</p>
            <div className="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-500">Trace the letters, say the word, and point to the picture idea.</div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function ShapesSection() {
  return (
    <SectionShell
      id="shapes"
      title="Shape Tracing Templates"
      emoji="🔺"
      subtitle="Familiar shape outlines with dotted SVG strokes help little learners practice pencil control."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {shapeItems.map((shape) => (
          <article key={shape.name} className="rounded-3xl bg-gradient-to-br from-mint/40 to-sky-50 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-800">{shape.name}</h3>
              <span className="text-3xl">{shape.emoji}</span>
            </div>
            <svg viewBox="0 0 120 120" className="mx-auto mt-4 h-40 w-40">
              <ShapeArt name={shape.name} />
            </svg>
            <p className={`text-center text-2xl font-black ${traceClassName}`}>{shape.name}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function CountingSection() {
  return (
    <SectionShell
      id="counting"
      title="Counting Practice 1–20"
      emoji="🔢"
      subtitle="Each number includes a traceable numeral and a matching group of simple dots for counting aloud."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {countingItems.map((item) => (
          <article key={item.number} className="rounded-3xl bg-gradient-to-br from-yellow-50 to-white p-5">
            <p className={`text-5xl font-black ${traceClassName}`}>{item.number}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Count the dots</p>
            <p className="mt-3 text-lg leading-8 text-slate-700">{item.icons}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
