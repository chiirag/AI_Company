import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import styles from './casestudies.module.css';

export const metadata = {
    title: 'Case Studies | NexusAI',
    description: 'Explore our success stories with measurable business outcomes across industries.',
};

const caseStudies = [
    {
        industry: 'Retail',
        title: 'AI-Powered Demand Forecasting for Global Retailer',
        client: 'Fortune 100 Retailer',
        challenge: 'Struggling with stockouts and overstock situations costing millions annually.',
        solution: 'Implemented ML-based demand forecasting with external signal integration.',
        metrics: [
            { value: '45%', label: 'Reduction in Stockouts' },
            { value: '$120M', label: 'Inventory Savings' },
            { value: '3x', label: 'Faster Forecasting' },
        ],
    },
    {
        industry: 'Financial Services',
        title: 'Real-Time Fraud Detection Platform',
        client: 'Top 10 US Bank',
        challenge: 'Legacy fraud systems missing sophisticated attacks with high false positives.',
        solution: 'Built AI-powered fraud detection processing millions of transactions in real-time.',
        metrics: [
            { value: '60%', label: 'Faster Detection' },
            { value: '99.9%', label: 'Accuracy Rate' },
            { value: '$50M', label: 'Fraud Prevented' },
        ],
    },
    {
        industry: 'Healthcare',
        title: 'Predictive Patient Care Platform',
        client: 'Major Health System',
        challenge: 'High readmission rates impacting patient outcomes and costs.',
        solution: 'Developed predictive models for patient readmission risk with care intervention triggers.',
        metrics: [
            { value: '35%', label: 'Lower Readmissions' },
            { value: '20%', label: 'Cost Reduction' },
            { value: '50K+', label: 'Patients Impacted' },
        ],
    },
    {
        industry: 'Manufacturing',
        title: 'Predictive Maintenance for Industrial Leader',
        client: 'Global Manufacturer',
        challenge: 'Unplanned downtime causing significant production losses and maintenance costs.',
        solution: 'IoT-enabled predictive maintenance with ML-based failure prediction.',
        metrics: [
            { value: '40%', label: 'Less Downtime' },
            { value: '$30M', label: 'Annual Savings' },
            { value: '25%', label: 'Extended Asset Life' },
        ],
    },
    {
        industry: 'CPG',
        title: 'Trade Promotion Optimization',
        client: 'Leading CPG Company',
        challenge: 'Poor ROI on trade promotions with limited visibility into effectiveness.',
        solution: 'AI-powered trade promotion optimization with scenario simulation.',
        metrics: [
            { value: '30%', label: 'Lift in ROI' },
            { value: '15%', label: 'Budget Optimization' },
            { value: '4x', label: 'Faster Planning' },
        ],
    },
    {
        industry: 'Retail',
        title: 'Customer Personalization Engine',
        client: 'E-commerce Leader',
        challenge: 'Generic customer experiences leading to low conversion and engagement.',
        solution: 'Real-time personalization engine across all customer touchpoints.',
        metrics: [
            { value: '25%', label: 'Higher Conversion' },
            { value: '40%', label: 'More Engagement' },
            { value: '$80M', label: 'Revenue Impact' },
        ],
    },
];

export default function CaseStudiesPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Case Studies</span>
                        <h1 className={styles.title}>Proven Impact at Scale</h1>
                        <p className={styles.subtitle}>
                            See how we've helped enterprises across industries achieve measurable
                            business outcomes through data and AI transformation.
                        </p>
                    </div>
                </section>

                <section className={styles.caseStudies}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            {caseStudies.map((study, index) => (
                                <div key={index} className={styles.card}>
                                    <span className={styles.industry}>{study.industry}</span>
                                    <h2 className={styles.cardTitle}>{study.title}</h2>
                                    <p className={styles.client}>{study.client}</p>

                                    <div className={styles.section}>
                                        <h3 className={styles.sectionLabel}>Challenge</h3>
                                        <p className={styles.sectionText}>{study.challenge}</p>
                                    </div>

                                    <div className={styles.section}>
                                        <h3 className={styles.sectionLabel}>Solution</h3>
                                        <p className={styles.sectionText}>{study.solution}</p>
                                    </div>

                                    <div className={styles.metrics}>
                                        {study.metrics.map((metric, idx) => (
                                            <div key={idx} className={styles.metric}>
                                                <span className={styles.metricValue}>{metric.value}</span>
                                                <span className={styles.metricLabel}>{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
