import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import ComparisonSection from '@/components/ComparisonSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ROICalculator from '@/components/ROICalculator';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-all duration-300">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <ROICalculator />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
