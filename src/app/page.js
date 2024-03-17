import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}
