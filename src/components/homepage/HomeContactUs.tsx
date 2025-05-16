import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

const HomeContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary">
      <div className="py-[70px] px-5 md:px-0">
        <h3 className="anton-regular text-4xl md:text-[54px] text-white md:leading-[66px] text-center mb-8">
          UPGRADING THE TRANSPORTATION INDUSTRY
        </h3>
        <div className="flex justify-center">
          <PrimaryButton
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
