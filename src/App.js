import React from "react";
import logo from "../src/Assets/images/logo.png";
import oneimage from "../src/Assets/images/imageone.png";
import flutter from "../src/Assets/images/flutter-app-development-company 1.png";
import { SlArrowRight } from "react-icons/sl";
import Compound from "./compound/Compound";
import Sclice from "./slices/Sclice";
import secondimage from "../src/Assets/images/ezgif 1.png";
import fivepic from "../src/Assets/images/image 5 (1).png";
import slider from "../src/Assets/images/Group 369.png";
import flogo from "../src/Assets/images/logo.png";
import facebook from "../src/Assets/images/facebook 1 (1).png";
import instagram from "../src/Assets/images/instagram 1.png";
import linkedin from "../src/Assets/images/linkedin (1) 1.png";
import youtube from "../src/Assets/images/youtube 1.png";
import gmail from "../src/Assets/images/gmail.png";
import call from "../src/Assets/images/call.png";
import location from "../src/Assets/images/location.png";
import line from '../src/Assets/images/Vector 11 (1).png';

const App = () => {
  return (
    <div>
      
      <nav class="pt-5 bg-[#11143a] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-12" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#11143a] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Company
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pareers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button  className=" px-5 py-1 border rounded-sm bg-white hover:bg-blue-600">content us</button>
          </div>
        </div>
      </nav>
      <div className=" bg-[#11143a] text-white">
        <div className=" px-10 pt-14">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center flex-col items-start">
              <h1 className=" text-4xl font-extrabold md:font-extrabold md:text-6xl pb-3 md:pb-5 pr-2 py-6 md:py-8">
                UNITY 3D
              </h1>
              <p className=" text-xl font-normal text-ellipsis ">
                Our Unity game developers are renowned for the skills and <br />
                knowledge that enable us to create the ultimate gaming
                experience with the most creative solutions.
              </p>
              <div className=" py-5">
                <button className=" bg-blue-700 px-7 py-2 rounded-sm">
                  Content us
                </button>
              </div>
            </div>
            <div className=" py-3 pb-6">
              <img src={oneimage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" p-7">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" h-full md:h-[700px] w-full md:w-[600px] pl-12">
            <img src={flutter} alt="" />
          </div>
          <div className="flex md:flex justify-center md:justify-center items-center md:items-center flex-col">
            <h1 className=" text-2xl md:text-6xl pb-8 md:pb-9 font-normal md:font-extrabold ">
              UNITY DEVELOPMENT SERVICES
            </h1>
            <p className=" text-xs md:text-base text-justify font-thin md:font-semibold p-5 pl-0">
              Create immersive 3D experiences with Unity — one of the most
              evolving ecosystems for building appealing, realistic, and
              scalable applications. Whether you are looking for a technology to
              build a casual game or want to create a detailed simulation, Unity
              will make a perfect match for you. Its impressive cross-platform
              capabilities, rich feature set, and strong community are just a
              few of the benefits you will find with this tech. Reach out to GFS
              IT Solutions — a top Unity game development company in the UK —
              and get the best out of our services!
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#f5f5f5] pb-16">
        <div className="flex justify-center items-center">
          <h1 className=" font-semibold md:font-extrabold text-3xl md:text-4xl p-16">
            WHY UNITY
          </h1>
        </div>
        <div className=" flex justify-center pt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 pb-6 mx-0 md:mx-20 gap-0 md:gap-8">
            <div className="bg-[#11143a] flex justify-center flex-col items-start pl-10 p-0 md:p-5 py-3 md:py-0 text-white">
              <h1 className=" text-xl pt-3 font-semibold md:font-semibold">
                Cross-platform
              </h1>
              <p className="text-sm w-4/5 md:w-3/4 py-5">
                One of the main advantages of Unity development is
                cross-platform. It supports running on almost 30 desktop and
                mobile platforms, game consoles and the web, including Windows,
                macOS, Android, iOS, PlayStation, Xbox, WebGL, and others.
              </p>
              <button className=" bg-blue-500 p-2 md:p-4 rounded-full">
                <SlArrowRight />
              </button>
            </div>
            <Compound/>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:py-32">
        <div className="flex justify-around items-center flex-col ml-0 md:ml-16 p-4 md:p-0  ">
          <h1 className=" font-semibold md:font-extrabold text-3xl md:text-5xl">
            OUR METHOD FOR <br /> UNREAL GAME DEVELOPMENT STUDIO <br /> SERVICES
          </h1>
          <p className=" font-bold pt-2 pb-8 ">
            In addition to our staff of skilled game creators, we do in-depth
            research to assess market trends. We must first evaluate the idea's
            viability as a corporation before taking any action. Any attempt to
            develop a digital product without first determining the target
            market would be fruitless. GFS IT Solutions takes out all potential
            failure points and continuously scans the market to find out what's
            hot and what's out. As a consequence, you won't ever get outdated
            and you'll become more well-known among the audience.
          </p>
        </div>
        <div className=" md:h-3/4 md:p-0">
          <img src={secondimage} alt="" />
        </div>
      </div>
      <div className=" bg-[#e5e8ea] py-7">
        <div className="flex justify-center items-center flex-col">
          <h1 className=" pt-6 text-center text-2xl md:text-6xl font-semibold md:font-extrabold">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR
          </h1>
          <p className=" py-5 text-xs md:text-xl">
            Our team is adept at leveraging the most updated tools and
            technologies.
          </p>
        </div>
        <Sclice/>
      </div>
      <div className=" bg-[#001933] text-white flex justify-around flex-col">
        <div className="flex justify-center items-center">
          <h1 className=" text-2xl md:text-7xl font-extrabold py-2 md:py-10">
            OUR LOCATIONS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:p-10">
          <div className=" p-5 md:p-0 pl-5 md:pl-20 flex justify-center items-start flex-col">
            <h1 className=" pb-2 font-semibold text-2xl md:text-4xl">
              Pakistan
            </h1>
            <p className=" md:text-2xl pb-4">Karachi</p>
            <p className=" md:text-xl md:font-extralight">
              House No D-98/2 Clifton Block 4, Karachi, Sindh, Pakistan <br />{" "}
              +92-301-115-5760 <br /> contact.pakistan@gfsitsolutions.com
            </p>
          </div>
          <div className="flex justify-center items-center pr-0 md:pr-20 p-0 md:p-5">
            <img className=" p-5" src={fivepic} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center py-8">
          <img src={slider} alt="" />
        </div>
      </div>
      <div className=" py-5 md:py-10 bg-[#ad0001] text-white">
        <div className=" p-3 py-4 md:p-5 md:py-12">
          <div className="flex">
            <img className=" w-20 md:w-1/5 pl-3 md:pl-28" src={flogo} alt="" />
            <h1 className=" font-bold text-2xl md:text-7xl pl-5 md:pl-14">
              LETS CHAT?
            </h1>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-32 py-0 md:py-10">
            <div className=" text-xl font-light">
              <h1 className=" text-xl font-bold pb-4">Quick Links</h1>
              <p>Company</p>
              <p>Services</p>
              <p>Solution</p>
              <p>Consulting</p>
              <p>Blogs</p>
              <p>Contact Us</p>
            </div>
            <div className=" text-lg font-light">
              <h1 className=" text-xl font-bold pb-4">Services</h1>
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Ecommerce Developmet</li>
              <li>Game Development</li>
              <li>Blockchian Development</li>
              <li>Digital Marketing Development</li>
            </div>
            <div className=" text-xl font-light">
              <h1 className=" text-xl font-bold pb-4">Content Us</h1>
              <p className="flex">
                <img className=" pr-4 pb-3" src={gmail} alt="" />
                Info@gmail.com
              </p>
              <p className="flex">
                <img className=" pr-4 pb-3" src={call} alt="" />
                +44-746-0117419
              </p>
              <p className="flex">
                <img className=" pr-4 pb-3" src={location} alt="" />
                Dubai, UAE
              </p>
            </div>
            <div>
              <h1 className=" text-xl font-bold pb-4">Follow Us</h1>
              <ul className="flex gap-6 w-10 h-10">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
              </ul>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col px-5 md:px-32">
            <img className=" pt-2" src={line} alt="" />
            <p className=" text-xs md:text-base pt-5">
              Copyright © 2023 GFS IT SOLUTIONS. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
