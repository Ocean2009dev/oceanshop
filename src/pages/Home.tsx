import Container from "../components/Layout/Container";
import { FeaturedProducts } from "../components/Sections/FeaturedProducts";
import HeroSection from "../components/Sections/HeroSection";
import { NewsletterSection } from "../components/Sections/NewsletterSection";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <FeaturedProducts />
      <NewsletterSection />
    </Container>
  );
}
