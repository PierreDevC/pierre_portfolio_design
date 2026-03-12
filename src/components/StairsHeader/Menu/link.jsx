import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../anim';
import { useRef } from 'react';
import gsap from 'gsap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Asset imports
import heroCard from '@/assets/hero-card.jpg';
import heroPortrait from '@/assets/hero-portrait.jpg';
import projects from '@/assets/projects.jpg';
import calendapp1 from '@/assets/calendapp1.png';
import contact from '@/assets/contact.jpg';
import developer from '@/assets/developer.jpg';

const imageMap = {
    'hero-card.jpg': heroCard,
    'hero-portrait.jpg': heroPortrait,
    'projects.jpg': projects,
    'calendapp1.png': calendapp1,
    'contact.jpg': contact,
    'developer.jpg': developer,
};

export default function MenuLink({data, index, closeMenu}) {
    const { title, description, images, href } = data;
    const outer = useRef(null);
    const inner = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const manageMouseEnter = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.set(outer.current, {top: "-100%"})
            gsap.set(inner.current, {top: "100%"})
        }
        else{
            gsap.set(outer.current, {top: "100%"})
            gsap.set(inner.current, {top: "-100%"})
        }
        gsap.to(outer.current, {top: "0%", duration: 0.3})
        gsap.to(inner.current, {top: "0%",  duration: 0.3})
    }

    const manageMouseLeave = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.to(outer.current, {top: "-100%", duration: 0.3})
            gsap.to(inner.current, {top: "100%",  duration: 0.3})
        }
        else{
            gsap.to(outer.current, {top: "100%", duration: 0.3})
            gsap.to(inner.current, {top: "-100%",  duration: 0.3})
        }
    }

    const handleClick = (e) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const section = href.replace('/', '');
            if (location.pathname === '/') {
                const element = document.querySelector(section);
                element?.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate(href);
            }
            closeMenu();
        } else if (href === '/') {
            if (location.pathname === '/') {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            closeMenu();
        } else {
            closeMenu();
        }
    }

    return (
        <motion.div 
          onMouseEnter={ (e) => {manageMouseEnter(e)}} 
          onMouseLeave={(e) => {manageMouseLeave(e)}} 
          variants={rotateX} 
          {...mountAnim}
          custom={index} 
          className={styles.el}>
            <Link to={href} onClick={handleClick}>{title}</Link>
            <div ref={outer} className={styles.outer}>
                <div ref={inner} className={styles.inner}>

                    {
                        [...Array(2)].map( (_, i) => {
                        return <div key={i} className={styles.container}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={imageMap[images[0]]}
                                    alt="image"
                                />
                            </div>
                            <p>{description}</p>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={imageMap[images[1]]}
                                    alt="image"
                                />
                            </div>
                            <p>{description}</p>
                        </div>
                        })
                    }
                    
                </div>
            </div>

        </motion.div>
    )
}
