import Intro from "../components/employer/Intro";
import Approach from "../components/employer/Approach";
import Services from "../components/employer/Services";
import WhyChooseUs from "../components/employer/WhyChooseUs";
import CTA from "../components/employer/CTA";

export default function Employer() {
  return (
    <main>
      <Intro />
      <Approach />
      <Services />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
