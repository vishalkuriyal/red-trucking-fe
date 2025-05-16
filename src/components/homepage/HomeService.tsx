import PrimaryButton from "../common/PrimaryButton";
import transport from "../../assets/svgs/transport.svg";
import warehouse from "../../assets/svgs/warehouse.svg";
import logistics from "../../assets/svgs/logistics.svg";
import transloading from "../../assets/svgs/transloading.svg";
import arrow from "../../assets/svgs/arrow.svg";
import { Link, useNavigate } from "react-router-dom";

type ServiceTypeProps = {
  name: string;
  des: string;
  path: string;
  image: string;
};

const services: ServiceTypeProps[] = [
  {
    name: "TRANSPORT",
    des: "Reliable transport solutions including port drayage, rail service and local FTL for fast, secure delivery.",
    path: "/transport",
    image: transport,
  },
  {
    name: "WAREHOUSING",
    des: "Secure and scalable storage solutions designed to support smooth distribution and supply chain flow.",
    path: "/warehousing",
    image: warehouse,
  },
  {
    name: "LOGISTICS",
    des: "We manage end-to-end coordination, ensuring every shipment moves efficiently from origin to destination without delays.",
    path: "/logistic",
    image: logistics,
  },
  {
    name: "TRANSLOADING",
    des: "Fast & flexible cargo transfers between modes to reduce transit time and improve freight movement reliability.",
    path: "/transloading",
    image: transloading,
  },
];

const HomeService = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg1 bg-cover">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-10 md:py-28">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
          <h3 className="anton-regular text-white text-4xl md:text-[64px] md:leading-[66px] mb-6 md:mb-0">
            <span className="text-primary">OUR</span>
            <br />
            SERVICES
          </h3>
          <PrimaryButton
            onClick={() => {
              navigate("/transport");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Learn More
          </PrimaryButton>
        </div>
        <div className="grid md:grid-cols-4 gap-20 md:gap-[14px] pb-10 md:pb-0">
          {services.map((service, index) => (
            <Link
              to={service.path}
              className="relative pt-7 px-10 pb-20 bg-[#1D1D1D] hover:bg-primary group transition-all duration-500"
              key={index}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
