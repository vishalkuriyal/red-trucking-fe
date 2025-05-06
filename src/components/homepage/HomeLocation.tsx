import map from "../../assets/svgs/map.svg"

const HomeLocation = () => {
  return (
    <div className="bg-bg1 bg-cover">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-[40px] text-center text-white leading-[40px]">FIND LOCATIONS</h3>
        <h3 className="anton-regular text-[40px] text-center gradient-stroke leading-[40px]">FIND LOCATIONS</h3>
        <h3 className="anton-regular text-[40px] text-center gradient-stroke leading-[40px] mb-10">FIND LOCATIONS</h3>
        <div className="flex justify-center items-center"><img src={map} className="" alt=""/></div>
      </div>
    </div>
  )
}

export default HomeLocation