import {About, Banner, Footer, Hero, Navbar, ScrollToTop, Services, Testimonials, Carousel, Contact} from '../../components/index'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Carousel />
      <Services />
      <Testimonials />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
