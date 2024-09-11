import React from 'react';
import card1 from '../Assets/images/card1.png';
import card2 from '../Assets/images/card2.png';
import card3 from '../Assets/images/card3.png';
import card4 from '../Assets/images/card4.png';

const Sclice = () => {
  
  const data = [
    { id: 1, title: 'Unity 3D', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', image: card1 },
    { id: 2, title: 'Augmented Reality', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', image: card2 },
    { id: 3, title: 'Casual Games', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', image: card3 },
    { id: 4, title: 'Unreal Engine', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', image: card4 },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-7 gap-4 md:gap-[10px]">
      {data.map((item) => (
        <div key={item.id} className="flex justify-center p-4 md:p-5 bg-[#cacaca]">
          <div className="w-12 md:w-24">
            <img src={item.image} alt="" />
          </div>
          <div className="pl-2 md:pl-5">
            <h1 className="md:font-thin md:text-xl pb-2 md:pb-3">
              {item.title}
            </h1>
            <p className="font-normal md:font-semibold text-xs md:text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sclice;
