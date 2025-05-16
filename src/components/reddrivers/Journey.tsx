import gps from "../../assets/svgs/gps.svg";
import states from "../../assets/svgs/states.svg";
import rates from "../../assets/svgs/rates.svg";
import mechanics from "../../assets/svgs/mechanics.svg";
import health from "../../assets/svgs/health.svg";
import ports from "../../assets/svgs/ports.svg";

type CardTypes = {
  name: string;
  des: string;
  number: string;
  icon: string;
  spanHeading: string;
};

const cards: CardTypes[] = [
  {
    name: "Onboard",
    spanHeading: "GPS",
    des: "24/7 support right when you need it most with built-in GPS on every truck.",
    number: "01",
    icon: gps,
  },
  {
    name: "Access to",
    spanHeading: "48 states",
    des: "Thanks to our Horizon Freight Systems partnership, your reach covers nearly the entire country.",
    number: "02",
    icon: states,
  },
  {
    name: "Top",
    spanHeading: "industry rates",
    des: "Earn some of the most competitive pay rates available in trucking today.",
    number: "03",
    icon: rates,
  },
  {
    name: "Onsite",
    spanHeading: "mechanics",
    des: "Get immediate mechanical help when needed, with no out-of-pocket costs for repairs.",
    number: "04",
    icon: mechanics,
  },
  {
    name: "Major",
    spanHeading: "health benefits",
    des: "Comprehensive plans for both company drivers and owner-operators to keep you protected.",
    number: "05",
    icon: health,
  },
  {
    name: "4 miles from the ",
    spanHeading: "largest ports",
    des: "Stay loaded and moving with reliable freight flow from nearby major ports.",
    number: "06",
    icon: ports,
  },
];

const Journey = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-14">
        <h3 className="anton-regular text-white text-3xl md:text-4xl uppercase mb-6 md:mb-14">
          <span className="text-primary">facilities</span> that fuel the journey
        </h3>
        <div className="grid md:grid-cols-3 gap-7">
          {cards.map((card, idx) => (
            <div className="border border-[#3c3c3c] py-10 px-8" key={idx}>
              <div className="flex justify-between mb-5">
                <p className="anton-regular text-[64px] leading-[114px] items-center gradient-stroke">
                  {card.number}
                </p>
                <img src={card.icon} alt="" className="" />
              </div>
              <div>
                <h4 className="anton-regular text-2xl text-white mb-3 uppercase">
                  {card.name}{" "}
                  <span className="text-primary">{card.spanHeading}</span>
                </h4>
                <p className="font-kindsans-regular text-white">{card.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
