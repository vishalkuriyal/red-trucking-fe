import { useState, useEffect } from "react";
import bg from "../../assets/images/contactHeroBg.webp";
import LocationIcon from "../../assets/svgs/locationicon.svg";
import MailIcon from "../../assets/svgs/mailicon.svg";
import PhoneIcon from "../../assets/svgs/phoneicon.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../../assets/images/contactimg.webp";
import drop from "../../assets/svgs/donwarrow.svg";
import clock from "../../assets/svgs/Clock.svg";
import HomeLocation from "../homepage/HomeLocation";

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

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  service: string;
  bestTime: string;
  message: string;
}

// TODO: paste your Apps Script Web App URL here (ends in /exec)
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwqFQ2Dk9QH7rYbpkeEfC2nPuG-6Tlfw1G4CTUvN7mdtsPst3kC-nLyWFo9YFig6ms5/exec";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const data: CardData[] = [
    {
      title: "HEADQUARTER",
      items: [
        {
          label: "Address",
          value: "2AB Terminal Way Avenel, NJ 07001",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "info@redtrucking.com",
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
          value: "2AB Terminal Way Avenel, NJ 07001",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "sales@redtrucking.com",
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
          value: "2AB Terminal Way Avenel, NJ 07001",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "sales@redtrucking.com",
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
          value: "2AB Terminal Way Avenel, NJ 07001",
          icon: LocationIcon,
          type: "location",
        },
        {
          label: "Email",
          value: "recruiting@redtrucking.com",
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

  const initialValues: ContactFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    bestTime: "",
    message: "",
  };

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    // Set Page Title
    document.title = "Contact R.E.D. Trucking & Logistics | Get in Touch";

    // --- Description ---
    let metaDescription = document.querySelector<HTMLMetaElement>(
      "meta[name='description']",
    );
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Contact R.E.D. for transportation, warehousing, transloading, drayage, and logistics services. Speak with our team about your freight needs.",
    );

    // --- Keywords ---
    // let metaKeywords = document.querySelector<HTMLMetaElement>(
    //   "meta[name='keywords']",
    // );
    // if (!metaKeywords) {
    //   metaKeywords = document.createElement("meta");
    //   metaKeywords.name = "keywords";
    //   document.head.appendChild(metaKeywords);
    // }
    // metaKeywords.setAttribute(
    //   "content",
    //   "Digital Marketing & IT Services Company",
    // );
    // --- Canonical ---
    // let linkTag = document.querySelector<HTMLLinkElement>(
    //   "link[rel='canonical']",
    // );
    // if (!linkTag) {
    //   linkTag = document.createElement("link");
    //   linkTag.rel = "canonical";
    //   document.head.appendChild(linkTag);
    // }
    // linkTag.setAttribute("href", "https://www.techqilla.com");
  }, []);

  return (
    <>
      {/* Existing Header Section */}
      <div className="bg-secondary bg-cover pt-[80px] md:pt-[130px]">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
          <div className="relative">
            <p className="font-kindsans-medium text-white">
              HOME &gt; <span className="text-primary">Contact US</span>
            </p>
            <h1 className="anton-regular text-white text-3xl md:text-[40px] relative z-20">
              CONTACT US
            </h1>
            <p className="gradient-stroke-primary anton-regular text-5xl md:text-[72px] leading-[70px] relative bottom-8 z-10">
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
        <div className="max-w-screen-2xl mx-auto px-5 md:px-20 relative hidden sm:block">
          <h2 className="anton-regular text-6xl md:text-[128px] md:leading-[120px] gradient-stroke-primary absolute left-0 -top-10">
            CONTACT US
          </h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap bg-secondary justify-center mt-0 shadow-none py-8 md:py-14">
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
                  className="flex items-center font-kindsans-regular gap-4 mb-4 border-b border-[#444446] py-2"
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
          <h3 className="anton-regular text-7xl md:text-[128px] md:leading-[114px] gradient-stroke-other mb-20">
            SEND US A MESSAGE
          </h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 h-full">
            <div className="w-full md:w-1/2 h-full">
              {submitStatus === "success" && (
                <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 mb-6">
                  Thanks! Your message has been sent — we'll get back to you
                  soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-600/20 border border-red-500 text-red-400 p-4 mb-6">
                  Something went wrong sending your message. Please try again or
                  call us directly.
                </div>
              )}

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                  try {
                    await fetch(SHEET_URL, {
                      method: "POST",
                      mode: "no-cors",
                      body: new URLSearchParams({
                        formType: "contact",
                        ...values,
                      }),
                    });
                    setSubmitStatus("success");
                  } catch (err) {
                    console.error("Sheet submission failed:", err);
                    setSubmitStatus("error");
                  } finally {
                    actions.setSubmitting(false);
                    actions.resetForm({ values: initialValues });
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <div className="flex flex-col md:flex-row gap-8 items-start ">
                    <Form className="grid grid-cols-1 md:grid-cols-2 gap-6  text-white justify-between">
                      <div>
                        <label className="" htmlFor="firstName">
                          First Name
                        </label>
                        <Field
                          name="firstName"
                          placeholder="First Name"
                          className="w-full p-5 mt-2 outline-none  text-white bg-transparent border border-[#D9D9D9]/30"
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
                          className="w-full p-5 mt-2 outline-none text-white bg-transparent border border-[#D9D9D9]/30"
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
                          className="w-full p-5 mt-2 outline-none text-white   bg-transparent border border-[#D9D9D9]/30"
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
                          className="w-full p-5 mt-2 outline-none text-white  bg-transparent border border-[#D9D9D9]/30"
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
                          className="w-full p-5 mt-2 outline-none text-white appearance-none bg-secondary border border-[#D9D9D9]/30 pr-10"
                        >
                          <option value="" className="">
                            Select a service
                          </option>
                          <option value="logistics" className="">
                            Logistics
                          </option>
                          <option value="sales">Sales</option>
                          <option value="support">Support</option>
                        </Field>

                        {/* Custom dropdown icon (image or SVG) */}
                        <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
                          <img
                            src={drop}
                            alt="dropdown icon"
                            className="mt-6 "
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
                          placeholder="Write in (12-00-AM)"
                          className="w-full p-5 mt-2 outline-none text-white  bg-transparent border border-[#D9D9D9]/30"
                        />
                        {/* Custom dropdown icon (image or SVG) */}
                        <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
                          <img
                            src={clock}
                            alt="dropdown icon"
                            className="mt-6"
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
                          className="w-full p-2 mt-2 h-30 outline-none text-white bg-transparent border border-[#D9D9D9]/30"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="font-kindsans-bold flex group  md:mt-8 disabled:opacity-60"
                        >
                          <p className="py-4 px-5 bg-primary text-white">
                            {isSubmitting ? "Sending..." : "Submit"}
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
                )}
              </Formik>
            </div>
            <div className="md:w-[40%] h-full">
              <img src={image} className="w-full  border" alt="" />
            </div>
          </div>
        </div>
      </div>

      <HomeLocation />
    </>
  );
};

export default Contact;
