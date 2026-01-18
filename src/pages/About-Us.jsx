import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-[#272727] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(187,254,50,0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
          <div className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}>
            <p className="text-sm uppercase tracking-[0.3em] text-[#bbfe32]">
              {t("about.heroTag")}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {t("about.heroTitle")}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {t("about.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={`grid gap-6 lg:grid-cols-3 ${isArabic ? "text-right" : "text-left"}`}>
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#bbfe32]">
              {t("about.approachTitle")}
            </h2>
            <p className="text-white/70 leading-relaxed">
              {t("about.approachDescription")}
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-4 md:grid-cols-3">
            {[
              {
                title: t("about.approach.creativity.title"),
                description: t("about.approach.creativity.description"),
              },
              {
                title: t("about.approach.technology.title"),
                description: t("about.approach.technology.description"),
              },
              {
                title: t("about.approach.data.title"),
                description: t("about.approach.data.description"),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#1f1f1f] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-xl font-semibold text-[#bbfe32] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { value: t("about.stats.years"), label: t("about.stats.yearsLabel") },
            { value: t("about.stats.clients"), label: t("about.stats.clientsLabel") },
            { value: t("about.stats.countries"), label: t("about.stats.countriesLabel") },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl bg-[#1b1b1b] p-6 border border-white/10 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <p className="text-3xl font-semibold text-[#bbfe32]">{stat.value}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div
            className={`rounded-3xl border border-white/10 bg-[#1f1f1f] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h2 className="text-2xl font-semibold text-[#bbfe32] mb-4">
              {t("about.visionTitle")}
            </h2>
            <p className="text-white/75 leading-relaxed">{t("about.visionBody")}</p>
          </div>
          <div
            className={`rounded-3xl border border-white/10 bg-[#1f1f1f] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h2 className="text-2xl font-semibold text-[#bbfe32] mb-4">
              {t("about.missionTitle")}
            </h2>
            <p className="text-white/75 leading-relaxed">{t("about.missionBody")}</p>
          </div>
        </div>
        <div
          className={`mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#1f1f1f] via-[#242424] to-[#1f1f1f] p-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <p className="text-white/80 leading-relaxed">{t("about.qualityStatement")}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

