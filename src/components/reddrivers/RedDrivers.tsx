import { useEffect } from "react";
import HomeContactUs from "../homepage/HomeContactUs";
import DrivingOpportunity from "./DrivingOpportunity";
import DrivingWithRed from "./DrivingWithRed";
import Journey from "./Journey";
import RedDriverCarrer from "./RedDriverCarrer";
import RedDriversHero from "./RedDriversHero";


const RedDrivers = () => {
    useEffect(() => {
      // Set Page Title
      document.title = "Truck Driver Jobs | Join R.E.D. Drivers";
  
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
        "Explore truck driver opportunities with R.E.D. Trucking & Logistics. Learn about available positions and take the next step in your driving career.",
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
    <>
      <RedDriversHero />
      <DrivingOpportunity />
      <DrivingWithRed />
      <Journey />
      <RedDriverCarrer />
      <HomeContactUs/>
    </>
  );
};

export default RedDrivers;
