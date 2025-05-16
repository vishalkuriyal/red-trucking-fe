import bg from "../../assets/images/aboutWhatWeDoImg.png"

const AboutWhatWeDo = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-5xl md:text-[128px] md:leading-[114px] gradient-stroke mb-8">
          WHAT WE DO
        </h3>
        <div className="flex flex-col md:flex-row justify-between">
          {" "}
          <div className="flex flex-col gap-8 md:gap-0 justify-between">
            <p className="anton-regular text-white text-4xl leading-[38px]">
              WE DELIVER SMART AND
              <br /> <span className="text-primary">DEPENDABLE lOGISTICS</span>
            </p>
            <div className="text-white font-kindsans-medium flex items-center gap-7">
              <div className="pr-7 border-r">
                <span className="anton-regular text-4xl">48</span> {" "}States
              </div>
              <div className="">
                <span className="anton-regular text-4xl">95%</span>{" "} Customer
                Satisfaction
              </div>
            </div>
          </div>
          <p className="font-kindsans-regular md:w-[50%] text-white text-xl">
            We go beyond transportation by offering tech-enabled logistics with
            a human touch. Our real-time tracking, automated dispatching, and
            live updates keep you informed at every step. Whether you're moving
            frequent freight or seasonal loads, our solutions are tailored to
            fit your unique demands. Backed by an experienced team, we build
            partnerships, not just shipments, to support your growth.
          </p>
        </div>
      </div>
      <div className="pb-8 md:pb-28">
        <img className="w-full md:h-[500px] object-cover" src={ bg} alt=""/>
      </div>
    </div>
  );
};

export default AboutWhatWeDo;
