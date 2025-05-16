import img from "../../assets/images/aboutWhyChooseUsImg.png";
import maintanence from "../../assets/svgs/maintenance.svg";
import support from "../../assets/svgs/support.svg";
import information from "../../assets/svgs/information.svg";
import training from "../../assets/svgs/training.svg";
import transportation from "../../assets/svgs/transportation.svg";
import supply from "../../assets/svgs/supply.svg";

const AboutWhyChooseUs = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-5xl md:text-[128px] md:leading-[114px] gradient-stroke text-center mb-8">
          WHY CHOOSE US
        </h3>
        <p className="anton-regular text-4xl text-white text-center mb-10">
          We Deliver{" "}
          <span className="text-primary">Safely, On Time, Every Time</span>
        </p>
        <div className="hidden md:flex justify-between items-center">
          <div className="flex flex-col w-[25%] gap-8">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={maintanence} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  MAINTENANCE
                </h4>
                <p className="font-kindsans-regular text-white">
                  We keep our trucks in top shape so your deliveries stay smooth
                  and on time
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={supply} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  SUPPLY
                </h4>
                <p className="font-kindsans-regular text-white">
                  We make sure your goods are always moving where they need to
                  be, reliably.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={transportation} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  TRANSPORTATION
                </h4>
                <p className="font-kindsans-regular text-white">
                  From short hauls to long routes, we get your freight there
                  without the hassle.
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-[49%]">
            <img src={img} className="w-full" />
          </div>
          {/*  */}
          <div className="flex flex-col w-[25%] gap-8">
            <div className="flex items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3 text-right">
                  TRAINING
                </h4>
                <p className="font-kindsans-regular text-white text-right">
                  Our team is trained to handle your cargo with care and
                  complete attention.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={training} className="" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3 text-right">
                  INFORMATION TECHNOLOGY
                </h4>
                <p className="font-kindsans-regular text-white text-right">
                  You stay updated every step of the way with smart, simple
                  tracking tools.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={information} className="" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3 text-right">
                  OPERATIONS SUPPORT
                </h4>
                <p className="font-kindsans-regular text-white text-right">
                  We’re here to solve problems early so your shipments keep
                  moving without disruption.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={support} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="">
            <img src={img} className="w-full" />
          </div>
          <div className="flex flex-col gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={maintanence} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  MAINTENANCE
                </h4>
                <p className="font-kindsans-regular text-white">
                  We keep our trucks in top shape so your deliveries stay smooth
                  and on time
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={supply} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  SUPPLY
                </h4>
                <p className="font-kindsans-regular text-white">
                  We make sure your goods are always moving where they need to
                  be, reliably.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={transportation} className="" />
                </div>
              </div>
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  TRANSPORTATION
                </h4>
                <p className="font-kindsans-regular text-white">
                  From short hauls to long routes, we get your freight there
                  without the hassle.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  TRAINING
                </h4>
                <p className="font-kindsans-regular text-white">
                  Our team is trained to handle your cargo with care and
                  complete attention.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={training} className="" />
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  INFORMATION TECHNOLOGY
                </h4>
                <p className="font-kindsans-regular text-white">
                  You stay updated every step of the way with smart, simple
                  tracking tools.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={information} className="" />
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="">
                <h4 className="anton-regular text-xl text-primary mb-3">
                  OPERATIONS SUPPORT
                </h4>
                <p className="font-kindsans-regular text-white">
                  We’re here to solve problems early so your shipments keep
                  moving without disruption.
                </p>
              </div>
              <div className="p-2 rounded-full bg-[#262626]">
                <div className="size-11 rounded-full flex justify-center items-center bg-[#1b1b1b]">
                  <img src={support} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;
