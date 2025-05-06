import enzo from "../../assets/images/enzoDinten.png";
import edgar from "../../assets/images/edgarDinten.png";
import raymond from "../../assets/images/raymondDinten.png";
import linda from "../../assets/images/lindaGilis.png";
import rob from "../../assets/images/robMovshin.png";

type TeamType = {
  name: string;
  image: string;
  position: string;
};

const teams: TeamType[] = [
  {
    name: "Enzo Dinten",
    image: enzo,
    position: "CEO/President",
  },
  {
    name: "Edgar Dinten",
    image: edgar,
    position: "General Manager",
  },
  {
    name: "Raymond Dinten",
    image: raymond,
    position: "VP of Operations",
  },
  {
    name: "Linda Gillis",
    image: linda,
    position: "CCO",
  },
  {
    name: "Rob Movshin",
    image: rob,
    position: "Executive VP",
  },
];

const HomeLeaderShip = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="flex justify-between items-end mb-16">
          <h3 className="anton-regular text-[64px] leading-[66px] text-white">
            <span className="text-primary">LEADERSHIP</span> <br />
            TEAM
          </h3>
          <h3 className="anton-regular text-[64px] leading-[66px] text-white">
            TEAM <br />
            <span className="gradient-stroke">TEAM</span>
          </h3>
        </div>
        <div className="grid grid-cols-5 justify-between gap-10">
          {teams.map((team, idx) => (
            <div className="group relative h-[323px]" key={idx}>
              <div className="h-[80%]">
                <img
                  src={team.image}
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full"
                  alt=""
                />
              </div>
              <div className="w-[80%] absolute -bottom-5 z-10 left-0 right-0 mx-auto">
                <div className="relative">
                  <div className="px-3 py-2 relative z-10">
                    <p className="anton-regular text-2xl text-white">
                      {team.name}
                    </p>
                    <p className="font-kindsans-semibold text-white">
                      {team.position}
                    </p>
                  </div>
                  <div className="absolute h-full w-2 group-hover:w-full bg-primary top-0 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLeaderShip;
