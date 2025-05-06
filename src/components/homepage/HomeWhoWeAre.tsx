import circle from "../../assets/images/homeWhoWeAreText.png";
import whiteTruck from "../../assets/images/whiteTruck.png";
import PrimaryButton from "../common/PrimaryButton";

const HomeWhoWeAre = () => {
  return (
    <div className="h-screen w-full bg-bg1 bg-cover">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 pt-[500px] ">
        <div className="flex justify-between items-end relative overflow-hidden pb-28">
          <div className="anton-regular text-[#D30003] text-[128px] leading-[122px] relative w-[30%]">
            WE
            <br /> ARE{" "}
            <img
              src={circle}
              className="absolute -top-14 right-28 animate-spin-slow"
              alt=""
            />
          </div>
          <div className="flex w-[70%]">
            <div className="w-[70%]">
              <h3 className="anton-regular text-5xl text-white mb-7">
                Spread across 48 states makes us{" "}
                <span className="text-primary">ubiquitous</span> and{" "}
                <span className="text-primary">omnipresent</span>
              </h3>
              <p className="font-kindsans-regular text-white mb-6 w-[70%]">
                We provide professional trucking, transportation, warehousing
                and logistics services all across the USA. Our extensive network
                spread across 48 states makes us ubiquitous and omnipresent. Our
                professional code is based on safety, sustainability and rich
                customer experience. The latest practices in the industry put us
                far ahead of our competition; on the road and in the business.
              </p>
              <PrimaryButton>Learn More</PrimaryButton>
            </div>
          </div>
          <div className=" absolute -top-10 -right-10">
            <img src={whiteTruck} className="h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhoWeAre;
