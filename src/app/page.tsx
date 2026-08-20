import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { Customization } from "@/components/Customization";
import { QrNfc } from "@/components/QrNfc";
import { UseCases } from "@/components/UseCases";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <HowItWorks />
        <Gallery />
        <Customization />
        <QrNfc />
        <UseCases />
        <Testimonial />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
