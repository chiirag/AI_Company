import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={`${styles.section} scroll-animate`}>
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridPattern}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className={styles.subtitle}>
                        Let's discuss how our AI and data solutions can drive measurable
                        outcomes for your organization.
                    </p>
                    <div className={styles.ctas}>
                        <Link href="/contact" className={styles.primaryCta}>
                            Schedule a Consultation
                            <svg viewBox="0 0 20 20" fill="currentColor" className={styles.ctaIcon}>
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href="/case-studies" className={styles.secondaryCta}>
                            View Success Stories
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
