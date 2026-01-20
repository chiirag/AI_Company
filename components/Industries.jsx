import Link from 'next/link';
import styles from './Industries.module.css';

const industries = [
    {
        name: 'Retail',
        description: 'Transform customer experiences with AI-powered personalization, demand forecasting, and inventory optimization.',
        icon: '🛒',
        stats: '40% improvement in forecast accuracy',
        link: '/industries#retail',
    },
    {
        name: 'Financial Services',
        description: 'Drive growth with AI solutions for risk management, fraud detection, and personalized banking experiences.',
        icon: '🏦',
        stats: '60% faster fraud detection',
        link: '/industries#bfsi',
    },
    {
        name: 'Healthcare',
        description: 'Improve patient outcomes with predictive analytics, operational efficiency, and data-driven care delivery.',
        icon: '🏥',
        stats: '35% reduction in readmissions',
        link: '/industries#healthcare',
    },
    {
        name: 'Manufacturing',
        description: 'Optimize operations with predictive maintenance, supply chain visibility, and quality analytics.',
        icon: '🏭',
        stats: '25% increase in OEE',
        link: '/industries#manufacturing',
    },
    {
        name: 'CPG',
        description: 'Accelerate growth with demand sensing, trade promotion optimization, and consumer insights.',
        icon: '📦',
        stats: '30% lift in promotional ROI',
        link: '/industries#cpg',
    },
];

export default function Industries() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Industries We Serve</span>
                    <h2 className={styles.title}>
                        Deep Expertise Across Sectors
                    </h2>
                    <p className={styles.subtitle}>
                        We bring proven industry knowledge and specialized solutions to help
                        enterprises in every sector unlock the value of their data.
                    </p>
                </div>

                <div className={styles.grid}>
                    {industries.map((industry, index) => (
                        <Link href={industry.link} key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{industry.icon}</span>
                                <h3 className={styles.cardTitle}>{industry.name}</h3>
                            </div>
                            <p className={styles.cardDescription}>{industry.description}</p>
                            <div className={styles.cardStats}>
                                <span className={styles.statsValue}>{industry.stats}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/industries" className={styles.ctaButton}>
                        View All Industries
                    </Link>
                </div>
            </div>
        </section>
    );
}
