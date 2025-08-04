import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { FeaturedProducts } from "./components/Sections/FeaturedProducts";
import HeroSection from "./components/Sections/HeroSection";
import { NewsletterSection } from "./components/Sections/NewsletterSection";

function App() {
  return (
    <div id="app">
      <Header />
      <div className="bg-content">
        <Container>
          <HeroSection />

          <FeaturedProducts />

          <NewsletterSection />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
