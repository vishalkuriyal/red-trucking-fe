import img from "../../assets/images/aboutMissionImg.png"

const AboutMission = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke mb-10">
          OUR MISSION
        </h3>
        <div className="flex justify-between items-center mb-10">
          <div className="w-[45%]">
            <p className="font-kindsans-semibold text-white mb-5">
              Our mission is to fulfil the shipping demands ranging from simple
              to complex with professionalism, ethics, expertise, and ingenuity.
            </p>
            <p className="font-kindsans-regular text-white mb-5">
              We strive to create value for our customers by providing them
              customized trucking services that meet their unique requirements
              and demands. Our constant efforts are to help out customers with
              our extensive network of truck operators and deliver a trustworthy
              and reliable service.
            </p>
            <p className="font-kindsans-regular text-white">
              With a wealth of services, expertise, widespread network, and
              outstanding customer service, we hope to provide nothing but the
              best experience to the clients. Our aim is to make trucking
              simpler and more efficient. We use technology to ensure seamless
              communication and flow to our logistics operations to achieve a
              high level of customer satisfaction.
            </p>
          </div>
          <div className="w-[50%]">
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5">
          <div className="col-span-2 bg-[#1b1b1b] px-9 py-10">
            <p className="anton-regular text-xl text-white">Our focus is always on the 3 most important aspects of our business </p>
          </div>
          <div className="col-span-6 border flex justify-center items-center px-9 border-[#3C3C3C]">
            <p className="font-kindsans-regular text-white">Timely delivery, affordable pricing, and ensuring the safety and security of your shipment. 
            With superior tracking, delivery assistance, and 24/7 customer service, we have established the best standards in this industry and are further poised to raise the bar of excellence and professionalism.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
