import HomePageHero from "./HomePageHero";
import HomeWhoWeAre from "./HomeWhoWeAre";
import videoSection from "../../assets/images/videoSection.png";
import TransportationPartner from "./TransportationPartner";
import HomeService from "./HomeService";
import HomeRedValues from "./HomeRedValues";
import HomeLeaderShip from "./HomeLeaderShip";
import HomeJoinUs from "./HomeJoinUs";
import HomeLocation from "./HomeLocation";
import HomeExploreBlogs from "./HomeExploreBlogs";
import HomeContactUs from "./HomeContactUs";
import HomePassion from "./HomePassion";
import video from "../../assets/video/billboard-highway.mp4";
import { useRef, useState } from "react";

const HomePage = () => {
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
    <>
      <div className="relative">
        <HomePageHero />
        <div className="absolute -bottom-[300px] mx-auto left-0 right-0 w-fit">
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
      </div>
      <HomeWhoWeAre />
      <TransportationPartner />
      <HomeService />
      <HomeRedValues />
      <HomeLeaderShip />
      <HomeJoinUs />
      <HomeLocation />
      <HomeExploreBlogs />
      <HomePassion />
      <HomeContactUs />
    </>
  );
};

export default HomePage;
