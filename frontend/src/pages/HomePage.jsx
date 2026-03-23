import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DemoSection from "../components/home/DemoSection";
import SocialProofSection from "../components/home/SocialProofSection";
import PricingSection from "../components/home/PricingSection";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoSection />
      <SocialProofSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
