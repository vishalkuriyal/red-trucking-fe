import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define the form values type
interface DriverApplicationFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  terminal: string;
  cdlA: string;
  yearObtainedCdlA: string;
  hasTwic: string;
  portExperience: string;
  portExperienceYears: string;
  hazMat: string;
  isWillingToGetHazMat: string;
  etc: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  receivesCommunication: boolean;
}

const OwnerOperatorForm: React.FC = () => {
  // Initialize form with Formik
  const formik = useFormik<DriverApplicationFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      terminal: "Newark (NY/NJ)",
      cdlA: "",
      yearObtainedCdlA: "",
      hasTwic: "",
      portExperience: "",
      portExperienceYears: "",
      hazMat: "",
      isWillingToGetHazMat: "",
      etc: "",
      addressLine1: "",
      addressLine2: "",
      country: "United States",
      city: "",
      stateProvince: "",
      zipCode: "",
      receivesCommunication: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      cdlA: Yup.string().required("CDL A information is required"),
      yearObtainedCdlA: Yup.string().required(
        "Year obtained CDL A is required"
      ),
      hasTwic: Yup.string().required("TWIC information is required"),
      hazMat: Yup.string().required("HazMat information is required"),
      addressLine1: Yup.string().required("Address line 1 is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      stateProvince: Yup.string().required("State/Province is required"),
      zipCode: Yup.string().required("ZIP/Postal Code is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);

      window.open(
        "https://intelliapp.driverapponline.com/c/horizonfreightsystem?r=RED&uri_b=ia_horizonfreightsystem_1349355994"
      );
      // Here you would send the form data to your backend
      // handleSubmitToBackend(values);
      formik.resetForm({
        values: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          terminal: "Newark (NY/NJ)",
          cdlA: "",
          yearObtainedCdlA: "",
          hasTwic: "",
          portExperience: "",
          portExperienceYears: "",
          hazMat: "",
          isWillingToGetHazMat: "",
          etc: "",
          addressLine1: "",
          addressLine2: "",
          country: "United States",
          city: "",
          stateProvince: "",
          zipCode: "",
          receivesCommunication: false,
        },
      });
    },
  });

  // Function to submit form data to backend
  // const handleSubmitToBackend = async (values: DriverApplicationFormValues) => {
  //   try {
  //     // Replace with your actual API endpoint
  //     const response = await fetch(
  //       "https://your-api-endpoint.com/driver-application",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       }
  //     );

  //     if (response.ok) {
  //       alert("Application submitted successfully!");
  //       formik.resetForm();
  //     } else {
  //       alert("Failed to submit application. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("An error occurred while submitting your application.");
  //   }
  // };

  return (
    <div className="bg-secondary text-white min-h-screen p-6">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14 border-t border-[#3c3c3c]">
        <form onSubmit={formik.handleSubmit} className="max-w-4xl mx-auto">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="font-kindsans-medium text-2xl mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-kindsans-medium mb-1"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block font-kindsans-medium mb-1"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <div className="pb-4 border-b border-[#3c3c3c]">
              <h2 className="text-lg font-semibold">
                <span className="">Contact</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-kindsans-medium mb-1"
                >
                  Cell Phone
                </label>
                <div className="flex">
                  <div className="flex items-center bg-secondary border border-[#bdbdbd]/30 outline-none -l p-2">
                    <span className="inline-block w-6 h-4  relative">
                      <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                        +1
                      </span>
                    </span>
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    className={`flex-grow p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "border-red-500"
                        : "border-gray-600"
                    } -r`}
                  />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-kindsans-medium mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Driving Experience */}
          <div className="mb-8">
            <div className="pb-4 border-b border-[#3c3c3c]">
              <h2 className="text-lg font-semibold mb-4">Driving Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div>
                <label
                  htmlFor="terminal"
                  className="block font-kindsans-medium mb-1"
                >
                  What terminal are you applying for:
                </label>
                <select
                  id="terminal"
                  name="terminal"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.terminal}
                  className="w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none "
                >
                  <option value="Newark (NY/NJ)">Newark (NY/NJ)</option>
                  <option value="Charleston">Charleston</option>
                  <option value="Savannah">Savannah</option>
                  <option value="Houston">Houston</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="cdlA"
                  className="block font-kindsans-medium mb-1"
                >
                  CDL A
                </label>
                <input
                  id="cdlA"
                  name="cdlA"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cdlA}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.cdlA && formik.errors.cdlA
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.cdlA && formik.errors.cdlA ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.cdlA}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="yearObtainedCdlA"
                  className="block font-kindsans-medium mb-1"
                >
                  Year Obtained CDL A
                </label>
                <input
                  id="yearObtainedCdlA"
                  name="yearObtainedCdlA"
                  type="text"
                  placeholder="1997"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.yearObtainedCdlA}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.yearObtainedCdlA &&
                    formik.errors.yearObtainedCdlA
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.yearObtainedCdlA &&
                formik.errors.yearObtainedCdlA ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.yearObtainedCdlA}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-kindsans-medium mb-1">
                  Do you have a TWIC
                </label>
                <div className="flex gap-1">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="hasTwic"
                        value="Yes"
                        checked={formik.values.hasTwic === "Yes"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.hasTwic === "Yes"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        Yes
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="hasTwic"
                        value="No"
                        checked={formik.values.hasTwic === "No"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.hasTwic === "No"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        No
                      </div>
                    </div>
                  </label>
                </div>
                {formik.touched.hasTwic && formik.errors.hasTwic ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.hasTwic}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="block font-kindsans-medium mb-1">
                  Port Experience
                </label>
                <div className="flex gap-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="portExperience"
                        value="Yes"
                        checked={formik.values.portExperience === "Yes"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.portExperience === "Yes"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        Yes
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="portExperience"
                        value="No"
                        checked={formik.values.portExperience === "No"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.portExperience === "No"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        No
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="portExperienceYears"
                  className="block font-kindsans-medium mb-1"
                >
                  Port Experience
                </label>
                <select
                  id="portExperienceYears"
                  name="portExperienceYears"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.portExperienceYears}
                  className="w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none "
                  disabled={formik.values.portExperience !== "Yes"}
                >
                  <option value="">Please select</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-kindsans-medium mb-1">
                  Haz Mat
                </label>
                <div className="flex gap-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="hazMat"
                        value="Yes"
                        checked={formik.values.hazMat === "Yes"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.hazMat === "Yes"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        Yes
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="hazMat"
                        value="No"
                        checked={formik.values.hazMat === "No"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.hazMat === "No"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        No
                      </div>
                    </div>
                  </label>
                </div>
                {formik.touched.hazMat && formik.errors.hazMat ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.hazMat}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="block font-kindsans-medium mb-1">
                  Are you willing to get your HAZMAT?
                </label>
                <div className="flex gap-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="isWillingToGetHazMat"
                        value="Yes"
                        checked={formik.values.isWillingToGetHazMat === "Yes"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.isWillingToGetHazMat === "Yes"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        Yes
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden original radio input */}
                      <input
                        type="radio"
                        name="isWillingToGetHazMat"
                        value="No"
                        checked={formik.values.isWillingToGetHazMat === "No"}
                        onChange={formik.handleChange}
                        className="sr-only" // Visually hidden but still accessible
                      />

                      {/* Custom radio appearance */}
                      <div
                        className={`px-3 py-2 flex items-center font-kindsans-regular justify-center ${
                          formik.values.isWillingToGetHazMat === "No"
                            ? "bg-primary"
                            : "bg-[#202020]"
                        }`}
                      >
                        No
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="drivingExperience"
                  className="block font-kindsans-medium mb-1"
                >
                  Driving Experience in years
                </label>
                <select
                  id="drivingExperience"
                  name="drivingExperience"
                  className="w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none "
                >
                  <option value="">Please select</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="etc" className="block font-kindsans-medium mb-1">
                ETC
              </label>
              <input
                id="etc"
                name="etc"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.etc}
                className="w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none "
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label
                  htmlFor="addressLine1"
                  className="block font-kindsans-medium mb-1"
                >
                  Current Street Address (line 1) *
                </label>
                <input
                  id="addressLine1"
                  name="addressLine1"
                  type="text"
                  placeholder="Street line 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressLine1}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.addressLine1 && formik.errors.addressLine1
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.addressLine1}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="addressLine2"
                  className="block font-kindsans-medium mb-1"
                >
                  Current Street Address (line 2) *
                </label>
                <input
                  id="addressLine2"
                  name="addressLine2"
                  type="text"
                  placeholder="Street line 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressLine2}
                  className="w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none "
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block font-kindsans-medium mb-1"
                >
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.country && formik.errors.country
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block font-kindsans-medium mb-1"
                >
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="California"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.city && formik.errors.city
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="stateProvince"
                  className="block font-kindsans-medium mb-1"
                >
                  State/Province *
                </label>
                <select
                  id="stateProvince"
                  name="stateProvince"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.stateProvince}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.stateProvince && formik.errors.stateProvince
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                >
                  <option value="">Please choose</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  {/* Add all states here */}
                </select>
                {formik.touched.stateProvince && formik.errors.stateProvince ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.stateProvince}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block font-kindsans-medium mb-1"
                >
                  ZIP/Postal Code *
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                  className={`w-full p-2 bg-secondary border border-[#bdbdbd]/30 outline-none ${
                    formik.touched.zipCode && formik.errors.zipCode
                      ? "border-red-500"
                      : "border-gray-600"
                  } `}
                />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.zipCode}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Communications opt-in */}
          <div className="mb-8">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="receivesCommunication"
                checked={formik.values.receivesCommunication}
                onChange={formik.handleChange}
                className="mt-1 mr-2"
              />
              <span className="font-kindsans-medium">
                Would you like to receive communication from Red Trucking, Red
                Trucking Transport Services
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="flex justify-start">
            <button
              className="font-kindsans-bold flex group mt-8"
              type="submit"
            >
              <p className="py-4 px-5 bg-primary text-white">Submit</p>
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
        </form>
      </div>
    </div>
  );
};

export default OwnerOperatorForm;
