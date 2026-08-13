import { useEffect } from "react"
import ServiceHero from "../../common/ServiceHero"
import bg from "../../../assets/images/logisticServiceHeroBg.webp"
import AboutLogisticsService from "./AboutLogisticsService"
import LogisticsCards from "./LogisticsCards"
import HomeContactUs from "../../homepage/HomeContactUs"

const LogisticService = () => {
        useEffect(() => {
          // Set Page Title
          document.title = "Logistics Services USA | R.E.D. Trucking";
      
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
            "R.E.D. delivers logistics solutions including transportation, warehousing, tracking, and distribution to help businesses simplify their supply chain.",
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
      <ServiceHero bedcrum="logistics" bgImage={bg} heading="r.e.d. logistics SERVICES" serviceName="LOGISTICS" />
      <AboutLogisticsService />
      <LogisticsCards />
      <HomeContactUs/>
    </div>
  )
}

export default LogisticService