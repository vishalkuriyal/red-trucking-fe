import ServiceHero from "../../common/ServiceHero"
import bg from "../../../assets/images/logisticServiceHeroBg.png"
import AboutLogisticsService from "./AboutLogisticsService"
import LogisticsCards from "./LogisticsCards"
import HomeContactUs from "../../homepage/HomeContactUs"

const LogisticService = () => {
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