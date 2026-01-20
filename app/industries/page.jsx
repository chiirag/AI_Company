import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import styles from './industries.module.css';

export const metadata = {
    title: 'Industries | NexusAI',
    description: 'Deep expertise across Retail, CPG, Financial Services, Healthcare, and Manufacturing sectors.',
};

const industries = [
    {
        id: 'retail',
        name: 'Retail',
        description: 'Transform customer experiences with AI-powered personalization, demand forecasting, and inventory optimization.',
        challenges: [
            'Omnichannel customer experience',
            'Inventory optimization',
            'Personalized marketing',
            'Supply chain visibility',
        ],
        solutions: [
            'AI-powered demand forecasting',
            'Personalization engines',
            'Price optimization',
            'Inventory management AI',
        ],
        stats: { value: '40%', label: 'improvement in forecast accuracy' },
    },
    {
        id: 'bfsi',
        name: 'Financial Services',
        description: 'Drive growth with AI solutions for risk management, fraud detection, and personalized banking experiences.',
        challenges: [
            'Fraud detection & prevention',
            'Regulatory compliance',
            'Customer retention',
            'Risk assessment',
        ],
        solutions: [
            'Real-time fraud detection',
            'Credit risk modeling',
            'Customer 360 analytics',
            'RegTech automation',
        ],
        stats: { value: '60%', label: 'faster fraud detection' },
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Improve patient outcomes with predictive analytics, operational efficiency, and data-driven care delivery.',
        challenges: [
            'Patient readmission reduction',
            'Operational efficiency',
            'Clinical decision support',
            'Population health management',
        ],
        solutions: [
            'Predictive patient care',
            'Clinical NLP & documentation',
            'Resource optimization',
            'Care pathway analytics',
        ],
        stats: { value: '35%', label: 'reduction in readmissions' },
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        description: 'Optimize operations with predictive maintenance, supply chain visibility, and quality analytics.',
        challenges: [
            'Equipment downtime',
            'Quality control',
            'Supply chain disruption',
            'Energy optimization',
        ],
        solutions: [
            'Predictive maintenance',
            'Computer vision QC',
            'Supply chain control tower',
            'Energy analytics',
        ],
        stats: { value: '25%', label: 'increase in OEE' },
    },
    {
        id: 'cpg',
        name: 'CPG',
        description: 'Accelerate growth with demand sensing, trade promotion optimization, and consumer insights.',
        challenges: [
            'Demand volatility',
            'Trade promotion ROI',
            'Consumer insights',
            'New product launches',
        ],
        solutions: [
            'Demand sensing AI',
            'Trade promotion optimization',
            'Consumer analytics',
            'Assortment optimization',
        ],
        stats: { value: '30%', label: 'lift in promotional ROI' },
    },
];

export default function IndustriesPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Industries</span>
                        <h1 className={styles.title}>Deep Expertise Across Sectors</h1>
                        <p className={styles.subtitle}>
                            We bring proven industry knowledge and specialized solutions to help
                            enterprises in every sector unlock the value of their data.
                        </p>
                    </div>
                </section>

                <section className={styles.industries}>
                    <div className={styles.container}>
                        {industries.map((industry) => (
                            <div key={industry.id} id={industry.id} className={styles.industryCard}>
                                <div className={styles.industryHeader}>
                                    <h2 className={styles.industryName}>{industry.name}</h2>
                                    <div className={styles.stat}>
                                        <span className={styles.statValue}>{industry.stats.value}</span>
                                        <span className={styles.statLabel}>{industry.stats.label}</span>
                                    </div>
                                </div>

                                <p className={styles.industryDescription}>{industry.description}</p>

                                <div className={styles.columns}>
                                    <div className={styles.column}>
                                        <h3 className={styles.columnTitle}>Key Challenges</h3>
                                        <ul className={styles.list}>
                                            {industry.challenges.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.column}>
                                        <h3 className={styles.columnTitle}>Our Solutions</h3>
                                        <ul className={styles.list}>
                                            {industry.solutions.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
