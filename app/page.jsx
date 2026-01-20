import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Insights from '@/components/Insights';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <ClientLogos />
                <Services />
                <Industries />
                <CaseStudies />
                <Insights />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
