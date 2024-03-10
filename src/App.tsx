import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OptionsSection from "./components/OptionsSection/OptionsSection";


const App = () => {

  return (
    <>
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
        <div className="min-h-screen">
          <Navbar />
          <OptionsSection />
          <Hero />
        </div>
        <Footer />
      </section>

    </>
  )
}

export default App;
