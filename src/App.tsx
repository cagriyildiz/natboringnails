import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Treatments from "./components/treatments/Treatments"

function App() {

  return (
    <>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <Treatments />
      <section id="inspiration">Inspiration</section>
      <section id="about">About</section>
      <section id="contact">Contact</section>
    </>
  )
}

export default App
