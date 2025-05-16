import transport from "../../assets/svgs/transport.svg";
import warehouse from "../../assets/svgs/warehouse.svg";
import logistics from "../../assets/svgs/logistics.svg";
import transloading from "../../assets/svgs/transloading.svg";
import { Link } from "react-router-dom";

type ServicePropsType = {
  bedcrum: string;
  heading: string;
  serviceName: string;
  bgImage: string;
};

type OtherServiceType = {
  name: string;
  icon: string;
  path: string;
};

const otherServices: OtherServiceType[] = [
  {
    name: "TRANSPORT",
    icon: transport,
    path: "/transport",
  },
  {
    name: "WAREHOUSE",
    icon: warehouse,
    path: "/warehousing",
  },
  {
    name: "LOGISTICS",
    icon: logistics,
    path: "/logistics",
  },
  {
    name: "TRANSLOADING",
    icon: transloading,
    path: "/transloading",
  },
];
const ServiceHero = ({
  bedcrum,
  heading,
  serviceName,
  bgImage,
}: ServicePropsType) => {
  return (
    <div className="bg-secondary pt-[80px] md:pt-[130px]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
        <div className="relative">
          <p className="font-kindsans-medium text-white">
            HOME &gt; SERVICES &gt;{" "}
            <span className="text-primary uppercase">{bedcrum}</span>{" "}
          </p>
          <h1 className="anton-regular text-white text-2xl md:text-[40px] relative z-20 uppercase">
            {heading}
          </h1>
          <p className="gradient-stroke-primary anton-regular text-[72px] leading-[70px] relative bottom-7 z-10">
            SERVICES
          </p>
        </div>
        <div className="relative">
          <img className="w-full object-cover" src={bgImage} alt="" />
          <div className="h-full w-[20%] bg-gradient-to-r from-transparent to-primary/50 absolute top-0 right-0"></div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-6xl md:text-[128px] md:leading-[114px] gradient-stroke-primary absolute -top-10">
          {serviceName}
        </h3>
        <div className="pb-8 md:pb-14 grid md:grid-cols-4 gap-7">
          {otherServices.map((ser, idx) => (
            <Link
              to={ser.path}
              className="bg-[#282828] p-2 group hover:bg-primary transition-all duration-500"
              key={idx}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="bg-[#1d1d1d] px-6 py-2 flex items-center justify-between gap-7 shadow-[inset_0px_0px_20px] h-full">
                <h4 className="anton-regular text-2xl text-white">
                  {ser.name}
                </h4>
                <img
                  className="w-24 group-hover:scale-110 transition-all duration-500"
                  src={ser.icon}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
