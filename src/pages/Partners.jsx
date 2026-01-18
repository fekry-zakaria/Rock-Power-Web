import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const stagger = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(187,254,50,0.12),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#bbfe32]">
              {t("partners.heroTag")}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {t("partners.heroTitle")}
            </h1>
            <p className="text-lg text-white/75 max-w-3xl">
              {t("partners.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>
          <h2 className="text-2xl font-semibold text-[#bbfe32]">
            {t("partners.pillarsTitle")}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            t("partners.pillars.strategy.title"),
            t("partners.pillars.collaboration.title"),
            t("partners.pillars.performance.title"),
          ].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-2xl border border-white/10 bg-[#1f1f1f] p-6 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#bbfe32] mb-3">{title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {t(
                  `partners.pillars.${
                    index === 0
                      ? "strategy"
                      : index === 1
                        ? "collaboration"
                        : "performance"
                  }.description`
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={`mb-6 ${isArabic ? "text-right" : "text-left"}`}>
          <h2 className="text-2xl font-semibold text-[#bbfe32]">
            {t("partners.showcaseTitle")}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {t("partners.showcase", { returnObjects: true }).map((item) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-full border border-[#bbfe32]/40 bg-[#1f1f1f] px-5 py-2 text-sm text-white/80"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`rounded-3xl border border-white/10 bg-gradient-to-r from-[#1f1f1f] via-[#242424] to-[#1f1f1f] p-8 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <h3 className="text-2xl font-semibold text-[#bbfe32] mb-3">
            {t("partners.ctaTitle")}
          </h3>
          <p className="text-white/75 leading-relaxed">
            {t("partners.ctaDescription")}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Partners;

