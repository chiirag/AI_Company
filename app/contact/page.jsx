'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

// Web3Forms access key - get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '0a2c2f0d-ea20-4450-88cb-006402bfb65a';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        interest: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    to: 'Chiragjaintohana@gmail.com',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    subject: `New Lead: ${formData.company} - ${formData.interest}`,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    company: formData.company,
                    jobTitle: formData.jobTitle,
                    interest: formData.interest,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    jobTitle: '',
                    interest: '',
                    message: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Contact Us</span>
                        <h1 className={styles.title}>Let's Start a Conversation</h1>
                        <p className={styles.subtitle}>
                            Ready to transform your business with AI? Our experts are here to help
                            you navigate your data and AI journey.
                        </p>
                    </div>
                </section>

                <section className={styles.contact}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.formSection}>
                                <h2 className={styles.formTitle}>Talk to an Expert</h2>

                                {submitStatus === 'success' && (
                                    <div className={styles.successMessage}>
                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        Thank you! Our team will be in touch shortly.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className={styles.errorMessage}>
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Work Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="company">Company *</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="jobTitle">Job Title</label>
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="interest">Area of Interest *</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select an area</option>
                                            <option value="AI/ML Solutions">AI/ML Solutions</option>
                                            <option value="Data Engineering">Data Engineering</option>
                                            <option value="Generative AI">Generative AI</option>
                                            <option value="Analytics & BI">Analytics & BI</option>
                                            <option value="Cloud Modernization">Cloud Modernization</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">How can we help? *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Request'}
                                    </button>
                                </form>
                            </div>

                            <div className={styles.infoSection}>
                                <div className={styles.infoCard}>
                                    <h3>Why Choose NexusAI?</h3>
                                    <ul className={styles.trustList}>
                                        <li>
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            500+ Enterprise Clients
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            98% Client Retention Rate
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            Industry Leader Recognition
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            $2.5B+ Business Impact
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.contactInfo}>
                                    <h3>Other Ways to Reach Us</h3>
                                    <div className={styles.contactItem}>
                                        <span className={styles.contactLabel}>Email</span>
                                        <a href="mailto:Chiragjaintohana@gmail.com">Chiragjaintohana@gmail.com</a>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <span className={styles.contactLabel}>Phone</span>
                                        <a href="tel:+918059492654">+91 80594 92654</a>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <span className={styles.contactLabel}>Headquarters</span>
                                        <p>412, AKD Towers, Sector 14<br />Gurugram, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
