import { useEffect } from "react"
import ServiceHero from "../../common/ServiceHero"
import bg from "../../../assets/images/transloadingServiceHeroBg.webp"
import AboutTransloadingService from "./AboutTransloadingService"
import TransloadingWithRed from "./TransloadingWithRed"
import HomeContactUs from "../../homepage/HomeContactUs"

const TransloadingService = () => {
      useEffect(() => {
        // Set Page Title
        document.title = "Transloading Services USA | R.E.D. Trucking";
    
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
          "R.E.D. provides efficient transloading services to move freight between ports, rail, warehouses, and trucks while reducing delays and handling.",
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
    <div className="">
      <ServiceHero bedcrum="Transloading" bgImage={bg} heading="r.e.d. transloading SERVICES" serviceName="TRANSLOADING" />
      <AboutTransloadingService />
      <TransloadingWithRed />
      <HomeContactUs/>
    </div>
  )
}

export default TransloadingService