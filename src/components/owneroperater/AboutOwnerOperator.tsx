const AboutOwnerOperator = () => {
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
      </div>
    </div>
  );
};

export default AboutOwnerOperator;
