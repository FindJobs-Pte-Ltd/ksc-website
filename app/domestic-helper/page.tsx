import Intro from "../components/domestic-helper/Intro";
import Preparation from "../components/domestic-helper/Preparation";
import HiringProcess from "../components/domestic-helper/HiringProcess";
import Pricing from "../components/domestic-helper/Pricing";
import CTA from "../components/domestic-helper/CTA";

export default function DomesticHelper() {
  return (
    <main>
      <Intro />
      <Preparation />
      <HiringProcess />
      <Pricing />
      <CTA />
    </main>
  );
}
