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
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:pt-28 md:pb-10 border-b border-[#191919] flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[40%]">
          <Link to="/" className="flex justify-center md:justify-start">
            <img src={logo} alt="home" className="" />
          </Link>
          <div className="flex flex-col items-center md:items-start gap-5 mt-10">
            <a
              href="mailto:info@redtrucking.com"
              className="flex flex-col md:flex-row gap-5 items-center text-center md:items-start"
            >
              <img src={mail} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white">
                 INFO@REDTRUCKING.COM
              </p>
            </a>
            <a
              href="tel:9737321333"
              className="flex flex-col md:flex-row gap-5 items-center text-center md:items-start"
            >
              <img src={phone} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white">
                973-732-1333 | 973-679-6844
              </p>
            </a>
            <a
              href=""
              className="flex flex-col md:flex-row gap-5 items-center text-center md:items-start"
            >
              <img src={address} className="" alt="" />
              <p className="font-kindsans-regular text-lg text-white md:text-left">
                R.E.D. Trucking & Logistics HQ
                <br />
                158 Paris St, Newark, NJ 07105, United States
              </p>
            </a>
          </div>
        </div>
        <div className="md:w-[60%] grid md:grid-cols-3 justify-center md:justify-between gap-10">
          <div className="text-center">
            <h4 className="anton-regular text-2xl text-white mb-8">
              INFORMATION
            </h4>
            <div className="flex flex-col gap-4">
              {pageLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="font-kindsans-regular text-white text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h4 className="anton-regular text-2xl text-white mb-8">SERVICES</h4>
            <div className="flex flex-col gap-4">
              {serviceLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="font-kindsans-regular text-white text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
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
      <div className="pt-10  mb-4 flex flex-col md:flex-row justify-center">
        <p className="text-center text-white font-kindsans-regular text-xl">
          Copyright©2025 All Rights Reserved |{" "}
          <span className="text-primary">R.E.D. Trucking & Logistics</span> Made
          by{" "}
          <span
            className="cursor-pointer"
            onClick={() => window.open("https://techqilla.com")}
          >
            TECHQILLA
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-[6px] pb-8 md:pb-28 text-white font-kindsans-regular text-xl">
        <a href="https://www.instagram.com/redtrucking/" target="_blank">
          <svg
            width="26"
            height="26"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16821 0C7.89942 0.00194995 8.27055 0.00584986 8.59099 0.0149496L8.71708 0.0194995C8.86267 0.0246994 9.00631 0.0311992 9.17986 0.038999C9.87142 0.0714982 10.3433 0.180696 10.7573 0.341242C11.1863 0.506338 11.5477 0.729932 11.9091 1.09067C12.2397 1.41549 12.4955 1.80856 12.6585 2.24245C12.819 2.65649 12.9282 3.12837 12.9607 3.82061C12.9685 3.9935 12.975 4.13715 12.9802 4.2834L12.9841 4.40949C12.9939 4.72929 12.9978 5.10043 12.9991 5.83166L12.9997 6.31655V7.16803C13.0013 7.64213 12.9963 8.11623 12.9848 8.59019L12.9809 8.71629C12.9757 8.86254 12.9692 9.00618 12.9614 9.17908C12.9289 9.87131 12.8184 10.3425 12.6585 10.7572C12.4955 11.1911 12.2397 11.5842 11.9091 11.909C11.5843 12.2397 11.1912 12.4954 10.7573 12.6584C10.3433 12.819 9.87142 12.9282 9.17986 12.9607L8.71708 12.9802L8.59099 12.9841C8.27055 12.9932 7.89942 12.9977 7.16821 12.999L6.68333 12.9997H5.83252C5.35822 13.0014 4.88391 12.9964 4.40975 12.9847L4.28365 12.9808C4.12936 12.975 3.9751 12.9683 3.82088 12.9607C3.12931 12.9282 2.65744 12.819 2.24276 12.6584C1.80912 12.4953 1.41629 12.2396 1.09166 11.909C0.760796 11.5843 0.504815 11.1912 0.341603 10.7572C0.181061 10.3432 0.0718661 9.87131 0.0393677 9.17908L0.0198687 8.71629L0.0166189 8.59019C0.00463747 8.11623 -0.000779502 7.64213 0.000369699 7.16803V5.83166C-0.00142934 5.35756 0.00333759 4.88346 0.014669 4.40949L0.0192188 4.2834C0.0244185 4.13715 0.0309182 3.9935 0.0387178 3.82061C0.0712161 3.12837 0.180411 2.65714 0.340952 2.24245C0.504546 1.80839 0.760976 1.4153 1.09231 1.09067C1.41675 0.760188 1.80935 0.504436 2.24276 0.341242C2.65744 0.180696 3.12866 0.0714982 3.82088 0.038999C3.99377 0.0311992 4.13806 0.0246994 4.28365 0.0194995L4.40975 0.0155996C4.8837 0.00405116 5.35779 -0.000932531 5.83188 0.000649937L7.16821 0ZM6.50004 3.24992C5.63813 3.24992 4.81152 3.59232 4.20206 4.2018C3.5926 4.81128 3.25021 5.63791 3.25021 6.49984C3.25021 7.36177 3.5926 8.18841 4.20206 8.79788C4.81152 9.40736 5.63813 9.74976 6.50004 9.74976C7.36195 9.74976 8.18856 9.40736 8.79802 8.79788C9.40749 8.18841 9.74988 7.36177 9.74988 6.49984C9.74988 5.63791 9.40749 4.81128 8.79802 4.2018C8.18856 3.59232 7.36195 3.24992 6.50004 3.24992ZM6.50004 4.54989C6.75611 4.54985 7.00967 4.60024 7.24626 4.6982C7.48285 4.79615 7.69783 4.93975 7.87893 5.12079C8.06002 5.30183 8.20368 5.51677 8.30172 5.75333C8.39975 5.98989 8.45022 6.24345 8.45027 6.49952C8.45031 6.75559 8.39992 7.00916 8.30196 7.24576C8.20401 7.48235 8.06042 7.69734 7.87938 7.87844C7.69835 8.05954 7.48342 8.20321 7.24686 8.30124C7.01031 8.39927 6.75676 8.44975 6.50069 8.44979C5.98355 8.44979 5.48758 8.24435 5.1219 7.87867C4.75623 7.51298 4.55079 7.017 4.55079 6.49984C4.55079 5.98268 4.75623 5.4867 5.1219 5.12102C5.48758 4.75533 5.98355 4.54989 6.50069 4.54989M9.91302 2.27494C9.69754 2.27494 9.49089 2.36055 9.33852 2.51291C9.18616 2.66528 9.10056 2.87194 9.10056 3.08743C9.10056 3.30291 9.18616 3.50957 9.33852 3.66194C9.49089 3.81431 9.69754 3.89991 9.91302 3.89991C10.1285 3.89991 10.3351 3.81431 10.4875 3.66194C10.6399 3.50957 10.7255 3.30291 10.7255 3.08743C10.7255 2.87194 10.6399 2.66528 10.4875 2.51291C10.3351 2.36055 10.1285 2.27494 9.91302 2.27494Z"
              className="fill-white hover:fill-[#F20003] cursor-pointer"
            />
          </svg>
        </a> | 
        <a href="http://facebook.com/NJREDTrucking" target="_blank">
          <svg
            width="26"
            height="26"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.23 0H0.77C0.565783 0 0.369931 0.0753302 0.225528 0.209419C0.0811248 0.343507 0 0.52537 0 0.715V12.285C0 12.4746 0.0811248 12.6565 0.225528 12.7906C0.369931 12.9247 0.565783 13 0.77 13H7.476V7.9625H5.656V6.0125H7.476V4.55C7.4383 4.20664 7.48195 3.85978 7.6039 3.53375C7.72585 3.20772 7.92314 2.9104 8.18193 2.66267C8.44072 2.41493 8.75474 2.22277 9.10198 2.09965C9.44921 1.97654 9.82125 1.92546 10.192 1.95C10.7368 1.94651 11.2814 1.97255 11.823 2.028V3.783H10.71C9.828 3.783 9.66 4.173 9.66 4.7385V5.993H11.76L11.487 7.943H9.66V13H13.23C13.3311 13 13.4312 12.9815 13.5247 12.9456C13.6181 12.9096 13.703 12.857 13.7745 12.7906C13.846 12.7242 13.9027 12.6454 13.9414 12.5586C13.9801 12.4719 14 12.3789 14 12.285V0.715C14 0.621105 13.9801 0.528129 13.9414 0.441381C13.9027 0.354634 13.846 0.275813 13.7745 0.209419C13.703 0.143025 13.6181 0.0903583 13.5247 0.0544262C13.4312 0.0184941 13.3311 0 13.23 0Z"
              className="fill-white hover:fill-[#F20003] cursor-pointer"
            />
          </svg>
        </a> | 
        <a
          href="https://www.linkedin.com/company/red-trucking/"
          className=""
          target="_blank"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9603 0H1.1108C0.517968 0 0 0.426562 0 1.01243V11.886C0 12.4751 0.517968 13 1.1108 13H11.9571C12.5531 13 13 12.4716 13 11.886V1.01243C13.0035 0.426562 12.5531 0 11.9603 0ZM4.0297 10.8361H2.16734V5.04563H4.0297V10.8361ZM3.16294 4.16522H3.14959C2.55357 4.16522 2.16763 3.72154 2.16763 3.16614C2.16763 2.60058 2.56372 2.16734 3.1731 2.16734C3.78247 2.16734 4.15535 2.59739 4.1687 3.16614C4.16841 3.72154 3.78247 4.16522 3.16294 4.16522ZM10.8361 10.8361H8.97376V7.67C8.97376 6.91147 8.70273 6.39321 8.02894 6.39321C7.51416 6.39321 7.20948 6.74143 7.07396 7.08065C7.02318 7.20252 7.00954 7.3685 7.00954 7.53797V10.8361H5.14718V5.04563H7.00954V5.85145C7.28057 5.46551 7.70394 4.91011 8.68909 4.91011C9.91161 4.91011 10.8364 5.71594 10.8364 7.45324L10.8361 10.8361Z"
              className="fill-white hover:fill-[#F20003] cursor-pointer"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
