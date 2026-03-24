function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-bubblegum via-lavender to-sky bg-confetti p-8 text-white shadow-playful lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div>
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em]">
            Printable • Playful • Responsive
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Create adorable tracing worksheets in minutes ✍️🌈
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Generate custom sentence tracing pages, explore alphabet and counting practice sheets,
            and download classroom-ready PDFs from one cheerful dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#generator" className="rounded-full bg-white px-6 py-3 font-bold text-bubblegum transition hover:-translate-y-0.5">
              Start Creating
            </a>
            <a href="#poems" className="rounded-full border border-white/60 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Browse Poem Ideas
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Sentence tracing', 'Fill a page with repeatable handwriting practice.'],
            ['Alphabet cards', 'Uppercase, lowercase, sight words, and playful icons.'],
            ['Shape practice', 'Trace dotted outlines for familiar classroom shapes.'],
            ['Counting fun', 'Numbers 1–20 with matching visual groups.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-3xl bg-white/20 p-5 backdrop-blur-sm">
              <p className="text-lg font-black">{title}</p>
              <p className="mt-2 text-sm text-white/90">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
