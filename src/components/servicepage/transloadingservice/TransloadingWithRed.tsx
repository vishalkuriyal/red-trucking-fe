import img from "../../../assets/images/transloadingWithRedImg.png";

const TransloadingWithRed = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="flex justify-between mb-20">
          <div className="">
            <img src={img} className="" alt="" />
          </div>
          <div className="w-[50%]">
            <h3 className="anton-regular text-primary text-4xl uppercase mb-10">
              TRANSLOADING WITH R.E.D.{" "}
              <span className="text-white">TRUCKING & logistics</span>
            </h3>
            <div className="flex flex-col gap-3">
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Experience the speed with our competent drivers.
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Efficient, timely, cheaper, and flexible.
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Value-added services like unloading, sorting, pelletizing.
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Extensive coverage and proximity to port areas (East coast).
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Special services for extra-quick shipments.
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Consolidation of import/export cargo.
              </p>
              <p className="py-2 px-9 font-kindsans-regular text-white bg-[#1d1d1d]">
                Integrated solution for product distribution.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              MANAGING
              <br />
              <span className="text-primary"> TRANSLOADING ASSIGNMENTS</span>
            </h4>
          </div>
          <div className="w-[50%]">
            <p className="font-kindsans-regular text-white">
              Every transload isn’t just a movement, it’s a high-stakes exchange
              that demands clarity and control. Our process ensures clear
              documentation, cargo accountability at every handover, and zero
              confusion during transfers. With well-trained teams and structured
              SOPs, we reduce risk, delays, and damage, giving you total peace
              of mind from dock to destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransloadingWithRed;
