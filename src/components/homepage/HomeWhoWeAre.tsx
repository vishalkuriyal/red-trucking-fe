import circle from "../../assets/images/homeWhoWeAreText.png";
import whiteTruck from "../../assets/images/whiteTruck.png";
import PrimaryButton from "../common/PrimaryButton";

const HomeWhoWeAre = () => {
  return (
    <div className=" w-full bg-bg1 bg-cover">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 pt-[500px]">
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
                TRUSTED TRUCKING AND LOGISTICS ACROSS
                <span className="text-primary"> 48 STATES</span>
              </h3>
              <p className="font-kindsans-regular text-white mb-6 w-[70%]">
                R.E.D. Trucking & Logistics offers full-service transportation,
                warehousing and logistics across 48 U.S. states. Our extensive
                network helps businesses move goods quickly and safely. With a
                strong focus on reliability, compliance and timely delivery, we
                support smooth supply chains and help clients stay ahead in a
                fast-moving, competitive logistics environment.
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
