const AboutWarehousing = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              WAREHOUSE STORAGE,
              <br />
              <span className="text-primary"> MANAGEMENT & DISTRIBUTION</span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-medium text-white mb-6 text-xl">
              Whether you’re looking for short/long-term storage, or need your
              cargo expertly palletized and warehoused, we have just the service
              for you.
            </p>
            <p className="font-kindsans-regular text-white">
              RED has{" "}
              <span className="text-primary">
                two warehouses totalling a gigantic 63,500 sq ft!
              </span>{" "}
              These warehouses are located less than 4 miles from the
              3rd-largest water port in the country. With the proximity and
              storage capacity that RED has to offer, you can rest assured that
              we can comfortably store any size of cargo in record speed.
              Whether you’re with us for the short-term or the long haul, RED
              can provide you with storage solutions that are specifically
              tailored to your needs. Learn more about the perks of working with
              RED below.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-10">
          <div className="md:w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              CONTRACT WAREHOUSING &
              <br />
              <span className="text-primary"> DISTRIBUTION</span>
            </h4>
          </div>
          <div className="md:w-[50%]">
            <p className="font-kindsans-regular text-white mb-6">
              Through years of dedicated service to our RED customer base, we’ve
              developed specialty services that provide clients with
              professionally maintained facilities that feature high ceilings,
              modern handling equipment, accredited sanitation programs, and
              advanced security/fire protection systems.
            </p>
            <p className="font-kindsans-medium text-white  text-xl">
              Get ready for a five-star inventory management experience with our
              contract warehouse storage and distribution services.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg4 bg-cover relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 py-14 max-w-screen-2xl mx-auto px-5 sm:px-20">
          <div className="">
            <h3 className="anton-regular text-white text-4xl md:text-8xl mb-8 uppercase">
              Smart
              <br /> <span className="text-primary">WAREHOUSE solutions</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-8 justify-between md:gap-10">
              <div className="px-8 py-7 border text-white font-kindsans-semibold md:w-[50%]">
                We’ve made thoughtful investments to deliver consistent quality
                and control across all warehousing operations. From real-time
                inventory tracking and onsite digital CCTV to GPS-enabled fleet
                monitoring and RFID barcode scanning, every system is designed
                to make storage smarter and safer.
              </div>
              <div className="px-8 py-7 border text-white font-kindsans-semibold md:w-[50%]">
                With 24/7 operational assistance and a dedicated team behind the
                scenes, you get complete visibility, faster turnaround, and the
                peace of mind that your cargo is always in capable hands.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWarehousing;
