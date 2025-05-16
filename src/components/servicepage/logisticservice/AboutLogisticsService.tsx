
const AboutLogisticsService = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              LOGISTICS
              <br />
              <span className="text-primary"> CONSULT & MANAGEMENT </span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-regular text-white">
              Our experienced team knows what it takes to make your logistics
              run smoothly. We evaluate your current setup and design a custom
              supply chain that fits your business needs. With access to our
              wide range of transport and warehousing services, we ensure every
              step meets your goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              MULTIMODAL
              <br />
              <span className="text-primary">TRANSPORT</span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-regular text-white mb-6">
              If your shipments require more than one mode of transport to reach
              their destination, we’ve got you covered. Our team handles
              multimodal solutions from start to finish, ensuring everything
              arrives on time. From trucks to ships to rail, we coordinate it
              all so you don’t have to worry about delays or confusion.
            </p>
            <p className="font-kindsans-medium text-white  text-xl">
              Let us help streamline your logistics and add real value to your
              operations.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg4 bg-cover no-bg-repeat relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 py-14 max-w-screen-2xl mx-auto px-5 sm:px-20">
          <div className="mb-7">
            <h3 className="anton-regular text-primary text-5xl md:text-8xl mb-6 uppercase">
              PALLETIZING
            </h3>
            <div className="px-8 py-7 border text-white font-kindsans-regular md:w-[60%]">
              Once a shipment is received, our team safely palletizes and stores
              it in the designated area, ensuring easy handling, faster access,
              and efficient inventory flow.
            </div>
          </div>
          <div className="">
            <h3 className="anton-regular text-white text-5xl md:text-8xl mb-6 uppercase">
              REALTIME <span className="text-primary">GPS TRACKING</span>
            </h3>
            <div className="px-8 py-7 border text-white font-kindsans-regular md:w-[60%]">
              All our trucks are GPS-enabled, allowing you to monitor your
              shipment’s location in real time and stay informed throughout its
              journey from pickup to delivery.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLogisticsService;
