import { useEffect } from "react";
import ServiceHero from "../../common/ServiceHero";
import bg from "../../../assets/images/serviceTransportBg.webp";
import AboutTransportedService from "./AboutTransportedService";
import DedicatedFleets from "./DedicatedFleets";
import HomeContactUs from "../../homepage/HomeContactUs";

const TransportService = () => {
  useEffect(() => {
    // Set Page Title
    document.title = "Transportation Services USA | R.E.D. Trucking";

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
      "R.E.D. provides reliable transportation services across the USA with experienced drivers, modern equipment, and dependable freight solutions.",
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
      <ServiceHero
        bedcrum="Transport"
        bgImage={bg}
        heading="r.e.d. Transport SERVICES"
        serviceName="TRANSPORT"
      />
      <AboutTransportedService />
      <DedicatedFleets />
      <HomeContactUs />
    </div>
  );
};

export default TransportService;
