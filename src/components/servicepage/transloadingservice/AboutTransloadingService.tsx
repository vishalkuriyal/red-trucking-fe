const AboutTransloadingService = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              TRUCKING, TRANSPORT &
              <span className="text-primary">
                {" "}
                DEDICATED FLEETS IN THE U.S.
              </span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-regular text-white">
              At R.E.D. Trucking & Logistics, we take pride in moving your cargo
              with care, speed and precision. As a trusted name in the industry,
              we offer full-service transport solutions designed to make
              shipping simpler and stress-free.Partnering with Horizon Freight
              Systems and backed by a 48-state network, we help keep your
              deliveries on track across the country. Whether it’s one shipment
              or a steady stream of truckloads, you can count on our dedicated
              team and reliable fleet to get it done right. Your business
              depends on dependable transport. We’re here to make sure you
              always move forward.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg5 bg-cover bg-bottom relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 py-14 max-w-screen-2xl mx-auto px-5 sm:px-20">
          <div className="">
            <h3 className="anton-regular text-white text-5xl md:text-6xl mb-8">
              OUR FREIGHT <br />
              <span className="text-primary">TRANSLOADING IS PERFECT FOR</span>
            </h3>
            <div className="border-l-8 border-primary md:w-[40%]">
              <div className="py-2 pl-9 flex border-y border-r border- text-white font-kindsans-regular">Standard cargo</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Extra fast shipping with short deadlines</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Budget shipping</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Time-sensitive/perishable cargo</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Reducing drayage costs</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Getting goods faster to markets</div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">Oversized/precious cargo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTransloadingService;
