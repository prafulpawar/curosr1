import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero3D />
      <About />
      <Technology />
      <Features />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
}
