import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface SliderProps {
  children: React.ReactNode[];
}
export function Slider({
  children
}: SliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };
  return <div className="relative group">
      <div ref={containerRef} className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar" style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
        {children}
      </div>
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg
                 opacity-0 group-hover:opacity-100 transition-opacity
                 disabled:opacity-0" disabled={scrollPosition <= 0}>
        <ChevronLeftIcon className="h-6 w-6 text-slate-600" />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg
                 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRightIcon className="h-6 w-6 text-slate-600" />
      </button>
    </div>;
}