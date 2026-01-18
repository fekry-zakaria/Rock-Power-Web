import { div } from "framer-motion/client";
import i18next from "i18next";
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { CgArrowRightR, CgArrowLeftR, CgClose } from "react-icons/cg";

const Services = () => {
  const { t } = useTranslation();
  const isRTL = i18next.language === "ar";
  // ✅ الأول الداتا
  const servicesData = [
    {
      id: "web",
      title: t("OurServices.Web"),
      description: t("OurServicesDes.Webdes"),
      features: [
        "React / Next.js",
        "E-Commerce Solutions",
        "Secure Payments",
        "High Performance",
      ],
    },
    {
      id: "mobile",
      title: t("OurServices.Mobile"),
      description: t("OurServicesDes.Mobiledes"),
      features: [
        "iOS & Android Apps",
        "Modern UI / UX",
        "High Performance",
        "Scalable Architecture",
      ],
    },
    {
      id: "seo",
      title: t("OurServices.SEO"),
      description: t("OurServicesDes.SEOdes"),
      features: [
        "On-page SEO",
        "Technical SEO",
        "Content Strategy",
        "Speed Optimization",
      ],
    },
    {
      id: "social",
      title: t("OurServices.Social"),
      description: t("OurServicesDes.Socialdes"),
      features: [
        "Content Planning",
        "Audience Engagement",
        "Analytics & Reports",
        "Brand Growth",
      ],
    },
    {
      id: "digital",
      title: t("OurServices.Digital"),
      description: t("OurServicesDes.Digitaldes"),
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Performance Tracking",
        "ROI Optimization",
      ],
    },
    {
      id: "graphic",
      title: t("OurServices.Graphic"),
      description: t("OurServicesDes.Graphicdes"),
      features: [
        "Brand Identity",
        "Creative Design",
        "Marketing Materials",
        "Visual Consistency",
      ],
    },
    {
      id: "digitalMarketing",
      title: t("OurServices.Digitalnum"),
      description: t("OurServicesDes.DigitaldMarketingdes"),
      features: [
        "SEO & SEM",
        "Paid Advertising",
        "Email Marketing",
        "Conversion Optimization",
      ],
    },
    {
      id: "production",
      title: t("OurServices.production"),
      description: t("OurServicesDes.productiondes"),
      features: [
        "Professional Photography",
        "Video Production",
        "Editing & VFX",
        "High Quality Output",
      ],
    },
  ];
  

  // ✅ بعد ما الداتا اتعرفت
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    // نجيب الخدمة الحالية بعد تغيير اللغة
    const updatedService = servicesData.find(
      (service) => service.id === activeService.id
    );
  
    // لو لاقيناها نحدّثها
    if (updatedService) {
      setActiveService(updatedService);
    }
  }, [t]);
  return (
  
    <div className="drawer lg:drawer-open mt-15 ">
      
   
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle"   checked={drawerOpen}
  onChange={(e) => setDrawerOpen(e.target.checked)} />

      {/* ========== Content ========== */}
      <div className="drawer-content  text-white min-h-screen">
        <nav className="navbar w-full">
        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
  {drawerOpen ? (
    <CgClose className="w-12 h-12 text-[#bbfe32] transition-all duration-300" />
  ) : isRTL ? (
    <CgArrowLeftR className="w-12 h-12 text-[#bbfe32] transition-all duration-300" />
  ) : (
    <CgArrowRightR className="w-12 h-12 text-[#bbfe32] transition-all duration-300" />
  )}
</label>
        </nav>

        <div className="p-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#bbfe32] mb-4">
            {activeService.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            {activeService.description}
          </p>

          <ul className="space-y-4">
            {activeService.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4 bg-[#1f1f1f] p-4 rounded-lg"
              >
                <span className="w-3 h-3 rounded-full bg-[#bbfe32]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ========== Sidebar ========== */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" className="drawer-overlay" />

        <div className="flex min-h-full flex-col bg-[#1f1f1f] is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow p-2 gap-y-5">
            {servicesData.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => setActiveService(service)}
                  className={`transition-all duration-300
                    ${
                      activeService.id === service.id
                        ? "bg-[#bbfe32] text-black"
                        : "text-white"
                    }`}
                >
                  <span className="is-drawer-close:hidden">
                    {service.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Services;
