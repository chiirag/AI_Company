import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './careers.module.css';

export const metadata = {
    title: 'Careers | Qiro AI',
    description: 'Join our team of innovators and help shape the future of AI and analytics.',
};

const benefits = [
    { title: 'Competitive Compensation', description: 'Industry-leading salaries, equity, and bonuses.' },
    { title: 'Remote-First Culture', description: 'Work from anywhere with flexible hours.' },
    { title: 'Learning & Development', description: 'Annual learning budget and conference attendance.' },
    { title: 'Health & Wellness', description: 'Comprehensive healthcare and wellness programs.' },
    { title: 'Parental Leave', description: 'Generous parental leave for all parents.' },
    { title: 'Team Offsites', description: 'Regular team gatherings across the globe.' },
];

const openings = [
    { title: 'Senior Data Scientist', location: 'Remote / San Francisco', type: 'Full-time', department: 'Data Science' },
    { title: 'ML Engineer', location: 'Remote / New York', type: 'Full-time', department: 'Engineering' },
    { title: 'Solutions Architect', location: 'Remote / London', type: 'Full-time', department: 'Consulting' },
    { title: 'Product Manager - AI Platform', location: 'San Francisco', type: 'Full-time', department: 'Product' },
    { title: 'Data Engineer', location: 'Remote / Bangalore', type: 'Full-time', department: 'Engineering' },
    { title: 'GenAI Specialist', location: 'Remote', type: 'Full-time', department: 'Data Science' },
];

export default function CareersPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Careers</span>
                        <h1 className={styles.title}>Build the Future of AI With Us</h1>
                        <p className={styles.subtitle}>
                            Join a team of world-class data scientists, engineers, and consultants
                            solving the most complex challenges in AI and analytics.
                        </p>
                        <Link href="#openings" className={styles.heroButton}>
                            View Open Positions
                        </Link>
                    </div>
                </section>

                <section className={styles.culture}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Why Qiro AI?</h2>
                        <div className={styles.cultureGrid}>
                            <div className={styles.cultureCard}>
                                <h3>Work on Impactful Problems</h3>
                                <p>Solve real business challenges for Fortune 500 companies using cutting-edge AI.</p>
                            </div>
                            <div className={styles.cultureCard}>
                                <h3>Continuous Learning</h3>
                                <p>Stay at the forefront of technology with our culture of innovation and learning.</p>
                            </div>
                            <div className={styles.cultureCard}>
                                <h3>Diverse & Inclusive</h3>
                                <p>Be part of a global team that values diverse perspectives and backgrounds.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.benefits}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Benefits & Perks</h2>
                        <div className={styles.benefitsGrid}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="openings" className={styles.openings}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Open Positions</h2>
                        <div className={styles.jobList}>
                            {openings.map((job, index) => (
                                <Link href="/contact" key={index} className={styles.jobCard}>
                                    <div className={styles.jobInfo}>
                                        <h3 className={styles.jobTitle}>{job.title}</h3>
                                        <div className={styles.jobMeta}>
                                            <span>{job.department}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <svg viewBox="0 0 20 20" fill="currentColor" className={styles.arrow}>
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
