const AboutWarehousing = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <div className="flex justify-between mb-10">
          <div className="w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              WAREHOUSE STORAGE,
              <br/><span className="text-primary"> MANAGEMENT & DISTRIBUTION</span>
            </h4>
          </div>
          <div className="w-[50%]">
            <p className="font-kindsans-medium text-white mb-6 text-xl">
              We offer reliable warehousing solutions designed to handle your
              cargo with care and efficiency. 
            </p>
            <p className="font-kindsans-regular text-white">
              Whether you need short-term storage, long-term management, or
              expert palletizing and distribution, we’ve got you covered. Our
              two spacious warehouses, totaling 63,500 sq. ft., are located less
              than four miles from one of the largest ports in the U.S., giving
              you unmatched access and turnaround time. With the space, staff
              and systems to store nearly any type of cargo, we make sure your
              goods stay secure, organized, and ready when you are.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="w-[40%]">
            <h4 className="anton-regular text-white text-4xl">
              CONTRACT WAREHOUSING & 
              <br/><span className="text-primary"> DISTRIBUTION</span>
            </h4>
          </div>
          <div className="w-[50%]">
            <p className="font-kindsans-medium text-white mb-6 text-xl">
              We offer reliable warehousing solutions designed to handle your
              cargo with care and efficiency. 
            </p>
            <p className="font-kindsans-regular text-white">
              Whether you need short-term storage, long-term management, or
              expert palletizing and distribution, we’ve got you covered. Our
              two spacious warehouses, totaling 63,500 sq. ft., are located less
              than four miles from one of the largest ports in the U.S., giving
              you unmatched access and turnaround time. With the space, staff
              and systems to store nearly any type of cargo, we make sure your
              goods stay secure, organized, and ready when you are.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg4 bg-cover relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 py-14 max-w-screen-2xl mx-auto px-5 sm:px-20">
          <div className="">
            <h3 className="anton-regular text-white text-8xl mb-8 uppercase">
              Smart
              <br /> <span className="text-primary">WAREHOUSE solutions</span>
            </h3>
            <div className="flex justify-between gap-10">
              <div className="px-8 py-7 border text-white font-kindsans-semibold w-[50%]">
                We’ve made thoughtful investments to deliver consistent quality
                and control across all warehousing operations. From real-time
                inventory tracking and onsite digital CCTV to GPS-enabled fleet
                monitoring and RFID barcode scanning, every system is designed
                to make storage smarter and safer.
              </div>
              <div className="px-8 py-7 border text-white font-kindsans-semibold w-[50%]">
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
