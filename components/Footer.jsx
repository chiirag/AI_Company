import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
    services: [
        { name: 'AI/ML Solutions', href: '/services#ai-ml' },
        { name: 'Data Engineering', href: '/services#data-engineering' },
        { name: 'Generative AI', href: '/services#genai' },
        { name: 'Cloud Modernization', href: '/services#cloud' },
        { name: 'Analytics', href: '/services#analytics' },
    ],
    industries: [
        { name: 'Retail', href: '/industries#retail' },
        { name: 'Financial Services', href: '/industries#bfsi' },
        { name: 'Healthcare', href: '/industries#healthcare' },
        { name: 'Manufacturing', href: '/industries#manufacturing' },
        { name: 'CPG', href: '/industries#cpg' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Insights', href: '/insights' },
        { name: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="url(#footer-logo-gradient)" strokeWidth="3" />
                                    <path d="M12 20L18 26L28 14" stroke="url(#footer-logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40">
                                            <stop stopColor="#2563eb" />
                                            <stop offset="1" stopColor="#7c3aed" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className={styles.logoText}>NexusAI</span>
                        </Link>
                        <p className={styles.tagline}>
                            Transforming enterprises with AI-powered insights and data-driven decision intelligence.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Services</h4>
                            <ul>
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Industries</h4>
                            <ul>
                                {footerLinks.industries.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Company</h4>
                            <ul>
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} NexusAI. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
                        <Link href="/cookies" className={styles.legalLink}>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
