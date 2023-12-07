'use client'
import styles from '@/components/bar/page.module.css'
import React, { useEffect, useState } from 'react';


export default function MovingBar(){
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollY = window.scrollY;
            const progress = (scrollY / scrollTotal) * 100;
            setScrollProgress(progress);
            console.log('dhkfai')
        };
        

        window.addEventListener('scroll', updateScrollProgress);

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);
    return(
        <div className={styles.barcontain}>
            <div className={styles.bar} style={{ width: `${scrollProgress}%` }}></div>
        </div>
    )
}