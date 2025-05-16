import bg from "../../assets/images/contactHeroBg.png";
import LocationIcon from "../../assets/svgs/LocationIcon.svg";
import MailIcon from "../../assets/svgs/mailicon.svg";
import PhoneIcon from "../../assets/svgs/phoneicon.svg";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../../assets/images/contactimg.png";
import drop from "../../assets/svgs/donwarrow.svg"
import clock from "../../assets/svgs/Clock.svg"

interface ContactItem {
  label: string;
  value: string;
  icon: string;
  type: "location" | "email" | "phone";
}

interface CardData {
  title: string;
  items: ContactItem[];
}

const Contact = () => {
  const data: CardData[] = [
    {
      title: "HEADQUARTER",
      items: [
        {
          label: "Address",
          value: "158 Paris St, Newark, NJ 07105, United States",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "info@redtruckinc.com",
          icon: MailIcon,
          type: "email",
        },
        {
          label: "Phone",
          value: "973-732-1333",
          icon: PhoneIcon,
          type: "phone",
        },
      ],
    },
    {
      title: "WAREHOUSE",
      items: [
        {
          label: "Address",
          value: "158 Paris St, Newark, NJ 07105, United States",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "sales@redtruckinc.com",
          icon: MailIcon,
          type: "email",
        },
        {
          label: "Phone",
          value: "973-732-1333",
          icon: PhoneIcon,
          type: "phone",
        },
      ],
    },
    {
      title: "SALES",
      items: [
        {
          label: "Address",
          value: "158 Paris St, Newark, NJ 07105, United States",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "sales@redtruckinc.com",
          icon: MailIcon,
          type: "email",
        },
        {
          label: "Phone",
          value: "973-732-1333",
          icon: PhoneIcon,
          type: "phone",
        },
      ],
    },
    {
      title: "RECRUITING",
      items: [
        {
          label: "Address",
          value: "158 Paris St, Newark, NJ 07105, United States",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "recruiting@redtruckinc.com",
          icon: MailIcon,
          type: "email",
        },
        {
          label: "Phone",
          value: "973-732-1333",
          icon: PhoneIcon,
          type: "phone",
        },
      ],
    },
  ];

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    service: Yup.string().required("Please select  service"),
    bestTime: Yup.string().required("Best Time to Connect is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <>
      {/* Existing Header Section */}
      <div className="bg-bg1 bg-cover md:pt-[130px]">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
          <div className="relative">
            <p className="font-kindsans-medium text-white">
              HOME &gt; <span className="text-primary">Contact US</span>
            </p>
            <h1 className="anton-regular text-white text-[40px] relative z-20">
              CONTACT US
            </h1>
            <p className="gradient-stroke-primary anton-regular text-[72px] leading-[70px] relative bottom-8 z-10">
              Contact US
            </p>
          </div>
          <div>
            <img className="w-full object-cover" src={bg} alt="" />
          </div>
        </div>
      </div>

      {/* Contact Title with large "CONTACT US" */}
      <div className="bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-20 relative">
          <h2 className="anton-regular text-[128px] leading-[120px] gradient-stroke-primary absolute left-0 -top-10">
            CONTACT US
          </h2>
        </div>
      </div>

      {/* Your existing return content ends here, now insert the cards */}

      {/* Cards Section */}
      <div className="flex flex-wrap bg-black justify-center mt-0 shadow-none ">
        {data.map((card, index) => (
          <div
            key={index}
            className="w-[296px] h-[340px] text-white flex flex-col m-4 border border-[#444446]"
          >
            {/* Title */}
            <div className="bg-red-600 w-full h-20 flex items-center justify-center px-2">
              <h3 className="text-white text-xl anton-regular text-center">
                {card.title}
              </h3>
            </div>

            {/* Items with icons */}
            <div className="bg-black w-full flex flex-col justify-around text-sm py-4 flex-1 px-8">
              {card.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 mb-4 border-b border-[#444446] py-2"
                >
                  <img src={item.icon} alt={item.type} className="h-5 w-5" />
                  <p className="m-0">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
          <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke mb-20">
            SEND US A MESSAGE
          </h3>
          <div className="flex gap-10">
            <div className="w-full md:w-1/2">
              <Formik
                initialValues={{
                  firstName: "",
                  lstName: "",
                  email: "",
                  phoneNumber: "",
                  service: "",
                  bestTime: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form Submitted:", values);
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        name="firstName"
                        placeholder="First Name"
                        className="w-full p-2 text-[#555555] bg-black border border-[#1D1D1D]"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <Field
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full p-2 text-[#555555] bg-black border border-[#1D1D1D]"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="w-full p-2 text-[#555555]   bg-black border border-[#1D1D1D]"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-full p-2 text-[#555555]  bg-black border border-[#1D1D1D]"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="Custom-Select relative w-full">
                      <label htmlFor="service">Service</label>
                      <Field
                        name="service"
                        as="select"
                        className="w-full p-2 text-[#555555] appearance-none bg-black border border-[#1D1D1D] pr-10"
                      >
                        <option value="">Select a service</option>
                        <option value="logistics">Logistics</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                      </Field>

                      {/* Custom dropdown icon (image or SVG) */}
                      <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
                        <img
                          src={drop}
                          alt="dropdown icon"
                          className="mt-6 mb-5"
                        />
                      </div>

                      <ErrorMessage
                        name="service"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                      <div className="Custom-Clock relative w-full">
                      <label htmlFor="bestTime">Best Time to Connect</label>
                      <Field
                        name="bestTime"
                        placeholder="HH-MM-AM"
                        className="w-full p-2 text-[#555555]  bg-black border border-[#1D1D1D]"
                      />
                      {/* Custom dropdown icon (image or SVG) */}
                      <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
                        <img
                          src={clock}
                          alt="dropdown icon"
                          className="mt-6 mb-6"
                        />
                      </div>
                      <ErrorMessage
                        name="bestTime"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message">Message</label>
                      <Field
                        name="message"
                        placeholder="Type Message"
                        as="textarea"
                        rows={4}
                        className="w-full p-2 text-[#555555] bg-black border border-[#1D1D1D]"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button className="font-kindsans-bold flex group ml-6 mt-8">
                        <p className="py-4 px-5 bg-primary text-white">
                          Submit
                        </p>
                        <div className="bg-[#D00003] p-[10px]">
                          <div className="size-10 flex justify-center items-center border border-white rounded-full group-hover:bg-white transition-all duration-500">
                            <svg
                              width="14"
                              height="6"
                              viewBox="0 0 14 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.205 4.60289L12.983 2.82488C13.042 2.76594 13.0751 2.68599 13.0751 2.60263C13.0751 2.51927 13.042 2.43932 12.983 2.38038L11.205 0.602371C11.1611 0.558277 11.105 0.528222 11.044 0.516016C10.9829 0.50381 10.9197 0.510002 10.8621 0.533807C10.8046 0.557613 10.7555 0.59796 10.7209 0.649734C10.6864 0.701507 10.668 0.762375 10.668 0.824622L10.6685 2.28837L0.314696 2.28792V2.91734L10.6685 2.91689L10.668 4.38064C10.668 4.44289 10.6864 4.50375 10.7209 4.55553C10.7555 4.6073 10.8046 4.64765 10.8621 4.67145C10.9197 4.69526 10.9829 4.70145 11.044 4.68925C11.105 4.67704 11.1611 4.64698 11.205 4.60289Z"
                                className="fill-[#F5F5F5] group-hover:fill-[#F20003] transition-all duration-500"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </Form>
                </div>
              </Formik>
            </div>
            <div className="w-[45%]">
              <div className="">
                <img src={image} className="w-full " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 bg-black py-8 md:py-28">
        <h3 className="anton-regular text-[40px] text-center text-white leading-[40px]">
          FIND LOCATIONS
        </h3>
        <h3 className="anton-regular text-[40px] text-center text-white gradient-stroke leading-[40px]">
          FIND LOCATIONS
        </h3>
        <h3 className="anton-regular text-[40px] text-center text-white gradient-stroke leading-[40px] mb-10">
          FIND LOCATIONS
        </h3>
        <div className="flex justify-center items-center">
          <img className="" alt="" src="/src/assets/svgs/map.svg"></img>
        </div>
      </div>
    </>
  );
};

export default Contact;
