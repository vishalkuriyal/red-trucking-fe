import img from "../../../assets/images/dedicatedFleet.png";

const DedicatedFleets = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto py-8 md:py-28">
        <h3 className="anton-regular text-6xl md:text-[128px] gradient-stroke md:leading-[114px] px-5 md:px-20 mb-10">
          DEDICATED FLEETS
        </h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between pr-5 md:pr-20">
          <div className="md:w-[40%]">
            <img src={img} className="w-full" alt="" />
          </div>
          <div className="md:w-[50%] pl-5 md:pl-0">
            <p className="font-kindsans-regular text-white mb-4">
              R.E.D. Trucking & Logistics offers customized transportation
              packages tailored to the specific needs of each client. These
              packages include specialized equipment, strict scheduling, and
              detailed custom reporting. Our team of experienced managers and
              drivers works closely with clients to understand their operations
              and deliver solutions that fit.
            </p>
            <div className="grid md:grid-cols-2 gap-9">
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Dedicated drivers trained to meet specific client requirements</p>
              </div>
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Carrier management solutions based at the shipper’s location</p>
              </div>
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Modern fleet with advanced onboard communication systems</p>
              </div>
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Regional truckload support during high-volume shipping periods</p>
              </div>
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Fixed-rate pricing and long-term contracts for better cost control</p>
              </div>
              <div className="px-6 py-5 bg-[#1d1d1d]">
                <p className="font-kindsans-regular text-white">Backhaul programs designed to share & maximize shipping revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedFleets;
