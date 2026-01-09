"use client";

import React, {useState, useMemo, useEffect, useRef} from 'react';
import {
  IconInfoCircle,
  IconRefresh,
  IconChevronLeft,
  IconChevronRight,
  IconEraser,
  IconX,
  IconBrushOff
} from '@tabler/icons-react';

const PRICES = {
  removal: { none: 0, own: 10, other: 15 },
  base: { manicure: 30, gel_polish: 45, biab_natural: 65, biab_color: 75 },
  art: { level1: 10, level2: 15, level3: 20, level4: 30 }
};

const ART_DETAILS = {
  level1: {
    name: "Almost Boring",
    desc: "For those who want to be extra, but only a little bit. Includes multi-color designs, dots, foils, glazed looks, or simple lines. Just enough to avoid being \"plain Jane.\"",
    images: ["/treatments/level1/level1.1.jpeg", "treatments/level1/level1.2.jpeg", "/treatments/level1/level1.3.jpeg", "treatments/level1/level1.4.jpeg"],
    includes: ["Simple dots", "Basic lines", "Glitter accent", "Cat-eye effect", "Detailed art limited to one nail per hand."]
  },
  level2: {
    name: "Nat So Boring",
    desc: "Moving out of the \"basic\" zone. Features classic looks like French tips, chrome finishes, or simple airbrushing. Because \"normal\" is just not in the vocabulary anymore.",
    images: ["/treatments/level2/level2.1.jpeg", "treatments/level2/level2.2.jpeg", "treatments/level2/level2.3.jpeg", "treatments/level2/level2.4.jpeg"],
    includes: ["French tips", "Animal prints", "Chrome powder", "Basic geometric shapes", "Airbrush", "Marble effect"]
  },
  level3: {
    name: "Nat Boring",
    desc: "Now things are getting serious. A combination of multiple techniques with intricate details, 3D elements, or gems. It’s a lot, but in the best way possible.",
    images: ["/treatments/level3/level3.1.jpeg", "treatments/level3/level3.2.jpeg", "treatments/level3/level3.3.jpeg", "treatments/level3/level3.4.jpeg"],
    includes: ["3D elements", "Detailed swirls", "Multiple techniques combined"]
  },
  level4: {
    name: "Definitely Nat Boring",
    desc: "The \"Main Character\" energy set. Fully custom, one-of-a-kind designs for those who want their nails to be the conversation starter. Warning: people will stare.",
    images: ["/treatments/level4/level4.1.jpeg", "treatments/level4/level4.2.jpeg", "treatments/level4/level4.3.jpeg", "treatments/level4/level4.4.jpeg"],
    includes: ["Complex 3D art", "Intricate hand-painting", "Gems & Charms", "Different design on every nail"]
  }
};

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [isRemovalOnly, setIsRemovalOnly] = useState(false);
  const [skipArt, setSkipArt] = useState(false);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const [selections, setSelections] = useState({
    removal: 'none',
    base: '',
    art: ''
  });

  const bookingRef = useRef<HTMLDivElement>(null);

  const isBookable = isRemovalOnly ||
    (selections.base === 'manicure') ||
    (selections.base && (selections.art || skipArt));

  useEffect(() => {
    if (isBookable) {
      // Small timeout ensures the button is rendered in the DOM before we scroll
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }, 100);
    }
  }, [isBookable]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveInfo(null);
    };

    if (activeInfo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown); // Listen for Escape key
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown); // Cleanup
    };
  }, [activeInfo]);

  const isManicureSelected = selections.base === 'manicure';

  const currentRemovalPrice = PRICES.removal[selections.removal as keyof typeof PRICES.removal];
  const currentBasePrice = PRICES.base[selections.base as keyof typeof PRICES.base] || 0;

  const totalPrice = useMemo(() => {
    const removalPrice = PRICES.removal[selections.removal as keyof typeof PRICES.removal];

    // If removal only, the service is Manicure (€30) + Removal fee
    if (isRemovalOnly) return removalPrice + PRICES.base.manicure;

    const artPrice = (!skipArt && selections.art && !isManicureSelected)
      ? (PRICES.art[selections.art as keyof typeof PRICES.art] || 0)
      : 0;

    return removalPrice + (PRICES.base[selections.base as keyof typeof PRICES.base] || 0) + artPrice;
  }, [selections, isRemovalOnly, skipArt, isManicureSelected]);

  const reset = () => {
    setSelections({ removal: 'none', base: '', art: '' });
    setStep(1);
    setIsRemovalOnly(false);
    setSkipArt(false);
  };

  const handleNextAction = () => {
    if (isRemovalOnly || step === 2 && isManicureSelected || step === 3) {
      window.open("https://www.fresha.com/book-now/natboringnails-oh8dausv/all-offer?share=true&pId=2556600", "_blank");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-32">

      <header className="flex justify-between items-end mb-10 px-4">
        <div>
          <h2 className="text-4xl font-kindred font-bold text-stone-800 dark:text-white">Price Estimator</h2>
        </div>
        <button
          onClick={reset}
          className="group flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-stone-600 dark:text-gray-300 transition-all cursor-pointer"
        >
          <span className="text-xs font-black uppercase tracking-widest">Reset</span>
          <IconRefresh size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </header>

      <div className="bg-white dark:bg-gray-900 rounded-[3.5rem] shadow-[0_32px_64_rgba(0,0,0,0.1)] border border-stone-100 dark:border-gray-800 p-8 md:p-12 relative">

        {activeInfo && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setActiveInfo(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-100 dark:border-gray-700 relative"
              onClick={(e) => e.stopPropagation()}
            >

              <button onClick={() => setActiveInfo(null)} className="absolute top-6 right-6 z-20 p-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full text-stone-400 hover:text-stone-600 shadow-sm transition-all cursor-pointer">
                <IconX size={24}/>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT: Inspiration Gallery (Regular Grid) */}
                <div
                  className="p-8 lg:p-12 bg-stone-50 dark:bg-gray-900/50 border-r border-stone-100 dark:border-gray-700">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">Visual
                    Inspiration</p>

                  {/* Using a clean 2x2 grid with equal aspect ratios */}
                  <div className="grid grid-cols-2 gap-4">
                    {ART_DETAILS[activeInfo as keyof typeof ART_DETAILS].images.map((img, i) => (
                      <div key={i}
                           className="aspect-square rounded-2xl bg-stone-200 overflow-hidden shadow-sm border border-stone-100 dark:border-gray-700">
                        <img
                          src={img}
                          alt={`Example ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <a
                      href={"/inspiration"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-stone-800 dark:text-white group"
                    >
                      <span
                        className="underline decoration-primary decoration-2 underline-offset-8 group-hover:text-primary transition-all">
                        Explore the full gallery
                      </span>
                    </a>
                  </div>
                </div>

                {/* RIGHT: Service Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* ... (details text and button same as before) ... */}
                  <h5 className="text-4xl font-bold mb-4 text-stone-800 dark:text-white capitalize">
                    {ART_DETAILS[activeInfo as keyof typeof ART_DETAILS].name}
                  </h5>
                  <p className="text-lg text-stone-600 dark:text-gray-300 mb-10 leading-relaxed italic">
                    {ART_DETAILS[activeInfo as keyof typeof ART_DETAILS].desc}
                  </p>

                  <div className="space-y-6 mb-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Service Includes</p>
                    <ul className="grid grid-cols-1 gap-4">
                      {ART_DETAILS[activeInfo as keyof typeof ART_DETAILS].includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-stone-700 dark:text-gray-200 text-sm font-bold uppercase tracking-tight">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelections({...selections, art: activeInfo!});
                      setSkipArt(false);
                      setActiveInfo(null);
                    }}
                    className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 cursor-pointer hover:bg-primary/90 transition-all"
                  >
                    Select This Level
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4 mb-10 w-full">
              <div className="flex items-center gap-4">
                {/* Previous Button Styling */}
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-stone-50 hover:bg-primary hover:text-white dark:bg-gray-800 text-stone-500 transition-all active:scale-95 group cursor-pointer"
                  >
                    <IconChevronLeft size={20} className="sm:w-6 sm:h-6"/>
                  </button>
                )}

                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-stone-100 dark:bg-gray-800 text-stone-600 dark:text-gray-400 flex items-center justify-center text-xs sm:text-sm font-black">
                    0{step}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-stone-800 dark:text-white transition-all">
                    {step === 1 ? 'Removal' : step === 2 ? 'Foundation' : 'Nail Art'}
                  </h3>
                </div>
              </div>

              {/* Next Step Arrow - Styled exactly like the previous button */}
              {(step < 3 && !isRemovalOnly && !isManicureSelected) && (
                <div className={`relative p-[1.5px] overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 ${
                  (step === 2 && !selections.base) ? 'opacity-30' : 'bg-stone-900 dark:bg-stone-950 shadow-lg'
                }`}>

                  {!(step === 2 && !selections.base) && (
                    <span className="absolute inset-[-1000%] animate-border-beam small-beam-gradient opacity-80" />
                  )}

                  <button
                    disabled={(step === 2 && !selections.base)}
                    onClick={handleNextAction}
                    className="relative p-2 sm:p-3 rounded-[calc(0.75rem-1.5px)] sm:rounded-[calc(1rem-1.5px)] bg-white dark:bg-stone-900 text-stone-800 dark:text-white transition-all active:scale-95 group cursor-pointer"
                  >
                    <IconChevronRight size={20} className="sm:w-6 sm:h-6"/>
                  </button>
                </div>
              )}
            </div>

            <div className="min-h-[400px]">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(PRICES.removal).map(([id, price]) => (
                      <button
                        key={id}
                        onClick={() => {
                          setSelections({...selections, removal: id})
                          setIsRemovalOnly(false);
                        }
                        }
                        className={`p-7 rounded-[2rem] border-2 flex gap-4 items-center justify-between transition-all cursor-pointer active:scale-[0.98] ${selections.removal === id ? 'border-primary bg-primary/5 shadow-sm shadow-primary/5' : 'border-stone-100 bg-white dark:bg-gray-800 dark:border-gray-700'}`}
                      >
                        <div className="text-left">
                          <p className="font-bold text-stone-800 dark:text-white capitalize text-lg">
                            {id === 'none' ? 'No Removal' : id === 'own' ? 'My Previous Work' : 'Other Salon Work'}
                          </p>
                          <p className="text-xs text-stone-500 italic mt-1">
                            {id === 'none' && 'No previous product to remove. Ready for immediate prep and application.'}
                            {id === 'own' && 'Welcome back! Since I know exactly what’s on your nails, I can remove it quickly and safely while keeping your natural nail plate in perfect condition.'}
                            {id === 'other' && 'Safe removal of external salon work. Extra time is required to assess and remove unknown materials responsibly.'}
                          </p>
                        </div>
                        <span className="font-bold text-primary text-xl">{price > 0 ? `€${price}` : ''}</span>
                      </button>
                    ))}
                  </div>

                  {/* Only interested in removal? */}
                  {selections.removal !== 'none' && (
                    <div className="mt-8 p-6 bg-stone-50 dark:bg-gray-800/40 rounded-[2rem] border border-stone-100 flex items-center justify-between transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                          <IconEraser className="text-stone-400" size={20}/>
                        </div>
                        <p className="text-sm font-bold text-stone-800 dark:text-white">Only interested in removal?</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={isRemovalOnly}
                        onChange={(e) => setIsRemovalOnly(e.target.checked)}
                        className="w-7 h-7 accent-primary cursor-pointer rounded-lg"
                      />
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(PRICES.base).map(([id, price]) => (
                      <button
                        key={id}
                        onClick={() => setSelections({...selections, base: id})}
                        className={`p-7 rounded-[2rem] border-2 flex gap-4 items-center justify-between transition-all cursor-pointer active:scale-[0.98] ${selections.base === id ? 'border-primary bg-primary/5 shadow-sm shadow-primary/5' : 'border-stone-100 bg-white dark:bg-gray-800 dark:border-gray-700'}`}
                      >
                        <div className="text-left">
                          <p
                            className="font-bold text-stone-800 dark:text-white capitalize text-lg">{id.replace('_', ' ')}</p>
                          <p className="text-xs text-stone-500 italic mt-1">
                            {id === 'manicure' && 'Detailed care focusing on nail health. Features precision shaping and meticulous cuticle refinement for a crisp, professional finish.'}
                            {id === 'gel_polish' && 'Classic color with a high-shine finish. Ideal for those with strong natural nails who want vibrant, long-lasting color and flexibility without added thickness.'}
                            {id === 'biab_natural' && 'The \'Builder In A Bottle\' essentials. Provides a strong, protective layer to help your natural nails grow. Finished in a beautiful nude or sheer shade for a clean, structural look.'}
                            {id === 'biab_color' && 'The best of both worlds. You get the maximum strength and reinforcement of BIAB, topped with your choice of gel color. Durability meets total creative freedom.'}
                          </p>
                        </div>
                        <span className="font-bold text-stone-800 dark:text-white text-xl">€{price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-0 animate-in fade-in slide-in-from-left-4">

                  {/* 1. SELECTIONS CONTAINER: Animates height and opacity */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      skipArt
                        ? 'grid-rows-[0fr] opacity-0 mb-0'
                        : 'grid-rows-[1fr] opacity-100 mb-8'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 gap-4">
                        {Object.entries(PRICES.art).map(([level, price]) => (
                          <div
                            key={level}
                            onClick={() => { setSelections({...selections, art: level}); setSkipArt(false); }}
                            className={`p-7 rounded-[2rem] border-2 flex gap-4 items-center justify-between transition-all cursor-pointer ${selections.art === level && !skipArt ? 'border-primary bg-primary/5 shadow-sm shadow-primary/5' : 'border-stone-100 bg-white dark:bg-gray-800 dark:border-gray-700'}`}
                          >
                            <div className="flex gap-6 items-center">
                              <div>
                            <span className="font-bold text-lg text-stone-800 dark:text-white">
                              {ART_DETAILS[level as keyof typeof ART_DETAILS].name}
                            </span>
                                <p className="text-xs text-stone-500 mt-1 italic">{ART_DETAILS[level as keyof typeof ART_DETAILS].desc}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-primary text-xl">€{price}</span>
                              <button onClick={(e) => { e.stopPropagation(); setActiveInfo(level); }} className="p-3 rounded-xl bg-stone-50 text-stone-400 hover:text-primary border border-stone-100 active:scale-90 transition-all cursor-pointer">
                                <IconInfoCircle size={22}/>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2. THE CHECKBOX: This will move up automatically */}
                  <div className={`p-5 bg-stone-50 dark:bg-gray-800/40 rounded-[2rem] border flex items-center justify-between transition-all duration-500 ${
                    skipArt ? 'border-primary bg-primary/5' : 'border-stone-100'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                        <IconBrushOff className={skipArt ? "text-primary" : "text-stone-400"} size={20}/>
                      </div>
                      <p className="text-sm font-bold text-stone-800 dark:text-white">No art, just a clean set</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={skipArt}
                      onChange={(e) => {
                        setSkipArt(e.target.checked);
                        if(e.target.checked) setSelections({...selections, art: ''});
                      }}
                      className="w-7 h-7 accent-primary cursor-pointer rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5 sticky top-10 self-start">
            <div
              className="bg-stone-50/50 dark:bg-gray-800/40 p-10 rounded-[3rem] border border-stone-100 dark:border-gray-700 transition-all">
              <h4 className="text-xl font-bold mb-8 text-stone-800 dark:text-white">Estimation Summary</h4>

              <div className="space-y-5">
                {/* Removal Item */}
                <SummaryItem
                  label="Removal Service"
                  value={selections.removal === 'none' ? 'None' : selections.removal === 'own' ? 'My Work' : 'Other Salon'}
                  price={currentRemovalPrice}
                />

                {/* If removal only, show Manicure as the base */}
                {isRemovalOnly ? (
                  <SummaryItem label="Base Treatment" value="Manicure" price={PRICES.base.manicure} />
                ) : (
                  <>
                    <SummaryItem label="Base Treatment" value={selections.base ? selections.base.replace('_', ' ') : '---'} price={currentBasePrice} />
                    {!isManicureSelected && (
                      <SummaryItem label="Art Design" value={skipArt ? 'None' : (selections.art ? ART_DETAILS[selections.art as keyof typeof ART_DETAILS].name : '---')} price={(!skipArt && selections.art) ? PRICES.art[selections.art as keyof typeof PRICES.art] : 0} />
                    )}
                  </>
                )}
              </div>

              <div ref={bookingRef} className="mt-12 pt-8 border-t border-stone-200 dark:border-gray-700">
                {isRemovalOnly && (
                  <p className="mb-4 text-[11px] leading-relaxed text-stone-500 italic bg-stone-100 dark:bg-gray-900/50 p-3 rounded-xl border border-stone-200 dark:border-gray-800 animate-in fade-in slide-in-from-top-1">
                    * Removal services must be combined with a manicure to ensure nail health and a clean finish.
                  </p>
                )}
                <div className="flex justify-between items-center mb-8">
                  <span
                    className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Estimated Total</span>
                  <span className="text-5xl font-bold text-stone-800 dark:text-white">€{totalPrice}</span>
                </div>

                {isBookable ? (
                  <button
                    onClick={() => window.open("https://www.fresha.com/book-now/natboringnails-oh8dausv/all-offer?share=true&pId=2556600", "_blank")}
                    className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all cursor-pointer bg-primary border-2 border-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 animate-in fade-in zoom-in-95 duration-300"
                  >
                    {isRemovalOnly ? 'Book Removal Only' : isManicureSelected ? 'Book Manicure' : 'Book This Set'}
                    <IconChevronRight size={22}/>
                  </button>
                ) : (
                  /* Optional: A placeholder text to guide the user when no button is visible */
                  <div className="py-5 text-center border-2 border-dashed border-stone-200 rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                      Select a service to book
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const SummaryItem = ({ label, value, price }: { label: string, value: string, price: number }) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex flex-col">
      <span className="text-stone-500 font-medium text-xs uppercase tracking-wider">{label}</span>
      <span className="font-bold text-stone-800 dark:text-white capitalize mt-1">{value}</span>
    </div>
    {price > 0 && <div className="font-black text-stone-800 px-3 py-1 rounded-lg">
      €{price}
    </div>}
  </div>
);

export default PriceCalculator;