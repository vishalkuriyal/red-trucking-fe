import regional from "../../assets/images/regionalImg.png";
import always from "../../assets/images/alwaysOnRoadImg.png";
import deicated from "../../assets/images/dedicatedImg.png";

type CardType = {
  name: string;
  image: string;
  des: string;
};

const cards: CardType[] = [
  {
    name: "REGIONAL",
    image: regional,
    des: "If staying close to home matters to you or you prefer specific routes, consider becoming a Regional CDL driver. We’ll help build a schedule that supports your lifestyle while ensuring steady miles and dependable work.",
  },
  {
    name: "ALWAYS ON-ROAD",
    image: always,
    des: "Own your miles without worrying about freight shortages. Through our partnership with Horizon Freight Systems, you’ll have access to 48 states across the country. Hit the road with confidence and explore America while staying well-supported.",
  },
  {
    name: "DEDICATED",
    image: deicated,
    des: "Enjoy consistent freight, fixed routes, and reliable pay. Our Dedicated Driver options let you choose predictability without compromise. Get in touch to explore which dedicated routes suit your career goals and personal priorities best.",
  },
];


const DrivingWithRed = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 pt-8 pb-8 md:pt-28 md:pb-14">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between mb-28">
          <h3 className="text-white anton-regular text-4xl">
            DRIVING <span className="text-primary">WITH R.E.D.</span>
          </h3>
          <p className="font-kindsans-regular text-white md:w-[50%]">
            Led by a team of experienced drivers, we know what matters most to
            you on the road. Here, every driver is valued like family and
            supported with the right tools, flexibility, and respect to succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {cards.map((card, idx) => (
            <div className="" key={idx}>
              <div className="bg-primary py-6 px-10">
                <p className="anton-regular text-white text-4xl">{card.name}</p>
              </div>
              <img src={card.image} className="w-full" alt="" />
              <p className="font-kindsans-regular text-white px-10 py-12 bg-[#1d1d1d]">
                {card.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivingWithRed;
