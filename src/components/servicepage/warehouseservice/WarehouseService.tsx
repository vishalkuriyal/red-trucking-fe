import ServiceHero from "../../common/ServiceHero";
import bg from "../../../assets/images/warehouseServiceBg.png";
import AboutWarehousing from "./AboutWarehousing";
import SharedSpace from "./SharedSpace";
import HomeContactUs from "../../homepage/HomeContactUs";

const WarehouseService = () => {
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
