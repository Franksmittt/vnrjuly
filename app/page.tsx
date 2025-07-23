import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import InsightsSection from "../components/InsightsSection"; // Import the new section
import CtaSection from "../components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TeamSection />
      <ServicesSection />
      <InsightsSection /> {/* Add it here */}
      <CtaSection />
    </>
  );
}