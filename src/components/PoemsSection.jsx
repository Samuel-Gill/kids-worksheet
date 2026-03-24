import { poemItems } from '../data';

function PoemsSection({ onSelect }) {
  return (
    <section id="poems" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-playful sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-bubblegum">📚 Inspiration corner</p>
            <h2 className="mt-2 text-2xl font-black text-slate-800">Poems & Positive Sentences</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Tap any card to instantly copy it into the sentence generator and build a tracing worksheet.
            </p>
          </div>
          <a href="#generator" className="rounded-full bg-sunshine px-5 py-3 text-sm font-black text-slate-700">
            Jump to generator
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {poemItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelect(item.text)}
              className="rounded-3xl bg-gradient-to-br from-lavender/20 via-rose-50 to-sky-50 p-5 text-left transition hover:-translate-y-1 hover:shadow-playful"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-slate-500">{item.type}</span>
                <span className="text-xl">✨</span>
              </div>
              <h3 className="mt-4 text-xl font-black text-slate-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">“{item.text}”</p>
              <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-bubblegum">
                Use this sentence
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PoemsSection;
