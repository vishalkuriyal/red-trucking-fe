import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

const HomeJoinUs = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-end items-center bg-bg2 bg-cover px-5 sm:px-20 py-8 sm:py-28">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-end">
          <h3 className="text-white anton-regular text-5xl md:text-[96px] text-right md:leading-[92px] mb-6">
            CARRERS <br />
            THAT MOVE YOU FORWARD
          </h3>
          <p className="text-white font-kindsans-regular md:w-[40%] text-right mb-8">
            At R.E.D. Trucking & Logistics, every team member plays a vital
            role. Whether you're in operations, on the road, or behind the
            scenes, you’ll find support, respect and room to grow.
          </p>
          <PrimaryButton
            onClick={() => {
              navigate("/red-drivers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Join Us
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeJoinUs;
