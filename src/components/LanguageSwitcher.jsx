import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    // <button
    //   onClick={toggleLanguage}
    //   classNameName="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
    //   aria-label={t('common.language')}
    // >
    //   {currentLanguage === 'ar' ?  'العربية'  :   'English'}
    // </button>

 
      
    <>
{/* <button
 onClick={toggleLanguage}
  aria-label={t('common.language')}
  className="relative flex items-center px-3 py-1 overflow-hidden font-medium transition-all bg-[#bbfe32] rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#bbfe32]  rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#bbfe32] rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#345107] rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-black"
    >
       {currentLanguage === 'ar' ?  'العربية'  :   'English'}
      
      </span
  >
</button> */}



<button
 onClick={toggleLanguage}
 aria-label={t('common.language')}
className="cursor-pointer transition-all 
bg-[#393939] text-white px-6 py-2 rounded-lg
border-[#bbfe32] 
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-[#bbfe32]  shadow-[#bbfe32]  active:shadow-none">
  {currentLanguage === 'ar' ?  'العربية'  :   'English'}
</button>

</>
  
  );
};

export default LanguageSwitcher;

