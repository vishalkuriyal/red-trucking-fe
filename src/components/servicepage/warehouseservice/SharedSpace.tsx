import img from "../../../assets/images/sharedSpaceImg.png";

const SharedSpace = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 mb-8 pt-8 md:pt-28">
        <h3 className="anton-regular text-6xl md:text-[128px] gradient-stroke">
          SHARED STROKE
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center max-w-screen-2xl mx-auto pb-8 md:pb-28">
        <div className="">
          <img className="" src={img} alt="" />
        </div>
        <div className="md:w-[50%] px-5 md:px-0">
          <p className="text-white font-kindsans-regular mb-11">
            Need space without a long-term commitment? Our Shared Space option
            gives you flexible storage based on your changing needs. It’s great
            for short-term or seasonal storage and includes access to our
            inventory tracking system, strong security and 24/7 monitoring. You
            only pay for the space you use, and still get the benefits of a
            well-managed, professional warehouse setup.
          </p>
          <div className="">
            <h4 className="anton-regular text-white text-4xl mb-5">
              HANDS-ON{" "}
              <span className="text-primary">WAREHOUSE MANAGEMENT</span>
            </h4>
            <div className="flex flex-col gap-3">
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Alcohol and general food grade permitted
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Cross-docking
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Palletizing & pick-pack operation
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Advanced inventory management system
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Container stripping and stuffing
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Load consolidation and reverse logistics
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Dedicated truck fleet
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                EDI (Electronic Data Interchange)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedSpace;
