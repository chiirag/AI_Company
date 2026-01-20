'use client';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridPattern}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Trusted by Fortune 500 Leaders
                    </div>

                    <h1 className={styles.title}>
                        Transform Data Into
                        <span className={styles.highlight}> Competitive Advantage</span>
                    </h1>

                    <p className={styles.subtitle}>
                        We help enterprises harness the power of AI and advanced analytics to drive
                        measurable business outcomes. From strategy to scale, we deliver end-to-end
                        data transformation.
                    </p>

                    <div className={styles.ctas}>
                        <Link href="/contact" className={styles.primaryCta}>
                            Talk to an Expert
                            <svg viewBox="0 0 20 20" fill="currentColor" className={styles.ctaIcon}>
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href="/solutions" className={styles.secondaryCta}>
                            Explore Solutions
                        </Link>
                    </div>

                    <div className={styles.trust}>
                        <span className={styles.trustLabel}>Trusted by industry leaders:</span>
                        <div className={styles.logos}>
                            <div className={styles.logoPlaceholder}>Fortune 100</div>
                            <div className={styles.logoPlaceholder}>Global Bank</div>
                            <div className={styles.logoPlaceholder}>Tech Giant</div>
                            <div className={styles.logoPlaceholder}>Retail Leader</div>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.visualInner}>
                        <div className={styles.dataViz}>
                            <div className={styles.vizOrb}></div>
                            <div className={styles.vizRing1}></div>
                            <div className={styles.vizRing2}></div>
                            <div className={styles.vizRing3}></div>
                            <div className={styles.vizDot} style={{ '--delay': '0s', '--angle': '0deg' }}></div>
                            <div className={styles.vizDot} style={{ '--delay': '0.5s', '--angle': '72deg' }}></div>
                            <div className={styles.vizDot} style={{ '--delay': '1s', '--angle': '144deg' }}></div>
                            <div className={styles.vizDot} style={{ '--delay': '1.5s', '--angle': '216deg' }}></div>
                            <div className={styles.vizDot} style={{ '--delay': '2s', '--angle': '288deg' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
