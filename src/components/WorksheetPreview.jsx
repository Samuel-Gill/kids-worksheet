import { forwardRef } from 'react';

function TraceLine({ text, traceStyle, fontFamily }) {
  const borderStyle = traceStyle === 'dashed' ? 'border-dashed' : 'border-dotted';

  return (
    <div className={`border-b ${borderStyle} border-slate-200 py-2 sm:py-3`}>
      <p
        className="break-words text-2xl tracking-[0.18em] text-gray-400 sm:text-3xl md:text-4xl"
        style={{ fontFamily }}
      >
        {text}
      </p>
    </div>
  );
}

const WorksheetPreview = forwardRef(function WorksheetPreview(
  { sentence, lines, traceStyle, fontFamily, onDownloadPdf },
  ref,
) {
  return (
    <section className="overflow-x-hidden px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/70 bg-white/85 p-5 shadow-playful sm:p-8">
        <div className="no-print flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bubblegum sm:text-sm">
              🖨️ Worksheet preview
            </p>
            <h2 className="mt-2 text-xl font-black text-slate-800 sm:text-2xl md:text-3xl">
              Printable tracing page
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Preview the page below, then download it as a PDF or print from your browser.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onDownloadPdf}
              className="min-h-11 w-full rounded-full bg-slate-800 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              Download as PDF
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 w-full rounded-full bg-mint px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              Print worksheet
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto sm:mt-8">
          <div
            ref={ref}
            className="print-card mx-auto min-h-[980px] w-full max-w-[794px] rounded-3xl border-[8px] border-rose-100 bg-white p-4 sm:border-[10px] sm:p-8 md:p-10"
          >
            <div className="flex flex-col gap-4 border-b-2 border-dashed border-rose-200 pb-5 sm:flex-row sm:items-start sm:justify-between sm:pb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bubblegum sm:text-xs sm:tracking-[0.35em]">
                  Kids Worksheet Generator
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-800 sm:text-3xl md:text-4xl">
                  Trace the sentence
                </h3>
                <p className="mt-2 max-w-xl text-sm text-slate-500 sm:mt-3 sm:text-base">
                  Read the sentence aloud, trace each line carefully, and say the words with a big smile.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-left text-xs font-bold text-slate-500 sm:rounded-3xl sm:text-right sm:text-sm">
                <p>Name: ____________________</p>
                <p className="mt-2">Date: _____________________</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-yellow-50 p-4 sm:mt-8 sm:rounded-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
                Practice sentence
              </p>

              <p
                className="mt-2 break-words text-xl tracking-[0.12em] text-gray-400 sm:text-2xl md:text-3xl"
                style={{ fontFamily }}
              >
                {sentence}
              </p>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Keep your pencil on the line.
              </p>
            </div>

            <div className="mt-5 space-y-1 sm:mt-6">
              {lines.map((line, index) => (
                <TraceLine key={`${line}-${index}`} text={line} traceStyle={traceStyle} fontFamily={fontFamily} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WorksheetPreview;
