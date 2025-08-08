import { FeaturedProducts } from "../components/Sections/FeaturedProducts";
import HeroSection from "../components/Sections/HeroSection";
import { NewsletterSection } from "../components/Sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <NewsletterSection />
    </>
  );
}
