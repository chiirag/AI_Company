import styles from './ClientLogos.module.css';

const clients = [
    'Fortune 500 Retail',
    'Global Bank',
    'Healthcare Leader',
    'Tech Enterprise',
    'Manufacturing Giant',
    'CPG Innovator',
];

export default function ClientLogos() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.label}>Trusted by leading enterprises worldwide</p>
                <div className={styles.logoTrack}>
                    <div className={styles.logos}>
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className={styles.logo}>
                                <div className={styles.logoInner}>{client}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
