import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import imgSecitionOne from "../assets/images/imgSecitionOne.png";
import { MdTranscribe } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import logo10 from "../assets/images/logo10.png";
import imgRockPower from "../assets/images/imgSVG.svg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { RiServiceFill } from "react-icons/ri";
import { CgCodeSlash } from "react-icons/cg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6 , logo7 , logo8 , logo9, logo10];
const Home = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === "ar"; // تحقق اللغة
  motion
  return (
    <>
    <section className="  mt-30 ">
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8  ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">

          {/* Text */}
          <motion.div
            className="max-w-prose md:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[#bbfe32] sm:text-3xl md:text-4xl ">
              {t('homeSectionOne.title')}
            </h2>

            <h2 className="font-semibold text-white sm:text-3xl md:text-6xl mt-5 text-shadow-amber-200">
              {t('homeSectionOne.supTitle')}
            </h2>

            <p className="mt-4 text-pretty text-white font-bold text-lg ">
              {t('homeSectionOne.description')}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imgSecitionOne}
              alt=""
              className={`w-full rounded-lg transition-transform duration-500 ${
                isArabic ? "" : "scale-x-[-1]" 
              }`}
            />
          </motion.div>

        </div>
      </div>

    </section>

 
    <section className=" lg:grid  lg:place-content-center ">
  <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
    <div className="mx-auto max-w-prose text-center">
      <h1 className=" font-bold sm:text-5xl lg:text-6xl dark:text-[#bbfe32]">
      {t("homeSectionThree.title")}
      </h1>

      <p class="mt-5  text-pretty font-black text-gray-700 sm:text-lg/relaxed md:text-lg dark:text-gray-200">
      {t("homeSectionThree.description")}
        
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false  }}
>
         <div className=''>
         <div
  class="hover:-translate-y-2 group  duration-500 w-44 h-44 flex text-black flex-col justify-center items-center relative rounded-xl overflow-hidden "
>
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute blur z-10 fill-[#bbfe32] duration-500 group-hover:blur-none group-hover:scale-105"
  >
    <path
      transform="translate(100 100)"
      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
    ></path>
  </svg>

  <div className="z-20 flex flex-col justify-center items-center">
    <span className=" text-6xl ml-2 font-black"> {t("homeSectionThree.titleNumber1")} </span>
    <p className="font-bold text-gray-950 text-xs">{t("homeSectionThree.TextNumber1")}</p>
  </div>
</div>
         </div>
         </motion.div>

         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: false  }}
>
         <div className=''>


         <div
  className="hover:-translate-y-2 group  duration-500 w-44 h-44 flex text-black flex-col justify-center items-center relative rounded-xl overflow-hidden "
>
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute blur z-10 fill-[#bbfe32] duration-500 group-hover:blur-none group-hover:scale-105"
  >
    <path
      transform="translate(100 100)"
      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
    ></path>
  </svg>

  <div className="z-20 flex flex-col justify-center items-center">
    <span className="font-bold text-6xl ml-2">{t("homeSectionThree.titleNumber2")}</span>
    <p className="font-bold text-xs">{t("homeSectionThree.TextNumber2")}</p>
  </div>
</div>
         </div>
         </motion.div>


         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: false  }}
>
         <div className=''>



         <div
  className="hover:-translate-y-2 group  duration-500 w-44 h-44 flex text-black flex-col justify-center items-center relative rounded-xl overflow-hidden "
>
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute blur z-10 fill-[#bbfe32] duration-500 group-hover:blur-none group-hover:scale-105"
  >
    <path
      transform="translate(100 100)"
      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
    ></path>
  </svg>

  <div className="z-20 flex flex-col justify-center items-center">
    <span className="font-bold text-6xl ml-2">{t("homeSectionThree.titleNumber3")}</span>
    <p className="font-bold text-xs">{t("homeSectionThree.TextNumber3")} </p>
  </div>
</div>
         </div>

         </motion.div>
      </div>
    </div>
  </div>
    </section>


    <section className="">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
           
            {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imgRockPower}
              alt=""
              className={`w-full h-1/2 rounded-lg transition-transform duration-500 ${
                isArabic ? "" : "scale-x-[-1]" 
              }`}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="max-w-prose md:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[#bbfe32] sm:text-3xl md:text-6xl ">
            {t("homeRockPowr.title")}
            </h2>

            <p className=" text-white mt-5 text-shadow-amber-200 flex items-center gap-2 text-2xl font-black">
  <RiCustomerService2Fill  className="text-4xl text-[#bbfe32]" />
  <span>{t("homeRockPowr.pr1")}</span>
</p>
<p className=" text-white mt-5 text-shadow-amber-200 flex items-center gap-2 text-2xl font-black">
  <RiTeamFill className="text-3xl text-[#bbfe32]" />
  <span>{t("homeRockPowr.pr2")}</span>
</p>
<p className=" text-white mt-5 text-shadow-amber-200 flex items-center gap-2 text-2xl font-black">
  <RiServiceFill className="text-3xl text-[#bbfe32]" />
  <span>{t("homeRockPowr.pr3")}</span>
</p>
<p className=" text-white mt-5 text-shadow-amber-200 flex items-center gap-2 text-2xl font-black ">
  <CgCodeSlash className="text-3xl text-[#bbfe32]" />
  <span>{t("homeRockPowr.pr4")}</span>
</p>

          
          </motion.div>

         

        </div>
      </div>

    </section>

    <section dir="ltr" className="py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <img src={logo} alt="" className="h-24 w-auto opacity-80" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  
  <section>

 
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
         
      
          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed font-black text-4xl text-white">
             {t("homefinalSecition.title")}
          </p>
      
          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-xl font-black">
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">

              
<button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointOne")}
</button>
             
               
              </a>
            </li>
      
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">
             
                          
<button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointTWO")}
</button>
              </a>
            </li>
      
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">
             
               
              <button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointThree")}
</button>
              </a>
            </li>
      
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">
             
              <button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointFour")}
</button>
              </a>
            </li>
      
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">
             
              <button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointFive")}
</button>
              </a>
            </li>
      
            <li>
              <a class="text-[#bbfe32]  transition hover:text-gray-700/75  dark:hover:text-white/75" href="#">
              
              <button class="bg-[#bbfe32]  text-black border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {t("homefinalSecition.pointend")}
</button>
              </a>
            </li>
          </ul>
      
          <div class="mt-12 flex justify-center gap-6 md:gap-8">
 

          </div>
        </div>
     
  </section>

    </>
  );
};

export default Home;





  