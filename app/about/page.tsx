import Intro from "../components/about/Intro";
import OurStory from "../components/about/OurStory";
import OfficeBanner from "../components/about/OfficeBanner";
import Approach from "../components/about/Approach";
import Industries from "../components/about/Industries";
import CTA from "../components/about/CTA";

export default function About() {
  return (
    <main>
      <Intro />
      <OurStory />
      <OfficeBanner />
      <Approach />
      <Industries />
      <CTA />
    </main>
  );
}
