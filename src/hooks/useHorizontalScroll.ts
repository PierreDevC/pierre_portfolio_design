import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        
        // Prevent default vertical scroll
        e.preventDefault();
        
        // Calculate new scroll position
        const scrollAmount = e.deltaY * 4.5; // Increased from 3 for faster movement
        const targetScroll = el.scrollLeft + scrollAmount;
        
        // Use GSAP for buttery smooth scrolling
        gsap.to(el, {
          scrollLeft: targetScroll,
          duration: 0.8, // Reduced from 1.2 for snappier feel
          ease: "power2.out",
          overwrite: "auto"
        });
      };
      
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => {
        el.removeEventListener("wheel", onWheel);
        gsap.killTweensOf(el);
      };
    }
  }, []);
  
  return elRef;
}
