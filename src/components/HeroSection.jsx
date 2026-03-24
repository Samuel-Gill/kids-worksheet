function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-5 rounded-3xl bg-gradient-to-br from-bubblegum via-lavender to-sky bg-confetti p-5 text-white shadow-playful sm:gap-8 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div>
          <span className="inline-flex rounded-full bg-white/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] sm:px-4 sm:text-sm sm:tracking-[0.2em]">
            Printable • Playful • Responsive
          </span>
          <h1 className="mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Create adorable tracing worksheets in minutes ✍️🌈
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/90 sm:mt-4 sm:text-base md:text-lg">
            Generate custom sentence tracing pages, explore alphabet and counting practice sheets,
            and download classroom-ready PDFs from one cheerful dashboard.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#generator"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-bubblegum transition hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              Start Creating
            </a>
            <a
              href="#poems"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto sm:px-6"
            >
              Browse Poem Ideas
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {[
            ['Sentence tracing', 'Fill a page with repeatable handwriting practice.'],
            ['Alphabet cards', 'Uppercase, lowercase, sight words, and playful icons.'],
            ['Shape practice', 'Trace dotted outlines for familiar classroom shapes.'],
            ['Counting fun', 'Numbers 1–20 with matching visual groups.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl bg-white/20 p-4 shadow-sm backdrop-blur-sm sm:rounded-3xl sm:p-5">
              <p className="text-base font-black sm:text-lg">{title}</p>
              <p className="mt-1 text-xs text-white/90 sm:mt-2 sm:text-sm">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
