import enzo from "../../assets/images/aboutEnzo.png";
import raymond from "../../assets/images/aboutRaymond.png";
import edgar from "../../assets/images/aboutEdgar.png";

type FamilyType = {
  name: string;
  position: string;
  image: string;
};

const families: FamilyType[] = [
  {
    name: "Enzo Dinten",
    position: "CEO",
    image: enzo,
  },
  {
    name: "Raymond Dinten",
    position: "Director of OPS",
    image: raymond,
  },
  {
    name: "Edgar Dinten",
    position: "General Manager",
    image: edgar,
  },
];

const AboutFamily = () => {
  return (
    <div className="bg-[#100F0F]">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="flex flex-col items-center">
          <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke-2 text-center mb-10">
            THE R.E.D. FAMILY
          </h3>
          <p className="text-center text-white font-kindsans-regular w-[40%]">
            R.E.D. Trucking was established in 2004 by the Dinten brothers
            (Enzo, Edgar and Raymond) with a shared vision to build a legacy in
            logistics.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {families.map((family, index) => (
            <div className="flex flex-col gap-5 items-center w-full" key={index}>
              <div className="relative h-[500px]">
                <img src={family.image} className="w-full object-cover relative z-20 h-full" alt={family.name} />
                <div className="w-full h-[70%] border border-primary bottom-0 absolute"></div>
              </div>
              <div className="w-[50%] bg-primary py-2">
                <p className="text-center anton-regular text-2xl text-white">{family.name}</p>
                <p className=" text-center font-kindsans-medium text-white">{family.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFamily;
