import { forwardRef } from 'react';

function TraceLine({ text }) {
  return (
    <div className="border-b border-dashed border-slate-200 py-3">
<p
  className="text-[3rem] tracking-[0.25em] text-gray-400"
  style={{ fontFamily: '"Raleway Dots", cursive' }}
>
  {text}
</p>
    </div>
  );
}

const WorksheetPreview = forwardRef(function WorksheetPreview(
  { sentence, lines, traceStyle, onDownloadPdf },
  ref,
) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-playful sm:p-8">
        <div className="no-print flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-bubblegum">
              🖨️ Worksheet preview
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-800">
              Printable tracing page
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Preview the page below, then download it as a PDF or print from your browser.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onDownloadPdf}
              className="rounded-full bg-slate-800 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5"
            >
              Download as PDF
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full bg-mint px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5"
            >
              Print worksheet
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <div
            ref={ref}
            className="print-card mx-auto min-h-[1122px] w-full max-w-[794px] rounded-[1.5rem] border-[10px] border-rose-100 bg-white p-6 sm:p-10"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b-2 border-dashed border-rose-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-bubblegum">
                  Kids Worksheet Generator
                </p>
                <h3 className="mt-2 text-3xl font-black text-slate-800">
                  Trace the sentence
                </h3>
                <p className="mt-3 max-w-xl text-base text-slate-500">
                  Read the sentence aloud, trace each line carefully, and say the words with a big smile.
                </p>
              </div>

              <div className="rounded-3xl bg-sky-50 px-4 py-3 text-right text-sm font-bold text-slate-500">
                <p>Name: ____________________</p>
                <p className="mt-2">Date: _____________________</p>
              </div>
            </div>

            {/* Practice Sentence */}
            <div className="mt-8 rounded-3xl bg-yellow-50 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Practice sentence
              </p>

              <p
                className="mt-2 text-2xl tracking-[0.2em] text-gray-400"
                style={{
                  fontFamily: '"Raleway Dots", cursive', // ✅ dotted here too
                }}
              >
                {sentence}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Keep your pencil on the line.
              </p>
            </div>

            {/* Lines */}
            <div className="mt-6 space-y-1">
              {lines.map((line, index) => (
                <TraceLine key={`${line}-${index}`} text={line} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WorksheetPreview;