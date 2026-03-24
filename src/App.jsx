import { useEffect, useMemo, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PoemsSection from './components/PoemsSection';
import SentenceGenerator from './components/SentenceGenerator';
import { AlphabetsSection, CountingSection, ShapesSection } from './components/TemplateSections';
import WorksheetPreview from './components/WorksheetPreview';
import { handwritingFonts, navItems } from './data';

const DEFAULT_SENTENCE = 'I am kind and I love to learn.';
const DEFAULT_FONT = handwritingFonts[0].value;
const PREVIEW_LINE_COUNT = 12;

function App() {
  const [sentence, setSentence] = useState(DEFAULT_SENTENCE);
  const [traceStyle, setTraceStyle] = useState('dotted');
  const [fontFamily, setFontFamily] = useState(DEFAULT_FONT);
  const [activeSection, setActiveSection] = useState('home');
  const [submittedSentence, setSubmittedSentence] = useState(DEFAULT_SENTENCE);
  const worksheetRef = useRef(null);

  const worksheetLines = useMemo(() => {
    const cleanedSentence = submittedSentence.trim() || DEFAULT_SENTENCE;
    return Array.from({ length: PREVIEW_LINE_COUNT }, () => cleanedSentence);
  }, [submittedSentence]);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target?.id) {
          setActiveSection(current.target.id);
        }
      },
      { threshold: [0.25, 0.45, 0.7], rootMargin: '-20% 0px -50% 0px' },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleGenerate = () => {
    setSubmittedSentence(sentence.trim() || DEFAULT_SENTENCE);
  };

  const handleClear = () => {
    setSentence('');
    setSubmittedSentence(DEFAULT_SENTENCE);
    setTraceStyle('dotted');
    setFontFamily(DEFAULT_FONT);
  };

  const handleSelectPoem = (text) => {
    setSentence(text);
    setSubmittedSentence(text);
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadPdf = async () => {
    if (!worksheetRef.current) return;

    const canvas = await html2canvas(worksheetRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
    });

    const imageData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('kids-worksheet.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-yellow-50 font-display text-slate-700">
      <div className="min-h-screen">
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <SentenceGenerator
            sentence={sentence}
            setSentence={setSentence}
            traceStyle={traceStyle}
            setTraceStyle={setTraceStyle}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            onGenerate={handleGenerate}
            onClear={handleClear}
            worksheetLines={worksheetLines}
          />
          <AlphabetsSection />
          <ShapesSection />
          <CountingSection />
          <PoemsSection onSelect={handleSelectPoem} />
          <WorksheetPreview
            ref={worksheetRef}
            sentence={submittedSentence}
            lines={worksheetLines}
            traceStyle={traceStyle}
            fontFamily={fontFamily}
            onDownloadPdf={handleDownloadPdf}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
