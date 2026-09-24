import Intro from "../components/domestic-helper/Intro";
import Preparation from "../components/domestic-helper/Preparation";
import AfterSalesSupport from "../components/domestic-helper/AfterSalesSupport";
import Pricing from "../components/domestic-helper/Pricing";
import CTA from "../components/domestic-helper/CTA";

export default function DomesticHelper() {
  return (
    <main>
      <Intro />
      <Preparation />
      <AfterSalesSupport />
      <Pricing />
      <CTA />
    </main>
  );
}
