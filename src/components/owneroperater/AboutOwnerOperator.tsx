const AboutOwnerOperator = ({ handleApplyNowClick }: any) => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-5xl md:text-[128px] md:leading-[114px] gradient-stroke-primary absolute -top-10 uppercase">
          owner operator
        </h3>
      </div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl uppercase">
              SECURE YOUR CAREER WITH CDL
              <span className="text-primary">
                {" "}
                Explore Owner Operator Opportunities
              </span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-regular text-white mb-5">
              We’re dedicated to helping our Owner Operators thrive, both on and
              off the road. From competitive income and solid health benefits to
              well-maintained trucks and reliable support, we’ve built a system
              that puts drivers first. We also work closely with you to build a
              schedule that balances your professional goals with your personal
              life because we know both matter.
            </p>
            <p className="font-kindsans-regular text-white">
              We respect our team and treat them as members of our extended
              family. Their success fuels our growth, and we’re proud to stand
              behind the people who move us forward every day.
            </p>
          </div>
        </div>
        <button
          className="font-kindsans-bold flex group mt-8"
          onClick={handleApplyNowClick}
        >
          <p className="py-4 px-5 bg-primary text-white">Apply Now</p>
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
      </div>
    </div>
  );
};

export default AboutOwnerOperator;
