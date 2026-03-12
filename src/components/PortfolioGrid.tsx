import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import calendappVideo from "@/assets/calendapp.mp4";
import cryptotradeVideo from "@/assets/cryptotrade.mp4";
import { useTranslation } from '@/hooks/useTranslation';

const PortfolioGrid = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial states
    gsap.set([titleRef.current, gridRef.current], {
      y: 60,
      opacity: 0
    });

    // Initialize card overlay elements
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        const overlay = cardRef.querySelector('.portfolio-overlay');
        if (overlay) {
          gsap.set(overlay, {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "center center"
          });
        }
      }
    });

    // Create staggered animation
    const timeline = gsap.timeline();
    timeline
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(gridRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.6");

    return () => {
      timeline.kill();
      // Cleanup any ongoing hover animations
      cardRefs.current.forEach((cardRef) => {
        if (cardRef) {
          gsap.killTweensOf(cardRef);
          gsap.killTweensOf(cardRef.querySelector('.portfolio-image'));
          gsap.killTweensOf(cardRef.querySelector('.portfolio-overlay'));
        }
      });
    };
  }, []);

  const projects: Array<{
    id: number;
    video?: string;
    image?: string;
    title: string;
    category: string;
    year: string;
    shortDescription: string;
    projectUrl: string;
    techStack: string[];
  }> = [
    {
      id: 1,
      video: calendappVideo,
      title: t('projects.items.calendapp.title'),
      category: t('projects.items.calendapp.category'),
      year: t('projects.items.calendapp.year'),
      shortDescription: t('projects.items.calendapp.shortDescription'),
      projectUrl: "/calendapp",
      techStack: ["SpringBoot", "Next.js", "PostgresSQL"]
    },
    {
      id: 2,
      video: cryptotradeVideo,
      title: t('projects.items.cryptotrade.title'),
      category: t('projects.items.cryptotrade.category'),
      year: t('projects.items.cryptotrade.year'),
      shortDescription: t('projects.items.cryptotrade.shortDescription'),
      projectUrl: "/cryptotrade",
      techStack: ["PHP", "JavaScript", "MySQL"]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: t('projects.items.mortwise.title'),
      category: t('projects.items.mortwise.category'),
      year: t('projects.items.mortwise.year'),
      shortDescription: t('projects.items.mortwise.shortDescription'),
      projectUrl: "/mortwise",
      techStack: ["React", "TypeScript", "AI/ML"]
    }
  ];

  const handleCardEnter = (projectId: number) => {
    setHoveredCard(projectId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-light mb-8 text-foreground"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('projects.heading')}
          </motion.h1>
          <p
            className="max-w-3xl text-studio-gray leading-relaxed text-xl"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('projects.description')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group cursor-pointer"
              onMouseEnter={() => handleCardEnter(project.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => {
                if (project.projectUrl.startsWith('/')) {
                  navigate(project.projectUrl);
                } else {
                  window.open(project.projectUrl, '_blank');
                }
              }}
            >
              {/* Media Container */}
              <div className="media-container aspect-[1.2/1] rounded-[2rem] mb-8 overflow-hidden transition-all duration-500 relative">
                 <div className="w-full h-full rounded-xl overflow-hidden shadow-sm relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-video w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="portfolio-video w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                 </div>
              </div>
              
              {/* Content Section (Below the box) */}
              <div className="space-y-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-semibold uppercase tracking-tight text-foreground" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-studio-gray" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    04 / {project.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#f0f0f0] dark:bg-[#252525] text-[#666] dark:text-[#aaa] text-[10px] px-4 py-1.5 rounded-full font-medium uppercase tracking-wider"
                      style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-studio-gray leading-relaxed uppercase tracking-wide max-w-[90%]" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioGrid;