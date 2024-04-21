import "./app.scss"
import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Treatments from "./components/treatments/Treatments"
import Contact from "./components/contact/Contact"

function App() {

  return (
    <>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <Treatments />
      <About />
      {/* <section id="inspiration">Inspiration</section> */}
      <Contact />
    </>
  )
}

export default App
