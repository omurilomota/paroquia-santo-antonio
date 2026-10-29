import { motion, useScroll } from "framer-motion";
import Agenda from "./components/Agenda";
import Capelas from "./components/Capelas";
import Clero from "./components/Clero";
import Comunidade from "./components/Comunidade";
import Contato from "./components/Contato";
import DemoNotice from "./components/DemoNotice";
import ExternalLinks from "./components/ExternalLinks";
import Eventos from "./components/Eventos";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Historia from "./components/Historia";
import Horarios from "./components/Horarios";
import Liturgia from "./components/Liturgia";
import Marquee from "./components/Marquee";
import Movimentos from "./components/Movimentos";
import Navbar from "./components/Navbar";
import Padroeiro from "./components/Padroeiro";
import QuickLinks from "./components/QuickLinks";
import Reflexao from "./components/Reflexao";
import Sacramentos from "./components/Sacramentos";
import { FloatingWhatsApp } from "./components/ui";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gold"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <QuickLinks />
        <Horarios />
        <Liturgia />
        <Historia />
        <Padroeiro />
        <Clero />
        <Capelas />
        <Movimentos />
        <Sacramentos />
        <Agenda />
        <Eventos />
        <Galeria />
        <Reflexao />
        <Comunidade />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExternalLinks />
      <DemoNotice />
    </div>
  );
}
