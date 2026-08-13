import { useEffect } from "react";
import HomeContactUs from "../homepage/HomeContactUs";
import AboutDrivingJourney from "./AboutDrivingJourney";
import AboutFamily from "./AboutFamily";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutSafety from "./AboutSafety";
import AboutSustanability from "./AboutSustanability";
import AboutTrust from "./AboutTrust";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutWhyChooseUs from "./AboutWhyChooseUs";

const AboutPage = () => {
  useEffect(() => {
    // Set Page Title
    document.title = "About R.E.D. Trucking & Logistics | Our Company";

    // --- Description ---
    let metaDescription = document.querySelector<HTMLMetaElement>(
      "meta[name='description']",
    );
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Learn about R.E.D. Trucking & Logistics and our commitment to reliable transportation, logistics, safety, and customer-focused service.",
    );

    // --- Keywords ---
    // let metaKeywords = document.querySelector<HTMLMetaElement>(
    //   "meta[name='keywords']",
    // );
    // if (!metaKeywords) {
    //   metaKeywords = document.createElement("meta");
    //   metaKeywords.name = "keywords";
    //   document.head.appendChild(metaKeywords);
    // }
    // metaKeywords.setAttribute(
    //   "content",
    //   "Digital Marketing & IT Services Company",
    // );
    // --- Canonical ---
    // let linkTag = document.querySelector<HTMLLinkElement>(
    //   "link[rel='canonical']",
    // );
    // if (!linkTag) {
    //   linkTag = document.createElement("link");
    //   linkTag.rel = "canonical";
    //   document.head.appendChild(linkTag);
    // }
    // linkTag.setAttribute("href", "https://www.techqilla.com");
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutTrust />
      <AboutFamily />
      <AboutWhatWeDo />
      <AboutWhyChooseUs />
      <AboutDrivingJourney />
      <AboutMission />
      <AboutSafety />
      <AboutSustanability />
      <HomeContactUs />
    </div>
  );
};

export default AboutPage;
