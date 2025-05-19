import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Treatments from "../components/treatments/Treatments";
import About from "../components/about/About";
import Location from "../components/location/Location";
import BookingWidget from "@/components/widget/BookingWidget";

export default function Home() {
  return (
    <>
      <section id="homepage" className="flex flex-col h-screen font-fancy">
        <Navbar />
        <Hero />
      </section>
      <Treatments />
      <About />
      <Location />
      <BookingWidget />
    </>
  );
}
