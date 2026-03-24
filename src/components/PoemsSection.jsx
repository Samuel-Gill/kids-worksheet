import { poemItems } from '../data';

function PoemsSection({ onSelect }) {
  return (
    <section id="poems" className="scroll-mt-24 overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/70 bg-white/85 p-5 shadow-playful sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bubblegum sm:text-sm">📚 Inspiration corner</p>
            <h2 className="mt-2 text-xl font-black text-slate-800 sm:text-2xl md:text-3xl">Poems & Positive Sentences</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Tap any card to instantly copy it into the sentence generator and build a tracing worksheet.
            </p>
          </div>
          <a
            href="#generator"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sunshine px-5 py-3 text-sm font-black text-slate-700 shadow-sm sm:w-auto"
          >
            Jump to generator
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-8">
          {poemItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelect(item.text)}
              className="min-h-32 rounded-3xl bg-gradient-to-br from-lavender/20 via-rose-50 to-sky-50 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-playful sm:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-slate-500">{item.type}</span>
                <span className="text-xl">✨</span>
              </div>
              <h3 className="mt-4 text-lg font-black text-slate-800 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">“{item.text}”</p>
              <span className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-bubblegum sm:mt-5">
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
