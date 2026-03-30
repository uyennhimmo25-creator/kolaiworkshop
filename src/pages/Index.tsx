import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SpeakerSection from "@/components/SpeakerSection";
import VideoTestimonial from "@/components/VideoTestimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SpeakerSection />
      <VideoTestimonial />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
