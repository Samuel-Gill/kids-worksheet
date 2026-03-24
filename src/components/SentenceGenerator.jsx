import { handwritingFonts } from '../data';

function SentenceGenerator({
  sentence,
  setSentence,
  traceStyle,
  setTraceStyle,
  fontFamily,
  setFontFamily,
  onGenerate,
  onClear,
  worksheetLines,
}) {
  return (
    <section id="generator" className="scroll-mt-24 overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-playful sm:p-8">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="rounded-2xl bg-mint px-3 py-2 text-xl sm:text-2xl">✏️</span>
            <div>
              <h2 className="text-xl font-black text-slate-800 sm:text-2xl md:text-3xl">Sentence to Trace Generator</h2>
              <p className="mt-1 text-sm text-slate-500 sm:mt-0">Turn any sentence into a full printable handwriting page.</p>
            </div>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700 sm:mt-6" htmlFor="sentence">
            Type a sentence
          </label>
          <textarea
            id="sentence"
            value={sentence}
            onChange={(event) => setSentence(event.target.value.slice(0, 140))}
            rows={4}
            placeholder="Example: I am kind and I love to learn."
            className="mt-2 w-full rounded-3xl border-2 border-rose-100 bg-rose-50 px-4 py-3 text-base text-slate-700 outline-none transition focus:border-bubblegum focus:bg-white sm:py-4"
          />

          <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
            <label className="block text-sm font-bold text-slate-700">
              Trace style
              <select
                value={traceStyle}
                onChange={(event) => setTraceStyle(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-2xl border-2 border-sky-100 bg-sky-50 px-4 py-2.5 font-semibold text-slate-700 outline-none focus:border-sky sm:py-3"
              >
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
              </select>
            </label>

            <label className="block text-sm font-bold text-slate-700">
              Handwriting feel
              <select
                value={fontFamily}
                onChange={(event) => setFontFamily(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-2xl border-2 border-lavender/40 bg-lavender/10 px-4 py-2.5 font-semibold text-slate-700 outline-none focus:border-lavender sm:py-3"
              >
                {handwritingFonts.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onGenerate}
              className="min-h-11 w-full rounded-full bg-bubblegum px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              Regenerate Worksheet
            </button>
            <button
              type="button"
              onClick={onClear}
              className="min-h-11 w-full rounded-full bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200 sm:w-auto sm:px-6"
            >
              Clear
            </button>
          </div>

          <div className="mt-5 rounded-3xl bg-yellow-50 p-4 text-sm text-slate-600 sm:mt-6">
            <p className="font-bold text-slate-800">Worksheet tips 💡</p>
            <ul className="mt-2 space-y-2">
              <li>• Short positive sentences print best for early writers.</li>
              <li>• The preview automatically repeats the sentence to fill a page.</li>
              <li>• Use the poem ideas below to auto-fill ready-made examples.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-bubblegum/30 bg-white/75 p-5 shadow-playful sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-800 sm:text-xl md:text-2xl">Quick preview summary</h3>
              <p className="text-sm text-slate-500">{worksheetLines.length} handwriting lines are ready for print.</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-mint px-4 py-2 text-xs font-black text-slate-700 sm:text-sm">A4 / Letter friendly</span>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Tracing line count', `${worksheetLines.length} lines`],
              ['Best for ages', '4–8 years'],
              ['Printable format', 'PDF and print'],
              ['Bonus controls', 'Clear and style toggle'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl bg-gradient-to-br from-rose-50 to-white p-4 sm:p-5">
                <p className="text-sm font-semibold text-slate-500">{label}</p>
                <p className="mt-2 text-base font-black text-slate-800 sm:text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SentenceGenerator;
