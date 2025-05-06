import PrimaryButton from "../common/PrimaryButton";
import transport from "../../assets/svgs/transport.svg";
import warehouse from "../../assets/svgs/warehouse.svg";
import logistics from "../../assets/svgs/logistics.svg";
import transloading from "../../assets/svgs/transloading.svg";
import arrow from "../../assets/svgs/arrow.svg";
import { Link } from "react-router-dom";

type ServiceTypeProps = {
  name: string;
  des: string;
  path: string;
  image: string;
};

const services: ServiceTypeProps[] = [
  {
    name: "TRANSPORT",
    des: "As one of the most trusted transport and logistic services on the East Coast...",
    path: "",
    image: transport,
  },
  {
    name: "WAREHOUSING",
    des: "As one of the most trusted transport and logistic services on the East Coast...",
    path: "",
    image: warehouse,
  },
  {
    name: "LOGISTICS",
    des: "As one of the most trusted transport and logistic services on the East Coast...",
    path: "",
    image: logistics,
  },
  {
    name: "TRANSLOADING",
    des: "As one of the most trusted transport and logistic services on the East Coast...",
    path: "",
    image: transloading,
  },
];

const HomeService = () => {
  return (
    <div className="bg-bg1 bg-cover">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="flex justify-between items-end mb-16">
          <h3 className="anton-regular text-white text-[64px] leading-[66px]">
            <span className="text-primary">TRANSPORT</span>
            <br />
            SERVICES
          </h3>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
        <div className="grid md:grid-cols-4 gap-[14px]">
          {services.map((service, index) => (
            <Link
              to={service.path}
              className="relative pt-7 px-10 pb-20 bg-[#1D1D1D] hover:bg-primary group transition-all duration-500"
              key={index}
            >
              <div className="size-10 rounded-full bg-primary group-hover:bg-[#1d1d1d] flex justify-center items-center mb-6 transition-all duration-500">
                <img src={arrow} alt="path" className="" />
              </div>
              <div className="">
                <h4 className="anton-regular text-4xl text-white mb-8">
                  {service.name}
                </h4>
                <p className="font-kindsans-medium text-white">{service.des}</p>
              </div>
              <img
                src={service.image}
                className="absolute right-0 -bottom-14 group-hover:scale-110 transition-all duration-500 origin-top-right"
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
