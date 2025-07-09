import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import HeroSlider from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import PartnersSection from "@/components/sections/PartnersSection";
import Services from "@/components/sections/ServicesSection";
import SourceProductsCTA from "@/components/sections/SourceCTA";
import BeautyCategories from "@/components/ecommerce/BeautyCategories";
import { useTranslations } from "next-intl";

export default function Home() {
  //   {
  //   params,
  // }: {
  //   params: Promise<{ lang: "en" | "uz" | "ru" }>;
  // }
  // const { lang } = await params;
  // const dict = await getDictionary(lang);
  const t = useTranslations();
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Services />
      <PartnersSection />
      <OurStorySection />
      <SourceProductsCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
