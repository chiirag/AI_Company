import Link from 'next/link';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        industry: 'Retail',
        title: 'AI-Powered Demand Forecasting for Global Retailer',
        description: 'Implemented ML-based demand forecasting reducing stockouts by 45% and improving inventory turnover.',
        metrics: [
            { value: '45%', label: 'Reduction in Stockouts' },
            { value: '$120M', label: 'Inventory Savings' },
            { value: '3x', label: 'Faster Forecasting' },
        ],
        link: '/case-studies/retail-demand-forecasting',
    },
    {
        industry: 'Financial Services',
        title: 'Real-Time Fraud Detection Platform',
        description: 'Built an AI-powered fraud detection system processing millions of transactions with 99.9% accuracy.',
        metrics: [
            { value: '60%', label: 'Faster Detection' },
            { value: '99.9%', label: 'Accuracy Rate' },
            { value: '$50M', label: 'Fraud Prevented' },
        ],
        link: '/case-studies/fraud-detection',
    },
    {
        industry: 'Healthcare',
        title: 'Predictive Patient Care Platform',
        description: 'Developed predictive models for patient readmission risk, enabling proactive care interventions.',
        metrics: [
            { value: '35%', label: 'Lower Readmissions' },
            { value: '20%', label: 'Cost Reduction' },
            { value: '50K+', label: 'Patients Impacted' },
        ],
        link: '/case-studies/patient-care',
    },
];

export default function CaseStudies() {
    return (
        <section className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Case Studies</span>
                    <h2 className={styles.title}>
                        Proven Impact at Scale
                    </h2>
                    <p className={styles.subtitle}>
                        See how we've helped enterprises across industries achieve measurable
                        business outcomes through data and AI transformation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {caseStudies.map((study, index) => (
                        <Link href={study.link} key={index} className={styles.card}>
                            <span className={styles.industry}>{study.industry}</span>
                            <h3 className={styles.cardTitle}>{study.title}</h3>
                            <p className={styles.cardDescription}>{study.description}</p>
                            <div className={styles.metrics}>
                                {study.metrics.map((metric, idx) => (
                                    <div key={idx} className={styles.metric}>
                                        <span className={styles.metricValue}>{metric.value}</span>
                                        <span className={styles.metricLabel}>{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                            <span className={styles.cardLink}>
                                Read Case Study
                                <svg viewBox="0 0 20 20" fill="currentColor" className={styles.arrow}>
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/case-studies" className={styles.ctaButton}>
                        View All Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
}
