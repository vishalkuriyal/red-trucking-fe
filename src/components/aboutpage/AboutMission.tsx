import img from "../../assets/images/aboutMissionImg.png";

const AboutMission = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-7xl md:text-[128px] md:leading-[114px] gradient-stroke mb-10">
          OUR MISSION
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8 md:gap-0">
          <div className="md:w-[45%]">
            <p className="font-kindsans-semibold text-white mb-5">
              Our mission is simple, handle every shipment with care and do the
              job right. Whether the load is small or complex, we approach it
              with focus and responsibility.
            </p>
            <p className="font-kindsans-regular text-white mb-5">
              We take time to understand how our customers operate. Every
              business has deadlines, schedules, and pressures. We plan around
              those realities, not just around routes. That way, freight moves
              smoothly without creating unnecessary stress.
            </p>
            <p className="font-kindsans-regular text-white">
              After more than 20 years in the industry, we’ve learned that good
              logistics isn’t about big promises. It’s about staying organized,
              communicating clearly, and following through. We work hard to keep
              things steady so our customers can focus on running their
              business.
            </p>
          </div>
          <div className="md:w-[50%]">
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-8 gap-5">
          <div className="md:col-span-2 bg-[#1b1b1b] px-9 py-10">
            <p className="anton-regular text-xl text-white">
              Our focus is always on the 3 most important aspects of our
              business{" "}
            </p>
          </div>
          <div className="md:col-span-6 border flex justify-center items-center px-9 py-10 border-[#3C3C3C]">
            <p className="font-kindsans-regular text-white">
              We focus on three things: staying on schedule, protecting the
              cargo, and keeping communication clear. If we do those three
              things well, everything else falls into place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
