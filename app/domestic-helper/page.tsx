import Intro from "../components/domestic-helper/Intro";
import Services from "../components/domestic-helper/Services";
import HiringProcess from "../components/domestic-helper/HiringProcess";
import Pricing from "../components/domestic-helper/Pricing";
import CTA from "../components/domestic-helper/CTA";

export default function DomesticHelper() {
  return (
    <main>
      <Intro />
      <Services />
      <HiringProcess />
      <Pricing />
      <CTA />
    </main>
  );
}
