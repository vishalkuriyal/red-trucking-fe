const AboutTransportedService = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex justify-between mb-10">
          <div className="w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              TRUCKING, TRANSPORT &
              <span className="text-primary">
                {" "}
                DEDICATED FLEETS IN THE U.S.
              </span>
            </h4>
          </div>
          <div className="w-[50%]">
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
      <div className="bg-bg3 object-cover relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 py-14 max-w-screen-2xl mx-auto px-5 sm:px-20">
          <div className="w-[30%]">
            <h3 className="anton-regular text-white text-6xl mb-8">
              TRANSPORTATION <span className="text-primary">SERVICES</span>
            </h3>
            <div className="border-l-2 border-primary ">
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                Reefer (Refrigerated)
              </div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                FTL (Full Truckload)
              </div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                Heavy Haul & Hazmat
              </div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                Team Service
              </div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                Drayage or Bulk
              </div>
              <div className="py-2 pl-9 flex border-y border-r text-white font-kindsans-regular">
                FCL (Full Container Load)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTransportedService;
