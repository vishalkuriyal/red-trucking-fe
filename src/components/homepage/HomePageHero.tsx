import { useNavigate } from "react-router-dom";
import bg from "../../assets/images/homeHero.png";
import truck from "../../assets/images/redTruck.png";
import { motion } from "motion/react";

const HomePageHero = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[600px] md:h-[900px] relative overflow-hidden">
      <img src={bg} className="w-full object-cover h-full" alt="" />
      <div className="absolute h-full flex justify-center sm:items-center top-0 w-full">
        <div className="mt-36 md:mt-20 relative w-full flex justify-center">
          <div className="">
            <h2 className="anton-regular text-6xl md:text-[230px] text-[#D30003]/80 tracking-[2%] md:leading-[210px] relative z-20">
              LOGISTICS
            </h2>
            <p className="anton-regular text-2xl sm:text-6xl text-white md:ml-6">
              Made Simple for
              <br /> Your Business
            </p>
            <button
              className="font-kindsans-bold flex group md:ml-6 mt-4 md:mt-8 relative z-20"
              onClick={() => {
                navigate("/transport");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <p className="py-4 px-5 bg-primary text-white">
                EXPLORE OUR SERVICES
              </p>
              <div className="bg-[#D00003] p-[10px]">
                <div className="size-10 flex justify-center items-center border border-white rounded-full group-hover:bg-white transition-all duration-500">
                  <svg
                    width="14"
                    height="6"
                    viewBox="0 0 14 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.205 4.60289L12.983 2.82488C13.042 2.76594 13.0751 2.68599 13.0751 2.60263C13.0751 2.51927 13.042 2.43932 12.983 2.38038L11.205 0.602371C11.1611 0.558277 11.105 0.528222 11.044 0.516016C10.9829 0.50381 10.9197 0.510002 10.8621 0.533807C10.8046 0.557613 10.7555 0.59796 10.7209 0.649734C10.6864 0.701507 10.668 0.762375 10.668 0.824622L10.6685 2.28837L0.314696 2.28792V2.91734L10.6685 2.91689L10.668 4.38064C10.668 4.44289 10.6864 4.50375 10.7209 4.55553C10.7555 4.6073 10.8046 4.64765 10.8621 4.67145C10.9197 4.69526 10.9829 4.70145 11.044 4.68925C11.105 4.67704 11.1611 4.64698 11.205 4.60289Z"
                      className="fill-[#F5F5F5] group-hover:fill-[#F20003] transition-all duration-500"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <motion.img
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute md:right-28 md:top-32 bottom-0"
              src={truck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
