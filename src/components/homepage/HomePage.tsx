import HomePageHero from "./HomePageHero";
import HomeWhoWeAre from "./HomeWhoWeAre";
import videoSection from "../../assets/images/videoSection.png";
import playButton from "../../assets/svgs/playButton.svg";
import TransportationPartner from "./TransportationPartner";
import HomeService from "./HomeService";
import HomeRedValues from "./HomeRedValues";
import HomeLeaderShip from "./HomeLeaderShip";
import HomeJoinUs from "./HomeJoinUs";
import HomeLocation from "./HomeLocation";
import HomeExploreBlogs from "./HomeExploreBlogs";
import HomeContactUs from "./HomeContactUs";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <HomePageHero />
        <div className="absolute p-4 bg-primary -bottom-[300px] mx-auto left-0 right-0 w-fit">
          <div className="relative group">
            <img src={videoSection} className="" />
            <img
              src={playButton}
              className="absolute top-0 left-0 right-0 bottom-0 m-auto opacity-0 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <HomeWhoWeAre />
      <TransportationPartner />
      <HomeService />
      <HomeRedValues />
      <HomeLeaderShip />
      <HomeJoinUs />
      <HomeLocation />
      <HomeExploreBlogs />
      <HomeContactUs/>
    </>
  );
};

export default HomePage;
