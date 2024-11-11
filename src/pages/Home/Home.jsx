import {About, Banner, Footer, Hero, Navbar, ScrollToTop, Services, Testimonials} from '../../components/index'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Carousel /> */}
      <Banner />
      <About />
      <Services />
   
      <Testimonials />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
