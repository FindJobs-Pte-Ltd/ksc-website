import Hero from "./components/home/Hero";
import AboutRecruitment from "./components/home/AboutRecruitment";
import Services from "./components/home/Services";
import Industries from "./components/home/Industries";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Features from "./components/home/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutRecruitment />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Features />
    </main>
  );
}
