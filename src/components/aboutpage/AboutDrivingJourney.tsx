import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import img1 from "../../assets/images/aboutDrivingImg1.png";
import img2 from "../../assets/images/aboutDrivingImg2.png";
import PrimaryButton from "../common/PrimaryButton";

const AboutDrivingJourney = () => {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-10 relative">
          <h2 className="text-5xl md:text-[96px] md:leading-[114px] gradient-stroke-3 anton-regular mb-4 md:mb-0">
            DRIVING YOUR JOURNEY
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="md:w-[50%] flex flex-col justify-between">
              <h4 className="uppercase anton-regular text-4xl md:text-5xl text-white mb-4 md:mb-0">
                forward with {" "}
                <span className="text-primary">
                  reliable, efficient, and seamless transportation solutions
                </span>
              </h4>
              <PrimaryButton>Our Services</PrimaryButton>
            </div>
            <div className="relative md:w-[50%]">
              <Swiper
                slidesPerView={1.5}
                spaceBetween={20}
                autoplay={true}
                modules={[Autoplay, Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop
                className="h-full w-full"
              >
                <SwiperSlide className="h-[3000px]">
                  <img
                    src={img1}
                    className="object-cover object-center h-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="h-[3000px]">
                  <img
                    src={img2}
                    className="object-cover object-center h-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="h-[3000px]">
                  <img
                    src={img1}
                    className="object-cover object-center h-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        <div className="hidden sm:block bg-primary h-full w-[25%] absolute top-0 right-0"></div>
      </div>
    </div>
  );
};

export default AboutDrivingJourney;
