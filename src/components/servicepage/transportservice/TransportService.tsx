import ServiceHero from "../../common/ServiceHero";
import bg from "../../../assets/images/serviceTransportBg.png";
import AboutTransportedService from "./AboutTransportedService";
import DedicatedFleets from "./DedicatedFleets";
import HomeContactUs from "../../homepage/HomeContactUs";

const TransportService = () => {
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
      <HomeContactUs/>
    </div>
  );
};

export default TransportService;
