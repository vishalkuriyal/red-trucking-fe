import bg from "../../assets/images/aboutHeroBg.png"

const AboutHero = () => {
  return (
    <div className="bg-bg1 bg-cover md:pt-[130px]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
        <div className="relative">
          <p className="font-kindsans-medium text-white">HOME &gt; <span className="text-primary">ABOUT US</span> </p>
          <h1 className="anton-regular text-white text-[40px] relative z-20">ABOUT US</h1>
          <p className="gradient-stroke-primary anton-regular text-[72px] leading-[70px] relative bottom-8 z-10">ABOUT US</p>
        </div>
        <div className="">
          <img className="w-full object-cover" src={bg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default AboutHero