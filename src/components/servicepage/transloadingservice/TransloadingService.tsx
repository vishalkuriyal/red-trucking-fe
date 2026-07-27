import ServiceHero from "../../common/ServiceHero"
import bg from "../../../assets/images/transloadingServiceHeroBg.webp"
import AboutTransloadingService from "./AboutTransloadingService"
import TransloadingWithRed from "./TransloadingWithRed"
import HomeContactUs from "../../homepage/HomeContactUs"

const TransloadingService = () => {
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