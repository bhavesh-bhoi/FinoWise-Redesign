import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import TrustBar from "../Components/TrustBar";
import About from "../Components/About";
import VisionMission from "../Components/VisionMission";
import USP from "../Components/USP";
import Services from "../Components/Services";
import WorkshopGallery from "../Components/WorkshopGallery";
import Testimonials from "../Components/Testimonials";
import CTABanner from "../Components/CTABanner";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <VisionMission />
        <USP />
        <Services />
        <WorkshopGallery />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
