import React from 'react'
import { SlArrowRight } from 'react-icons/sl';

const Compound = () => {
  const data = [
    {
      title: 'Physics',
      description: 'As for the physical component of this platform, Unity uses NVIDIA PhysX technology. It allows to create plausible behavior of the objects in the game, which combined with a smooth frame rate creates the impression of absolute reality for the player.'
    },
    {
      title: 'Graphical features',
      description: 'In a simple user interface, the platform provides a variety of graphical opportunities for selecting different types of lighting, materials, textures. Using Unity’s Terrain system you can recreate real landscapes. One more Unity advantage is the use of both 2D & 3D modeling, depending on goals and the genre of the game.'
    },
    {
      title: 'Development process',
      description: 'Unity programming requires knowledge of JavaScript and C #. Redwerk’s game development team are specialists in these languages and have invaluable experience in creating projects using them.',
    },
    
  ];

  return (
  data.map((item, index) => (
  <div key={index} className="hover:bg-[#11143a] flex justify-center flex-col items-start px-0 md:px-5 pl-10 p-5 py-3 md:py-0 hover:text-white border-t-4">
    <h1 className=" pt-3 font-semibold text-xl md:font-semibold">{item.title}</h1>
    <p className="text-sm py-5 pr-5 md:pr-0">{item.description}</p>
    <button className="hover:bg-blue-500 p-4 mb-8 rounded-full">
    <SlArrowRight />
    </button>
  </div>
)))
}

export default Compound