import { useNavigate } from "react-router-dom";
import circle from "../../assets/images/homeWhoWeAreText.png";
import whiteTruck from "../../assets/images/whiteTruck.png";
import PrimaryButton from "../common/PrimaryButton";
import { motion } from "motion/react";

const HomeWhoWeAre = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-full bg-bg1 bg-cover overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 pt-[250px] md:pt-[400px]">
        <div className="flex flex-col md:flex-row justify-between md:items-end relative md:overflow-hidden pb-28">
          <div className="anton-regular text-[#D30003] text-[128px] leading-[122px] relative md:w-[30%] mb-10 md:mb-0">
            WE
            <br /> ARE{" "}
            <img
              src={circle}
              className="absolute -top-14 right-10 md:right-28 animate-spin-slow"
              alt=""
            />
          </div>
          <div className="flex md:w-[70%]">
            <div className="md:w-[70%]">
              <h3 className="anton-regular text-4xl md:text-5xl text-white mb-7">
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
              <PrimaryButton onClick={() => {
            navigate("/about");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>Learn More</PrimaryButton>
            </div>
          </div>
          <div className=" absolute bottom-8 md:bottom-0 md:-top-10 -right-10">
            <motion.img initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} src={whiteTruck} className=" h-[200px] md:h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhoWeAre;
