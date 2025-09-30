import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/Common/ScrollToTop";
import { ScrollOnRouteChange } from "./components/Common/ScrollToTopOnRouteChange";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { CountProvider } from "./contexts/CountContext";
import { SalesToast } from "./UI/SalesToast";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CountProvider>
      <div id="app" className="relative">
        <Header />

        <div className="bg-content mt-12 md:mt-28">
          <Outlet />
        </div>
        <Footer />
        {/* <Notications title="Thêm vào giỏ" content="Đã thêm" signal={true} /> */}
        <ScrollToTop />
        <ScrollOnRouteChange />
        <SalesToast />
        <Toaster
          position="top-right"
          containerStyle={{
            zIndex: 9999,
            top: 100, // Tránh đè lên header nếu cần
          }}
        />
      </div>
    </CountProvider>
  );
}

export default App;
