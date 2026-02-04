import './styles/App.css'
import Menu from './Components/Menu.jsx';
import Slider from './Components/Slider.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Missions from './Components/Missions.jsx';
import Recommendations from './Components/Recommendations.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
// import Resumee from './Components/Resumee.jsx';

function App() {
 /* <section id="resumee">
      <Resumee />
    </section>
 */

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>        
        <section id="about">
          <About />
        </section>
        <section id="missions">
          <Missions />
        </section>
        <section id="slide">
          <Slider />
        </section>        
        <section id="recomendations">
          <Recommendations />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
