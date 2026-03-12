import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import StairsHeader from "@/components/StairsHeader";
import Hero from "@/components/Hero";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

const Index = () => {
  const location = useLocation();
  const scrollRef = useHorizontalScroll();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      <StairsHeader />
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden flex items-stretch scrollbar-hide"
        style={{ scrollSnapType: 'x proximity' }}
      >
        <div ref={heroRef} className="flex-none h-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Index;
