import { Inter } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';
import ScrollObserver from '@/components/ScrollObserver';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    title: 'Qiro AI | Enterprise AI & Analytics Solutions',
    description: 'Transform your business with enterprise-grade AI, analytics, and data engineering solutions. Drive measurable outcomes with our industry-leading expertise.',
    keywords: 'AI consulting, data analytics, machine learning, enterprise AI, digital transformation, data engineering',
    openGraph: {
        title: 'Qiro AI | Enterprise AI & Analytics Solutions',
        description: 'Transform your business with enterprise-grade AI, analytics, and data engineering solutions.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <ScrollObserver />
                {children}
                <ChatWidget />
            </body>
        </html>
    );
}
