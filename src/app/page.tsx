
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <div className=" bg-sky-100 w-screen">
      <main className="w-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonial/>
      <Footer/>
      </main>
      
    </div>
  );
}
