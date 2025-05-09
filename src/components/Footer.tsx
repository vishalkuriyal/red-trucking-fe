import { Link } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";
import mail from "../assets/svgs/footerMail.svg";
import phone from "../assets/svgs/footerPhone.svg";
import address from "../assets/svgs/footerLocation.svg";

type LinkType = {
  name: string;
  path: string;
};

const pageLinks: LinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "R.E.D. Drivers",
    path: "/red-drivers",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const serviceLinks: LinkType[] = [
  {
    name: "Transport",
    path: "/transport",
  },
  {
    name: "Warehousing",
    path: "/warehousing",
  },
  {
    name: "Logistic",
    path: "/logistic",
  },
  {
    name: "Transloading",
    path: "/transloading",
  },
];

const helpfulLinks: LinkType[] = [
  {
    name: "Privacy Policy",
    path: "",
  },
  {
    name: "Term & Conditions",
    path: "",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Join Our Team",
    path: "/join-us",
  },
];

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py:8 md:pt-28 md:pb-10 border-b border-[#191919] flex">
        <div className="w-[40%]">
          <Link to="/" className="">
            <img src={logo} alt="home" className="" />
          </Link>
          <div className="flex flex-col gap-5 mt-10">
            <a
              href="mailto:info@redtrucking.com"
              className="flex gap-5 items-start"
            >
              <img src={mail} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white">
                 INFO@REDTRUCKING.COM
              </p>
            </a>
            <a href="tel:9737321333" className="flex gap-5 items-start">
              <img src={phone} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white">
                973-732-1333 | 973-679-6844
              </p>
            </a>
            <a href="" className="flex gap-5 items-start">
              <img src={address} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white">
                R.E.D. Trucking & Logistics HQ
                <br />
                158 Paris St, Newark, NJ 07105, United States
              </p>
            </a>
          </div>
        </div>
        <div className="w-[60%] grid grid-cols-3 justify-between gap-10">
          <div className="">
            <h4 className="anton-regular text-2xl text-white mb-8">
              INFORMATION
            </h4>
            <div className="flex flex-col gap-4">
              {pageLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="font-kindsans-regular text-white text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h4 className="anton-regular text-2xl text-white mb-8">SERVICES</h4>
            <div className="flex flex-col gap-4">
              {serviceLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="font-kindsans-regular text-white text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h4 className="anton-regular text-2xl text-white mb-8">
              HELPFULL LINKS
            </h4>
            <div className="flex flex-col gap-4">
              {helpfulLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="font-kindsans-regular text-white text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pb-28 flex justify-center">
        <p className="text-center text-white font-kindsans-regular text-xl">Copyright©2025 All Rights Reserved | <span className="text-primary">R.E.D. Trucking & Logistics</span> Made by TECHQILLA</p>
      </div>
    </div>
  );
};

export default Footer;
