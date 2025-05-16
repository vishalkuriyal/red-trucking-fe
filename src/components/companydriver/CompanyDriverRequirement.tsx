import requirement from "../../assets/images/driverRequirement.png";
import icon from "../../assets/svgs/icon.svg";

const CompanyDriverRequirement = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto pr-5 md:pr-20 py-8 md:py-14">
        <div className="flex justify-between">
          <img src={requirement} alt="" className="" />
          <div className="w-[50%] border border-[#3c3c3c] py-11 px-9">
            <h5 className="anton-regular text-4xl text-white uppercase mb-6">
              requirements
            </h5>
            <div className="flex flex-col ">
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Must Be 23 Years of Age
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Must Have 1 Year of Verifiable Intermodal Experience in the
                  Last 2 Years
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Must Have A Clean MVR/Criminal Background Check
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  TWIC Required
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  HAZMAT Required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 pb-8 md:pb-28">
        <div className="border border-[#3c3c3c] grid grid-cols-2 md:gap-28">
          <div className="py-11 px-9">
            <h5 className="anton-regular text-4xl text-white uppercase mb-6">
              Benefits
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
                  Sign-On Bonus
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Referral Bonus
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Additional Performance Bonuses
                </p>
              </div>
            </div>
          </div>
          <div className="py-11 px-9">
            <h5 className="anton-regular text-4xl text-white uppercase mb-6">
              After 90 Days
            </h5>
            <div className="flex flex-col ">
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Health Insurance
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  401K Plan – Employer Contribution of 3%
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  5 Days PTO
                </p>
              </div>
              <div className="flex gap-5 py-2 border-b border-[#3c3c3c]">
                <img src={icon} alt="" className="" />
                <p className="font-kindsans-semibold text-white text-xl">
                  Holiday Pay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDriverRequirement;
