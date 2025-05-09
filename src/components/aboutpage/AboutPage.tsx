import HomeContactUs from "../homepage/HomeContactUs"
import AboutDrivingJourney from "./AboutDrivingJourney"
import AboutFamily from "./AboutFamily"
import AboutHero from "./AboutHero"
import AboutMission from "./AboutMission"
import AboutSafety from "./AboutSafety"
import AboutSustanability from "./AboutSustanability"
import AboutTrust from "./AboutTrust"
import AboutWhatWeDo from "./AboutWhatWeDo"
import AboutWhyChooseUs from "./AboutWhyChooseUs"


const AboutPage = () => {
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
      <HomeContactUs/>
    </div>
  )
}

export default AboutPage