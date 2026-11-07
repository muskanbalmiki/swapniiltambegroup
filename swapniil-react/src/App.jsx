import { LightboxProvider } from "./context/LightboxContext";
import Preloader from "./components/Preloader";
import ScrollUI from "./components/ScrollUI";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import EarlyLife from "./components/EarlyLife";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import Companies from "./components/Companies";
import Awards from "./components/Awards";
import Giving from "./components/Giving";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LightboxProvider>
      <Preloader />
      <ScrollUI />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <EarlyLife />
      <Timeline />
      <Stats />
      <Companies />
      <Awards />
      <Giving />
      <Contact />
      <Footer />
    </LightboxProvider>
  );
}