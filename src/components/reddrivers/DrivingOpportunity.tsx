import { Link } from "react-router-dom";
import videoSection from "../../assets/images/videoRedDriver.png"
import video from "../../assets/video/RED-drivers.mp4"
import { useRef, useState } from "react";

const DrivingOpportunity = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlay = () => {
      const video = videoRef.current;
      if (video) {
        video.controls = true; // Show controls only after play
        video.play();
        setIsPlaying(true);
      }
    };
  return (
    <div className="bg-bg1 bg-cover bg-no-repeat">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke-primary absolute -top-10">
          R.E.D Drivers
        </h3>
      </div>
      <div className="flex flex-col items-center pb-8 md:pb-28">
        <div className="mb-11">
          <div className="relative max-w-[800px] aspect-video">
            <video
              ref={videoRef}
              controls={false}
              className="w-full h-full object-cover"
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
                <img
                  src={videoSection}
                  alt="Video Thumbnail"
                  className="absolute top-0 w-full h-full"
                  onClick={handlePlay}
                />

            )}
          </div>
        </div>
        <div className="mb-16">
          <p className="anton-regular text-white text-[32px]">
            See what driving opportunities fit your journey
          </p>
        </div>
        <div className="flex gap-11">
          <Link
            to="/owner-operator"
            className="bg-[#282828] p-2 group hover:bg-primary transition-all duration-500 w-fit"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-[#1d1d1d] px-14 py-6 flex items-center justify-between gap-7 shadow-[inset_0px_0px_20px] h-full">
              <h4 className="anton-regular text-2xl text-white">OWNER OPERATOR</h4>
            </div>
          </Link>
          <Link
            to="/company-driver"
            className="bg-[#282828] p-2 group hover:bg-primary transition-all duration-500 w-fit"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-[#1d1d1d] px-14 py-6 flex items-center justify-between gap-7 shadow-[inset_0px_0px_20px] h-full">
              <h4 className="anton-regular text-2xl text-white">COMPANY DRIVER</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrivingOpportunity;
