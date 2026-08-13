import { useEffect } from "react";
import ServiceHero from "../../common/ServiceHero";
import bg from "../../../assets/images/warehouseServiceBg.webp";
import AboutWarehousing from "./AboutWarehousing";
import SharedSpace from "./SharedSpace";
import HomeContactUs from "../../homepage/HomeContactUs";

const WarehouseService = () => {
    useEffect(() => {
      // Set Page Title
      document.title = "Warehousing Services USA | R.E.D. Trucking";
  
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
        "R.E.D. offers warehousing services with an 81,000 sq. ft. warehouse near one of the USA's largest ports, including storage, inventory, palletizing, and cross-docking.",
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
        bedcrum="Warehousing"
        bgImage={bg}
        heading="r.e.d. warehousing SERVICES"
        serviceName="WAREHOUSING"
      />
      <AboutWarehousing />
      <SharedSpace />
      <HomeContactUs/>
    </div>
  );
};

export default WarehouseService;
