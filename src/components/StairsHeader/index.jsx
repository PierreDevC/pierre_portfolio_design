'use client';
import {useState} from 'react'
import styles from './style.module.scss';
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function StairsHeader() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                Pierre
            </Link>
            <Burger 
                isOpen={menuIsOpen} 
                toggleMenu={() => {setMenuIsOpen(!menuIsOpen)}}
            />
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}
