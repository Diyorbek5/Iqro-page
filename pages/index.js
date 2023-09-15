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
        <SectionTitle>
          <span class="text-4xl text-white font-bold-2">Услуги</span>
        </SectionTitle>
      </div>
      <Testimonials />

      {/* Works section */}
      <div id="works">
        <SectionTitle>
          <span class="text-4xl text-white font-bold-2">Как мы работаем</span>
        </SectionTitle>
      </div>
      <Works />

      {/* Digital-инструментов section */}
      <div id="results">
        <SectionTitle>
          <span class="text-4xl text-white font-bold bg-black rounded-2xl px-4 py-1 z-10">Что даст вашему бизнесу</span><br />
          <span class="text-4xl text-white font-bold-2 z-10">внедрение Digital-инструментов</span>
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