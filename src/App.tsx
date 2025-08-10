import { ScrollToTop } from "./components/Common/ScrollToTop";
import { ScrollOnRouteChange } from "./components/Common/ScrollToTopOnRouteChange";
import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app" className="relative">
      <Header />
      <div className="bg-content">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
      <ScrollToTop />
      <ScrollOnRouteChange />
    </div>
  );
}

export default App;
