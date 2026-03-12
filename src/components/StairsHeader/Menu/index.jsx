import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import MenuLink from './link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Menu({closeMenu}) {
  const { t } = useTranslation();

  const menuItems = [
    {
      title: t('navbar.links.home'),
      description: "Return to homepage",
      href: "/",
      images: ['hero-card.jpg', 'hero-portrait.jpg']
    }
  ]

  return (
    <motion.div 
      className={styles.menu} 
      variants={opacity} 
      initial="initial" 
      animate="enter" 
      exit="exit"
      onClick={closeMenu}
    >
        {/* Close Button Header */}
        <div className={styles.header} onClick={(e) => e.stopPropagation()}>
          <motion.div 
            variants={slideLeft} 
            {...mountAnim}
            onClick={closeMenu}
            className={styles.closeButton}
          >
            <svg 
              width="68" 
              height="68" 
              viewBox="0 0 68 68" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L67 67" stroke="white" strokeWidth="2"/>
                <path d="M66.5 1L0.999997 66.5" stroke="white" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>

        {/* Menu Body */}
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          {
            menuItems.map( (el, index) => {
              return <MenuLink data={el} index={index} key={index} closeMenu={closeMenu}/>
            })
          }
        </div>

        {/* Footer */}
        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}
          onClick={(e) => e.stopPropagation()}
        >
          <a href="https://github.com/PierreDevC" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.behance.net/pierre-cypr" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="https://www.linkedin.com/in/pierre-sylvestre-cypre/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </motion.div>

    </motion.div>
  )
}
