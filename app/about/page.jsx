import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import styles from './about.module.css';

export const metadata = {
    title: 'About Us | Qiro AI',
    description: 'Learn about Qiro AI - our mission, leadership, and global presence in AI and data transformation.',
};

const leadership = [
    { name: 'Chirag Jain', title: 'CEO', bio: 'Visionary leader driving enterprise AI transformation with 15+ years of experience.', image: '/team/chirag-jain.jpg' },
    { name: 'Naman Nanda', title: 'CTO', bio: 'Technology strategist with deep expertise in scalable AI/ML systems.', image: 'https://api.dicebear.com/7.x/initials/svg?seed=NN&backgroundColor=7c3aed' },
    { name: 'Chahat Sharma', title: 'CSO', bio: 'Strategic mastermind shaping go-to-market and business development.', image: '/team/chahat-sharma.jpg' },
    { name: 'Lipi Gulati', title: 'CMO', bio: 'Marketing leader building global brand presence and thought leadership.', image: '/team/lipi-gulati.jpg' },
    { name: 'Ajay Sharma', title: 'Head of AI', bio: 'AI pioneer leading innovation in machine learning and generative AI.', image: 'https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=f59e0b' },
    { name: 'Vishal Mehra', title: 'Director AI', bio: 'Expert in deploying production-grade AI solutions for Fortune 500 clients.', image: '/team/vishal-mehra.jpg' },
    { name: 'Amandeep Kaur', title: 'Director Data Science', bio: 'Data science leader driving insights and analytics excellence.', image: '/team/amandeep-kaur.jpg' },
    { name: 'Abhisar Sharma', title: 'Senior Manager, AI', bio: 'AI practitioner delivering impactful solutions across industries.', image: '/team/abhisar-sharma.jpg' },
    { name: 'Anukriti Sahni', title: 'Head HR', bio: 'People champion fostering culture, talent, and organizational growth.', image: 'https://api.dicebear.com/7.x/initials/svg?seed=AnS&backgroundColor=ec4899' },
];

const values = [
    { title: 'Client Obsession', description: 'Every decision starts with what creates most value for our clients.' },
    { title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we deliver.' },
    { title: 'Innovation', description: 'We constantly push boundaries and embrace new technologies.' },
    { title: 'Integrity', description: 'We do what\'s right, even when no one is watching.' },
];

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Enterprise Clients' },
    { value: '3,000+', label: 'Data Professionals' },
    { value: '12', label: 'Global Offices' },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>About Us</span>
                        <h1 className={styles.title}>Transforming Enterprises with AI</h1>
                        <p className={styles.subtitle}>
                            We are a team of data scientists, engineers, and strategists passionate
                            about helping enterprises unlock the full potential of their data.
                        </p>
                    </div>
                </section>

                <section className={styles.mission}>
                    <div className={styles.container}>
                        <div className={styles.missionGrid}>
                            <div className={styles.missionContent}>
                                <h2 className={styles.sectionTitle}>Our Mission</h2>
                                <p className={styles.missionText}>
                                    To bridge the gap between data insights and business value by enabling
                                    enterprises to make smarter, faster decisions through AI and advanced analytics.
                                </p>
                                <p className={styles.missionText}>
                                    We believe that every organization has untapped potential in their data.
                                    Our mission is to help them realize that potential and turn it into
                                    competitive advantage.
                                </p>
                            </div>
                            <div className={styles.statsGrid}>
                                {stats.map((stat, index) => (
                                    <div key={index} className={styles.stat}>
                                        <span className={styles.statValue}>{stat.value}</span>
                                        <span className={styles.statLabel}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.values}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Our Values</h2>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => (
                                <div key={index} className={styles.valueCard}>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDescription}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.leadership}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Leadership Team</h2>
                        <div className={styles.leadershipGrid}>
                            {leadership.map((leader, index) => (
                                <div key={index} className={styles.leaderCard}>
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className={styles.leaderAvatar}
                                    />
                                    <h3 className={styles.leaderName}>{leader.name}</h3>
                                    <p className={styles.leaderTitle}>{leader.title}</p>
                                    <p className={styles.leaderBio}>{leader.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.global}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Global Presence</h2>
                        <p className={styles.globalText}>
                            With offices across North America, Europe, and Asia-Pacific, we deliver
                            world-class solutions to enterprises worldwide.
                        </p>
                        <div className={styles.locations}>
                            <span>Gurugram</span>
                            <span>New York</span>
                            <span>London</span>
                            <span>Singapore</span>
                            <span>Bengaluru</span>
                            <span>Sydney</span>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
