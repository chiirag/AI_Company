import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import styles from './services.module.css';

export const metadata = {
    title: 'Services | NexusAI',
    description: 'Comprehensive AI, data engineering, analytics, and cloud solutions for enterprise transformation.',
};

const services = [
    {
        id: 'ai-ml',
        title: 'AI/ML Solutions',
        description: 'Custom machine learning models and AI solutions that drive measurable business outcomes.',
        features: [
            'Predictive Analytics & Forecasting',
            'Computer Vision & NLP',
            'Recommendation Systems',
            'Anomaly Detection',
            'MLOps & Model Management',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
    },
    {
        id: 'data-engineering',
        title: 'Data Engineering',
        description: 'Build robust data pipelines and modern data platforms that scale with your enterprise needs.',
        features: [
            'Data Pipeline Development',
            'Data Lake & Warehouse Architecture',
            'Real-time Streaming',
            'Data Quality & Governance',
            'ETL/ELT Modernization',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
    },
    {
        id: 'genai',
        title: 'Generative AI',
        description: 'Harness the power of GenAI with enterprise-ready solutions, from strategy to production.',
        features: [
            'LLM Strategy & Selection',
            'RAG Implementation',
            'AI Agents & Copilots',
            'Prompt Engineering',
            'GenAI Governance & Safety',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
    },
    {
        id: 'cloud',
        title: 'Cloud Modernization',
        description: 'Migrate and modernize your infrastructure with cloud-native architectures and best practices.',
        features: [
            'Cloud Migration Strategy',
            'Multi-cloud Architecture',
            'Kubernetes & Containerization',
            'Cloud Cost Optimization',
            'Infrastructure as Code',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
    },
    {
        id: 'analytics',
        title: 'Analytics & BI',
        description: 'Transform raw data into actionable insights with advanced analytics and business intelligence.',
        features: [
            'Self-Service Analytics',
            'Executive Dashboards',
            'Advanced Visualization',
            'Embedded Analytics',
            'Analytics Enablement',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        id: 'decision-intelligence',
        title: 'Decision Intelligence',
        description: 'Enable smarter, faster decisions with AI-powered decision support systems and automation.',
        features: [
            'Decision Automation',
            'Optimization Engines',
            'Simulation & Scenario Planning',
            'Real-time Decisioning',
            'Prescriptive Analytics',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Our Services</span>
                        <h1 className={styles.title}>End-to-End AI & Data Solutions</h1>
                        <p className={styles.subtitle}>
                            From strategy to implementation, we deliver comprehensive solutions that transform
                            how enterprises leverage data and AI for competitive advantage.
                        </p>
                    </div>
                </section>

                <section className={styles.services}>
                    <div className={styles.container}>
                        {services.map((service, index) => (
                            <div key={service.id} id={service.id} className={styles.serviceCard}>
                                <div className={styles.serviceContent}>
                                    <div className={styles.iconWrapper}>
                                        {service.icon}
                                    </div>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <ul className={styles.features}>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className={styles.feature}>
                                                <svg viewBox="0 0 20 20" fill="currentColor" className={styles.checkIcon}>
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
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
