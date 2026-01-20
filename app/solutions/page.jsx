import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import styles from './solutions.module.css';

export const metadata = {
    title: 'Solutions | NexusAI',
    description: 'Use-case driven AI solutions for personalization, forecasting, optimization, and automation.',
};

const solutions = [
    {
        title: 'Customer Personalization',
        description: 'Deliver hyper-personalized experiences at scale with AI-powered customer intelligence.',
        benefits: ['Increased conversion rates', 'Higher customer lifetime value', 'Improved engagement'],
        useCases: ['Product recommendations', 'Dynamic pricing', 'Personalized content', 'Next-best-action'],
    },
    {
        title: 'Demand Forecasting',
        description: 'Predict demand with unprecedented accuracy using advanced ML and external signals.',
        benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved service levels'],
        useCases: ['Sales forecasting', 'Inventory planning', 'Workforce scheduling', 'Capacity planning'],
    },
    {
        title: 'Supply Chain Optimization',
        description: 'Build resilient, efficient supply chains with end-to-end visibility and AI-driven optimization.',
        benefits: ['Lower logistics costs', 'Faster delivery times', 'Better supplier management'],
        useCases: ['Route optimization', 'Supplier risk management', 'Warehouse optimization', 'Demand sensing'],
    },
    {
        title: 'Process Automation',
        description: 'Automate complex business processes with intelligent document processing and AI agents.',
        benefits: ['Reduced operational costs', 'Faster processing times', 'Improved accuracy'],
        useCases: ['Document processing', 'Claims automation', 'Customer service AI', 'Workflow automation'],
    },
    {
        title: 'Fraud Detection',
        description: 'Detect and prevent fraud in real-time with advanced anomaly detection and ML models.',
        benefits: ['Reduced fraud losses', 'Lower false positives', 'Faster detection'],
        useCases: ['Transaction monitoring', 'Identity verification', 'Claims fraud', 'AML compliance'],
    },
    {
        title: 'Predictive Maintenance',
        description: 'Minimize downtime and extend asset life with AI-powered predictive maintenance.',
        benefits: ['Reduced unplanned downtime', 'Lower maintenance costs', 'Extended asset life'],
        useCases: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Parts optimization'],
    },
];

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Solutions</span>
                        <h1 className={styles.title}>AI Solutions for Real Business Challenges</h1>
                        <p className={styles.subtitle}>
                            Proven AI and analytics solutions designed to deliver measurable
                            business outcomes across the enterprise.
                        </p>
                    </div>
                </section>

                <section className={styles.solutions}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            {solutions.map((solution, index) => (
                                <div key={index} className={styles.card}>
                                    <h2 className={styles.cardTitle}>{solution.title}</h2>
                                    <p className={styles.cardDescription}>{solution.description}</p>

                                    <div className={styles.section}>
                                        <h3 className={styles.sectionTitle}>Business Benefits</h3>
                                        <ul className={styles.benefits}>
                                            {solution.benefits.map((benefit, idx) => (
                                                <li key={idx}>
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className={styles.checkIcon}>
                                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                    </svg>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.section}>
                                        <h3 className={styles.sectionTitle}>Use Cases</h3>
                                        <div className={styles.useCases}>
                                            {solution.useCases.map((useCase, idx) => (
                                                <span key={idx} className={styles.useCase}>{useCase}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/contact" className={styles.learnMore}>
                                        Learn More
                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
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
