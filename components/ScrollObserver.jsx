'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // precise timing to ensure DOM is ready after navigation
        const timeoutId = setTimeout(() => {
            const animatedElements = document.querySelectorAll('.scroll-animate');
            animatedElements.forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [pathname]); // Re-run effect when pathname changes

    return null;
}
