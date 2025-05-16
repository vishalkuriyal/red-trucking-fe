import requirement from "../../assets/images/requirementImg.png";
import benefit from "../../assets/images/benefitImg.png";
import icon from "../../assets/svgs/icon.svg";

const Requirement = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto pr-5 md:pr-20 py-8 md:py-14">
        <div className="flex justify-between mb-20">
          <img src={requirement} alt="" className="" />
          <div className="w-[50%] border border-[#3c3c3c] py-11 px-9">
            <h5 className="anton-regular text-4xl text-white uppercase mb-6">
              requirements
            </h5>
            <div className="flex flex-col ">
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Must be at least 23 years old
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  At least 1 year of recent intermodal experience is required
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  A clean MVR and background check are a must
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  TWIC card is required to get started
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  HAZMAT certification is preferred
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <img src={benefit} alt="" className="" />
          <div className="w-[50%] border border-[#3c3c3c] py-11 px-9">
            <h5 className="anton-regular text-4xl text-white uppercase mb-6">
              benefits
            </h5>
            <div className="flex flex-col ">
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Paid Every Week with Direct Deposit as an Option
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Access to our fuel card program
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Fuel discounts at major stations
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Drive with our company-owned chassis fleet
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  EZ-Pass is fully covered for all drivers
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  We cover your ELD costs completely
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Get on-site mechanics
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Earn extra with performance-based bonuses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
