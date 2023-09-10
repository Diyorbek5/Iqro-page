import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Works from "../components/works";
import Results from "../components/results";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>Iqro - Landing Page</title>
        <meta
          name="description"
          content="Iqro - Landing Page"
        />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      {/* Navbar and Main section */}
      <Navbar />
      <Hero />

      {/* Услуги section */}
      <div id="testimonials">
        <SectionTitle
          title="Услуги">
        </SectionTitle>
      </div>
      <Testimonials />

      {/* Works section */}
      <div id="works">
        <SectionTitle
          title="Как мы работаем ">
        </SectionTitle>
      </div>
      <Works />

      {/* Digital-инструментов section */}
      <div id="results">
        <SectionTitle>
          <span class="sm:text-4xl md:text-4xl lg:text-4xl font-bold bg-black rounded-2xl px-4 py-1">Что даст вашему бизнесу</span><br />
          <span class="sm:text-4xl md:text-4xl lg:text-4xl font-bold-2">внедрение Digital-инструментов</span>
        </SectionTitle>
      </div>
      <Results />

      {/* Contact section */}
      <Cta />

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default Home;