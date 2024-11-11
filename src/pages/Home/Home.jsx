import {About, Banner, Footer, Hero, Navbar, ScrollToTop, Services, Testimonials} from '../../components/index'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Banner />
      <Testimonials />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
