import bg from "../../assets/images/homeHero.png";

const HomePageHero = () => {
  return (
    <div className="h-[900px] relative">
    <img src={bg} className="w-full object-cover h-full" alt="" />
    <div className="absolute h-full flex justify-center items-center top-0 w-full">
      <div className="mt-20">
        <h2 className="anton-regular text-[230px] text-[#D30003]/80 tracking-[2%] leading-[210px]">
          LOGISTICS
        </h2>
        <p className="anton-regular text-6xl text-white ml-6">
          Made Simple for
          <br /> Your Business
        </p>
        <button className="font-kindsans-bold flex group ml-6 mt-8">
          <p className="py-4 px-5 bg-primary text-white">
            EXPLORE OUR SERVICES
          </p>
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
    </div>
  </div>
  )
}

export default HomePageHero