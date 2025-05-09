import bg from "../../assets/images/aboutSustanabilityBg.png"

const AboutSustanability = () => {
  return (
    <div className="bg-secondary">
     <div className="h-[500px] overflow-hidden">
        <img className="h-full w-full object-cover object-center" src={bg} />
      </div>
      <div className="relative max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke-white absolute -top-10">
          SUSTAINABILITY
        </h3>
        <div className="py-8 md:py-0 md:pb-28">

          <p className="border border-[#3C3C3C] py-7 px-10 font-kindsans-regular text-[#f5f5f5]">
          HSE (Health, Safety and Environment) includes the environment as one of the major components. Sustainability means more efficiency with least impact on the environment. At RED Trucking, we take full responsibility and accountability for what we leave behind. It is crucial that we ensure our activities ensure the minimum environmental, economic and social impact. Our constant aim is to reduce greenhouse gas emissions to minimize the risk to the environment. Our drivers drive under optimum conditions to ensure the best efficiency and usage of fuel. It goes without saying that backgrounds of all drivers are checked before hiring them. The vehicles are also throughly checked before each journey and we ensure that the vehicles are in pristine condition to aviod any unforeseen accidents. Finally, we ensure that our actions do not deteriorate the environment in any way and for this purpose, we train our drivers to maintain the best standards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSustanability