import img from "../../assets/images/aboutTrustImg.png";
import client from "../../assets/images/aboutTrustClient.png";

const AboutTrust = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 relative hidden sm:block">
        <h2 className="anton-regular text-7xl md:text-[128px] md:leading-[120px] gradient-stroke-white absolute left-0 -top-10">
          ABOUT US
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:pb-28">
        <div className="md:w-[45%]">
          <h3 className="anton-regular uppercase text-4xl text-white leading-[38px] mb-8">
            Built on Trust. <br />
            <span className="text-primary">Driven by Experience.</span>
          </h3>
          <div className="mb-7 flex flex-col gap-5 md:gap-5 md:flex-row justify-between">
            <div className="flex gap-2">
              <p className="anton-regular text-primary text-5xl">20+</p>
              <p className="font-kindsans-regular text-white">
                Years of Field
                <br /> Experience
              </p>
            </div>
            <div className="flex gap-2">
              <img src={client} alt="" className="" />
              <div className="">
                <p className="anton-regular text-primary text-xl">500+</p>
                <p className="font-kindsans-regular text-white">
                  Clients Served
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:pr-20">
          <p className="font-kindsans-regular text-white">
            Founded in 2004, R.E.D. Trucking & Logistics has been a trusted
            partner for end-to-end logistics, transport, and warehousing
            solutions. Serving both domestic and international clients, we’re
            known for reliable delivery, seamless coordination, and client-first
            service. Located less than 4 miles from one of the top U.S. ports,
            we offer a strong advantage in drayage and nationwide distribution.
          </p>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto md:pr-20 flex flex-col md:flex-row gap-8 md:gap-0 justify-between pb-8 md:pb-28 px-5 md:px-0">
        <div className="md:w-[45%]">
          <img src={img} className="w-full" alt="" />
        </div>
        <div className="md:w-[50%] grid gap-5">
          <div className="grid md:grid-cols-7 gap-5">
            <div className="anton-regular text-xl leading-[32px] md:col-span-2 flex justify-center items-center bg-[#1B1B1B] text-white">
              TRUST
            </div>
            <div className="md:col-span-5 px-5 py-6 bg-[#1B1B1B] text-white">
              We earn our clients’ trust through consistent communication,
              real-time updates and complete transparency in transportation and
              delivery timelines.
            </div>
          </div>
          <div className="grid md:grid-cols-7 gap-5">
            <div className="anton-regular text-xl leading-[32px] md:col-span-2 flex justify-center items-center bg-[#1B1B1B] text-white">
              SUSTAINABILITY
            </div>
            <div className="md:col-span-5 px-5 py-6 bg-[#1B1B1B] text-white">
              We earn our clients’ trust through consistent communication,
              real-time updates and complete transparency in transportation and
              delivery timelines.
            </div>
          </div>
          <div className="grid md:grid-cols-7 gap-5">
            <div className="anton-regular text-xl leading-[32px] md:col-span-2 flex justify-center items-center bg-[#1B1B1B] text-white">
              SECURITY
            </div>
            <div className="md:col-span-5 px-5 py-6 bg-[#1B1B1B] text-white">
              We earn our clients’ trust through consistent communication,
              real-time updates and complete transparency in transportation and
              delivery timelines.
            </div>
          </div>
          <div className="grid md:grid-cols-7 gap-5">
            <div className="anton-regular text-xl leading-[32px] md:col-span-2 flex justify-center items-center bg-[#1B1B1B] text-white">
              SERVICE AREAS
            </div>
            <div className="md:col-span-5 px-5 py-6 bg-[#1B1B1B] text-white">
              We earn our clients’ trust through consistent communication,
              real-time updates and complete transparency in transportation and
              delivery timelines.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrust;
