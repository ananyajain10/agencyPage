
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
export default function Home() {
  return (
    <div className=" bg-sky-100">
      <main className="">
      <Navbar/>
      <Hero/>
      <About/>
      
      </main>
      
    </div>
  );
}
