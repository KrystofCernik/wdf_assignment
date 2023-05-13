import Header from "./components/organisms/Header/Header"
import Navbar from "./components/molecules/Navbar/Navbar"
import Hero from './components/organisms/Hero/Hero'
import Reasons from "./components/organisms/Reasons/Reasons"
import Care from "./components/organisms/Care/Care"
import Banner from "./components/molecules/Banner/Banner"
import Testimonials from "./components/organisms/Testimonials/Testimonials"
import Doctors from "./components/organisms/Doctors/Doctors"
import News from "./components/organisms/News/News"
import Contact from "./components/organisms/Contact/Contact"
import Footer from "./components/organisms/Footer/Footer"

export default function Home() {
  return (
    <div className='homepage'>
      <Header />
      <Navbar />
      <Hero />
      <div className="container">
        <Reasons />
        <Care />
        <Banner />
        <Testimonials />
        <Doctors />
        <News />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
