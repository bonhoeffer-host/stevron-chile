import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import LaunchFocus from '@/components/LaunchFocus';
import Catalogue from '@/components/Catalogue';
import OneSection from '@/components/OneSection';
import Proof from '@/components/Proof';
import Support from '@/components/Support';
import Distributor from '@/components/Distributor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <LaunchFocus />
        <Catalogue />
        <OneSection />
        <Proof />
        <Support />
        <Distributor />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
