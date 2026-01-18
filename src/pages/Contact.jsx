import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-[#272727] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(187,254,50,0.15),_transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-14">
          <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <p className="text-sm uppercase tracking-[0.3em] text-[#bbfe32]">
              {t("contact.heroTag")}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {t("contact.heroTitle")}
            </h1>
            <p className="text-lg text-white/75 max-w-3xl">
              {t("contact.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2 items-start">

         {/* 🟢 Contact Info – RIGHT */}
<div
  className={`space-y-6 ${
    isArabic ? "text-right order-1 lg:order-2" : "text-left"
  }`}
>
  <h2 className="text-2xl font-semibold text-[#bbfe32]">
    {t("contact.infoTitle")}
  </h2>

  <div className="space-y-4">
    {[
      {
        title: t("contact.phoneTitle"),
        value: t("contact.phoneValue"),
        link: "https://wa.me/201000000000", // رقمك هنا بدون +
      },
      {
        title: t("contact.emailTitle"),
        value: t("contact.emailValue"),
        link: "mailto:info@example.com",
      },
      {
        title: t("contact.hoursTitle"),
        value: t("contact.hoursValue"),
        subValue: t("contact.hoursNote"),
      },
    ].map((item) => (
      <div
        key={item.title}
        className="group rounded-2xl border border-white/10 bg-[#1f1f1f] p-5
        shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:border-[#bbfe32]/50
        hover:-translate-y-1
        hover:shadow-[0_30px_70px_rgba(187,254,50,0.15)]"
      >
        <p className="text-sm text-white/60 mb-1">{item.title}</p>

        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-white
            hover:text-[#bbfe32] transition"
          >
            {item.value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-white">
            {item.value}
          </p>
        )}

        {item.subValue && (
          <p className="text-sm text-white/60 mt-1">
            {item.subValue}
          </p>
        )}
      </div>
    ))}
  </div>
</div>


          {/* 🟢 Form – LEFT */}
          <div
            className={`rounded-3xl border border-white/10 bg-[#1f1f1f] p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.4)]
            ${isArabic ? "text-right order-2 lg:order-1" : "text-left"}`}
          >
            <h2 className="text-2xl font-semibold text-[#bbfe32] mb-6">
              {t("contact.formTitle")}
            </h2>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  {t("contact.form.nameLabel")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full rounded-xl bg-[#272727] border border-white/10 px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#bbfe32] focus:border-[#bbfe32]
                  transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  {t("contact.form.emailLabel")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full rounded-xl bg-[#272727] border border-white/10 px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#bbfe32] focus:border-[#bbfe32]
                  transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  rows="4"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full rounded-xl bg-[#272727] border border-white/10 px-4 py-3 text-sm resize-none
                  focus:outline-none focus:ring-2 focus:ring-[#bbfe32] focus:border-[#bbfe32]
                  transition"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#bbfe32] text-black font-semibold py-3
                hover:bg-[#a8e92c] transition"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
