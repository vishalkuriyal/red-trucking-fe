import bg from "../../assets/images/aboutSafetyBg.png";

const AboutSafety = () => {
  return (
    <div className="bg-secondary">
      <div className="md:h-[500px] overflow-hidden">
        <img className="h-full w-full object-cover object-bottom" src={bg} />
      </div>
      <div className="relative max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-7xl md:text-[128px] md:leading-[114px] gradient-stroke-white absolute -top-10">
          SAFETY
        </h3>
        <div className="py-8 md:py-0 md:pb-28">
          <p className="font-kindsans-semibold text-white mb-16">
            It is a critical aspect for a trucking company. Apart from the
            formal training, there are written comprehensive manuals for each
            driver. We provide safety meetings, programs and workshops to ensure
            accidents are avoided as far as possible.
          </p>
          <p className="border border-[#3C3C3C] py-7 px-5 md:px-10 font-kindsans-regular text-[#f5f5f5]">
            In the transportation business, drivers are the key and we ensure
            that their performance always remains well above the standards. For
            this purpose several workshops, safety meetings, drills and
            scenarios are conducted regularly. A definitive and serious set of
            guidelines and protocols is also laid out to ensure that there is
            minimum deviation from plans. We ensure that all the safety
            compliances and quality control measures are strictly followed from
            the beginning to the end of the route.
            <br />
            <br />
            R.E.D. Trucking & Logistics is poised to ensure a safe passage for
            the invaluable cargo of its passengers. We put ‘safety first’ and
            everything including our drivers, delivery personnel, motoring
            traffic and the cargo we carry comes under our safety net. Our
            outlook towards safety, extensive training, modern equipment and use
            of technology like Electronic Logging Devices (ELDs) makes it easier
            to track and monitor the drivers.
            <br />
            <br />
            We monitor driver’s schedules, their habits, administer them regular
            drug tests and constantly go over their performances and driving
            records. Our promise to make time bound and undamaged delivery of
            clients’ cargo involves that we audit and inspect driver’s logs
            periodically.
            <br />
            <br />
            It goes without saying that backgrounds of all drivers are checked
            before hiring them. The vehicles are also throughly checked before
            each journey and we ensure that the vehicles are in pristine
            condition to aviod any unforeseen accidents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSafety;
