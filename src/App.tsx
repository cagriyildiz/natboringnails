import "./app.scss"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <section id="homepage">
        <Navbar />
      </section>
      <section id="about">About</section>
      <section id="treatments">Treatments</section>
      <section id="inspiration">Inspiration</section>
      <section id="contact">Contact</section>
    </>
  )
}

export default App
