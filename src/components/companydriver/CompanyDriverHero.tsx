import bg from "../../assets/images/ownerOperatorHeroBg.png";

const CompanyDriverHero = () => {
  return (
    <div className="bg-secondary pt-[80px] md:pt-[130px]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
        <div className="relative">
          <p className="font-kindsans-medium text-white">
            HOME &gt; { " "}
            <span className="text-primary uppercase">company Driver</span>{" "}
          </p>
          <h1 className="anton-regular text-white text-2xl md:text-[40px] relative z-20 uppercase">
            company Driver
          </h1>
          <p className="gradient-stroke-primary anton-regular text-5xl md:text-[72px] md:leading-[70px] relative bottom-7 z-10 uppercase">
            Company Driver
          </p>
        </div>
        <div className="relative">
          <img className="w-full object-cover" src={bg} alt="" />
          {/* <div className="h-full w-[20%] bg-gradient-to-r from-transparent to-primary/50 absolute top-0 right-0"></div> */}
        </div>
      </div>
    </div>
  )
}

export default CompanyDriverHero