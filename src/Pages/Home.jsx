import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import TrustBar from "../Components/TrustBar";
import About from "../Components/About";
import VisionMission from "../Components/VisionMission";
import Services from "../Components/Services";
import WorkshopGallery from "../Components/WorkshopGallery";
import Testimonials from "../Components/Testimonials";
import CTABanner from "../Components/CTABanner";
import Footer from "../Components/Footer";
import { useFadeUp } from "../Hooks/useFadeUp";

const Home = () => {
  useFadeUp();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <TrustBar />

        <div data-fade-up>
          <About />
        </div>

        <div data-fade-up>
          <VisionMission />
        </div>

        <div data-fade-up>
          <Services />
        </div>

        <div data-fade-up>
          <WorkshopGallery />
        </div>

        <div data-fade-up>
          <Testimonials />
        </div>

        <div data-fade-up>
          <CTABanner />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
