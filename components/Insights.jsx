import Link from 'next/link';
import styles from './Insights.module.css';

const insights = [
    {
        type: 'Article',
        title: 'The Future of Agentic AI in Enterprise Decision-Making',
        excerpt: 'How autonomous AI agents are reshaping enterprise operations and enabling real-time decision intelligence.',
        date: 'Jan 15, 2026',
        readTime: '8 min read',
        link: '/insights/agentic-ai-enterprise',
    },
    {
        type: 'Whitepaper',
        title: 'Building a Data-First Culture: A CDAO Playbook',
        excerpt: 'Strategic frameworks and practical guidance for Chief Data Officers driving organizational transformation.',
        date: 'Jan 10, 2026',
        readTime: '15 min read',
        link: '/insights/data-first-culture',
    },
    {
        type: 'Case Study',
        title: 'How AI Transformed Supply Chain Resilience',
        excerpt: 'Real-world lessons from implementing AI-powered supply chain optimization for a Fortune 100 manufacturer.',
        date: 'Jan 5, 2026',
        readTime: '6 min read',
        link: '/insights/supply-chain-ai',
    },
];

export default function Insights() {
    return (
        <section className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <span className={styles.eyebrow}>Insights & Thought Leadership</span>
                        <h2 className={styles.title}>
                            Stay Ahead with Expert Perspectives
                        </h2>
                    </div>
                    <Link href="/insights" className={styles.viewAll}>
                        View All Insights
                        <svg viewBox="0 0 20 20" fill="currentColor" className={styles.arrow}>
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

                <div className={styles.grid}>
                    {insights.map((insight, index) => (
                        <Link href={insight.link} key={index} className={styles.card}>
                            <div className={styles.cardMeta}>
                                <span className={styles.type}>{insight.type}</span>
                                <span className={styles.date}>{insight.date}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{insight.title}</h3>
                            <p className={styles.cardExcerpt}>{insight.excerpt}</p>
                            <span className={styles.readTime}>{insight.readTime}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
