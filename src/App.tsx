import { ScrollToTop } from "./components/Common/ScrollToTop";
import { ScrollOnRouteChange } from "./components/Common/ScrollToTopOnRouteChange";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { Outlet } from "react-router-dom";
import { SalesToast } from "./UI/SalesToast";

function App() {
  return (
    <div id="app" className="relative">
      <Header />
      <div className="bg-content mt-12 md:mt-28">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
      <ScrollOnRouteChange />
      <SalesToast />
    </div>
  );
}

export default App;
