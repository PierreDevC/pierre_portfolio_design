import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import CircularText from "@/components/CircularText";
import { useTranslation } from '@/hooks/useTranslation';
import mainPortrait from "@/assets/1cypre_0904_EDIT.jpg";
import mortwiseImage from "@/assets/Iphone_MortWise.png";

const Hero = () => {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="h-full pt-32 pb-32 flex items-center">
      <div className="flex flex-row items-center gap-[12vw] px-32 min-w-max h-full">
        {/* First Image */}
        <div ref={imageRef} className="relative w-[35vw] aspect-[3/4] shadow-2xl flex-none translate-y-[-5%] group cursor-pointer overflow-hidden">
          <img 
            src={mainPortrait} 
            alt="Pierre 1" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-8 left-8 text-white font-medium text-sm tracking-widest uppercase pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            Portrait I / 2026
          </div>
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Short Text Description */}
        <div className="flex-none space-y-24"> {/* Increased from 12 to 24 to put it lower */}
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-[3.5rem] font-semibold tracking-tighter text-foreground leading-[0.95]" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              Designer & <br/>Marketing Specialist
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-[10px] lg:text-xs text-studio-gray uppercase tracking-[0.2em] leading-relaxed max-w-[250px]">
                Crafting digital narratives through <br/>aesthetic precision and strategic growth.
              </p>
              <div className="flex-none">
                <CircularText
                  text="PIERRE"
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-foreground/30 w-16 h-16 lg:w-20 lg:h-20"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-8 text-foreground/40">
            <span className="text-xs uppercase tracking-[0.4em] font-medium">Scroll to explore</span>
            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8H78M78 8L71 1M78 8L71 15" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Second Image - MortWise */}
        <div className="relative w-[30vw] aspect-[3/4] shadow-2xl flex-none translate-y-[10%] group cursor-pointer overflow-hidden">
          <img 
            src={mortwiseImage} 
            alt="MortWise" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-8 left-8 text-white font-medium text-sm tracking-widest uppercase pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            MortWise / iOS
          </div>
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative w-[35vw] aspect-[3/4] shadow-2xl flex-none translate-y-[-15%] group cursor-pointer overflow-hidden">
          <img 
            src={mainPortrait} 
            alt="Pierre 3" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-8 left-8 text-white font-medium text-sm tracking-widest uppercase pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            Monochrome Study
          </div>
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="relative w-[25vw] aspect-[3/4] shadow-2xl flex-none translate-y-[5%] group cursor-pointer overflow-hidden">
          <img 
            src={mainPortrait} 
            alt="Pierre 4" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-8 left-8 text-white font-medium text-sm tracking-widest uppercase pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            Final Perspective
          </div>
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
