import React from 'react'
import bg from "../../assets/images/contactHeroBg.png"
import LocationIcon from "../../assets/svgs/LocationIcon.svg";
import MailIcon from "../../assets/svgs/mailicon.svg"
import PhoneIcon from "../../assets/svgs/phoneicon.svg"
import React, {useState} from 'react';


interface ContactItem {
  label: string;
  value: string;
  icon: string;
  type: 'location' | 'email' | 'phone';
}

interface CardData {
  title: string;
  items: ContactItem[];
}


const Contact = () => {
  const data: CardData[] = [
    {
      title: 'HEADQUARTER',
      items: [
        { label: 'Address', value: '158 Paris St, Newark, NJ 07105, United States', icon: LocationIcon, type: 'location' },
        { label: 'Email', value: 'info@redtruckinc.com', icon: MailIcon, type: 'email' },
        { label: 'Phone', value: '973-732-1333', icon: PhoneIcon, type: 'phone' },
      ],
    },
    {
      title: 'WAREHOUSE',
      items: [
        { label: 'Address', value: '158 Paris St, Newark, NJ 07105, United States', icon: LocationIcon, type: 'location' },
        { label: 'Email', value: 'sales@redtruckinc.com', icon: MailIcon, type: 'email' },
        { label: 'Phone', value: '973-732-1333', icon: PhoneIcon, type: 'phone' },
      ],
    },
    {
      title: 'SALES',
      items: [
        { label: 'Address', value: '158 Paris St, Newark, NJ 07105, United States', icon: LocationIcon, type: 'location' },
        { label: 'Email', value: 'sales@redtruckinc.com', icon: MailIcon, type: 'email' },
        { label: 'Phone', value: '973-732-1333', icon: PhoneIcon, type: 'phone' },
      ],
    },
    {
      title: 'RECRUITING',
      items: [
        { label: 'Address', value: '158 Paris St, Newark, NJ 07105, United States', icon: LocationIcon, type: 'location' },
        { label: 'Email', value: 'recruiting@redtruckinc.com', icon: MailIcon, type: 'email' },
        { label: 'Phone', value: '973-732-1333', icon: PhoneIcon, type: 'phone' },
      ],
    },
  ];
  

  return (
    <>
      {/* Existing Header Section */}
      <div className="bg-bg1 bg-cover md:pt-[130px]">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
          <div className="relative">
            <p className="font-kindsans-medium text-white">
              HOME &gt; <span className="text-primary">Contact US</span>
            </p>
            <h1 className="anton-regular text-white text-[40px] relative z-20">
              CONTACT US
            </h1>
            <p className="gradient-stroke-primary anton-regular text-[72px] leading-[70px] relative bottom-8 z-10">
              Contact US
            </p>
          </div>
          <div>
            <img className="w-full object-cover" src={bg} alt="" />
          </div>
        </div>
      </div>

      {/* Contact Title with large "CONTACT US" */}
      <div className="bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-20 relative">
          <h2 className="anton-regular text-[128px] leading-[120px] gradient-stroke-primary absolute left-0 -top-10">
            CONTACT US
          </h2>
        </div>
      </div>

      {/* Your existing return content ends here, now insert the cards */}
      
     {/* Cards Section */}
      <div className="flex flex-wrap bg-black justify-center mt-0 shadow-none ">
        {data.map((card, index) => (
          <div
            key={index}
            className="w-[296px] h-[340px] text-white flex flex-col m-4 border border-[#444446]"
          >
            {/* Title */}
            <div className="bg-red-600 w-full h-20 flex items-center justify-center px-2">
              <h3 className="text-white text-xl anton-regular text-center">{card.title}</h3>
            </div>

            {/* Items with icons */}
            <div className="bg-black w-full flex flex-col justify-around text-sm py-4 flex-1 px-8">
              {card.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 mb-4 border-b border-[#444446] py-2">
                  <img src={item.icon} alt={item.type} className="h-5 w-5" />
                  <p className="m-0">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
      
         <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke mb-8">
          SEND US A MESSAGE
        </h3>

        
        
      </div>
      </div>

    <form className=''>
      <label>First NAME:</label><br></br>
      <input type='text' placeholder='First Name'></input>
      <label>Last NAME:</label><br></br>
      <input type='text' placeholder='Last Name'></input>
    </form>
      
    </>
  );
};

      
      
    
export default Contact