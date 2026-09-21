import Intro from "../components/domestic-helper/Intro";
import Preparation from "../components/domestic-helper/Preparation";
import AfterSalesSupport from "../components/domestic-helper/AfterSalesSupport";
import Pricing from "../components/domestic-helper/Pricing";
import AddOns from "../components/domestic-helper/AddOns";
import CareReady from "../components/domestic-helper/CareReady";
import UnlimitedReplacement from "../components/domestic-helper/UnlimitedReplacement";
import ZeroLoan from "../components/domestic-helper/ZeroLoan";
import Warranty from "../components/domestic-helper/Warranty";
import MeaslesRequirement from "../components/domestic-helper/MeaslesRequirement";
import CTA from "../components/domestic-helper/CTA";

export default function DomesticHelper() {
  return (
    <main>
      <Intro />
      <Preparation />
      <AfterSalesSupport />
      <Pricing />
      <AddOns />
      <CareReady />
      <UnlimitedReplacement />
      <ZeroLoan />
      <Warranty />
      <MeaslesRequirement />
      <CTA />
    </main>
  );
}
