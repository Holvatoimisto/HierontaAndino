import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  MapPin,
  HeartPulse,
  ArrowRight,
  Phone,
  Star,
  Bone,
  Activity,
  Zap,
  Wind,
  Monitor,
  CheckCircle,
  Stethoscope,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const symptomCards = [
  { icon: Bone, text: "Niska- ja hartiakivut", desc: "Toistuvat ja pitkittyneet kivut" },
  { icon: Activity, text: "Selkävaivat", desc: "Ala- ja yläselän jäykkyys" },
  { icon: Zap, text: "Lihaskireydet", desc: "Urheilu ja työperäiset" },
  { icon: Wind, text: "Päänsärky", desc: "Stressiperäiset ja jännitykset" },
  { icon: Monitor, text: "RSI-oireet", desc: "Toistuva rasitus" },
  { icon: HeartPulse, text: "Stressi", desc: "Rentoutuminen ja palautuminen" },
];

// 4 palvelua Andinon mukaan
const services = [
  {
    title: "Klassinen hieronta",
    slug: "klassinen-hieronta",
    desc: "Rauhoittava ja lihaksia rentouttava hieronta, joka lievittää jännitystä, parantaa verenkiertoa ja auttaa palautumaan arjen rasituksista.",
    img: "/images/service-massage.jpg",
  },
  {
    title: "Urheiluhieronta",
    slug: "urheiluhieronta",
    desc: "Kohdennettu hieronta urheilijoille ja aktiivisille liikkujille. Auttaa palautumisessa, ehkäisee vammoja ja parantaa suorituskykyä.",
    img: "/images/service-sports-massage.jpg",
  },
  {
    title: "Purentalihashieronta (TMD)",
    slug: "purentilihashieronta",
    desc: "Erikoishoito leukanivelvaivoihin. Lievittää päänsärkyä, niska- ja kasvojen jännitystä puremisesta johtuvien ongelmien taustalla.",
    img: "/images/symptoms-img.jpg",
  },
  {
    title: "Päähieronta",
    slug: "paahieronta",
    desc: "Syvärentouttava päänahan, niska- ja hartiaseudun hieronta, joka lievittää stressiä, päänsärkyä ja parantaa uneen laatua.",
    img: "/images/service-head-massage.jpg",
  },
];

const testimonials = [
  {
    text: "Maailman parasta hierontaa. Andy on todellinen ammattilainen ja huomaa heti missä ongelmakohdat ovat. Suosittelen lämpimästi!",
    author: "Laura M.",
    location: "Kajaani",
  },
  {
    text: "En olisi uskonut miten suuri vaikutus hieronnalla voi olla. Kipu on helpottanut selvästi ja olen saanut nukuttua paremmin.",
    author: "Janne K.",
    location: "Kajaani",
  },
  {
    text: "Andy osaa hommansa. Ammattitaitoinen, ystävällinen ja asiakasta kuunteleva hieroja. Tulen varmasti uudelleen!",
    author: "Sari L.",
    location: "Kajaani",
  },
];

const whyUsFeatures = [
  "Koulutettu hieroja (SHM ry:n jäsen)",
  "Klassinen, urheilu- ja purentalihashieronta",
  "5+ vuoden kokemus alalta",
  "Yksilöllinen hoito jokaiselle",
  "Kajaani, Onnelantie 1",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const symptomRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-bg", { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" })
        .fromTo(".hero-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.7")
        .fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-ctas", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
      gsap.fromTo(".symptom-left > *", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: symptomRef.current, start: "top 75%", toggleActions: "play none none none" } });
      gsap.fromTo(".symptom-img", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: symptomRef.current, start: "top 75%", toggleActions: "play none none none" } });
      gsap.fromTo(".service-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: servicesRef.current, start: "top 70%", toggleActions: "play none none none" } });
      gsap.fromTo(".pricing-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: pricingRef.current, start: "top 75%", toggleActions: "play none none none" } });
      gsap.fromTo(".testimonial-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: testimonialsRef.current, start: "top 70%", toggleActions: "play none none none" } });
      gsap.fromTo(".testi-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: testimonialsRef.current, start: "top 65%", toggleActions: "play none none none" } });
      gsap.fromTo(".why-img", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: whyRef.current, start: "top 72%", toggleActions: "play none none none" } });
      gsap.fromTo(".why-right > *", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: whyRef.current, start: "top 72%", toggleActions: "play none none none" } });
      gsap.fromTo(".cta-left > *", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ctaRef.current, start: "top 70%", toggleActions: "play none none none" } });
      gsap.fromTo(".cta-right", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ctaRef.current, start: "top 70%", toggleActions: "play none none none" } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden" style={{ minHeight: "100dvh" }}>
        <div className="hero-bg absolute inset-0">
          <img src="/images/hero-andino.jpg" alt="Hieronta ja Kehonhuolto Andino — Kajaani" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.50) 60%, rgba(26,26,26,0.30) 100%)" }} />
        </div>
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-8 lg:px-[5vw] pt-[80px] pb-10">
          <div className="grid lg:grid-cols-[58%_42%] gap-6 items-center min-h-[calc(100dvh-130px)]">
            <div className="flex flex-col justify-center">
              <p className="hero-label text-[10px] font-body font-medium tracking-[0.14em] text-[rgba(193,18,31,0.8)] uppercase mb-4">
                HIERONTA & KEHONHUOLTO ANDINO · KAJAANI
              </p>
              <h1 className="hero-title font-display text-[clamp(36px,4.8vw,56px)] font-light leading-[1.08] tracking-[-0.01em] text-white mb-5">
                Koulutettua hierontaa <em className="italic">Kajaanin</em> alueella
              </h1>
              <p className="hero-sub text-[15px] font-body font-normal leading-[1.6] text-[rgba(255,255,255,0.7)] max-w-[460px] mb-6">
                Klassista ja urheiluhierontaa yli 5 vuoden kokemuksella. Autan selkä-, niska- ja lihaskipuihin — yksilöllisesti ja ammattitaidolla.
              </p>
              <div className="hero-ctas flex flex-wrap gap-4 mb-5">
                <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-9 py-4 rounded-full font-body font-medium text-base bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika</a>
                <a href="tel:0505509799" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-body font-medium text-base border border-[rgba(255,255,255,0.25)] text-white hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.5)] transition-all"><Phone className="w-4 h-4" />050 550 9799</a>
              </div>
              <div className="hero-trust flex items-center gap-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c1121f] fill-[#c1121f]" />)}
                <span className="text-xs font-body font-medium text-[rgba(255,255,255,0.55)]">4.9 / 5 Google-arvostelut (42)</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-[12px] rounded-2xl p-7 text-center border border-[rgba(26,26,26,0.08)]" style={{ boxShadow: "0 12px 40px rgba(26,26,26,0.15)" }}>
                <p className="font-display text-[44px] font-light leading-none text-[#1a1a1a] mb-1">5+</p>
                <p className="text-[10px] font-body font-medium tracking-[0.12em] text-[#888] uppercase mb-3">Vuotta kokemusta</p>
                <div className="h-px bg-[rgba(26,26,26,0.1)] mb-3" />
                <p className="text-sm font-body text-[#3d3d3d]">Klassinen · Urheilu · TMD · Pää</p>
                <p className="text-xs font-body text-[#888] mt-1">Kajaani</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-5 h-5 text-[#1a1a1a] opacity-40" />
        </div>
      </section>

      {/* FIRST VISIT */}
      <section className="bg-white py-10 border-b border-[rgba(26,26,26,0.06)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">Ensimmäinen käynti sisältää</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: CheckCircle, text: "Alkututustumisen" },
              { icon: Stethoscope, text: "Vaivojen kartoituksen" },
              { icon: HeartPulse, text: "Yksilöllisen hoidon" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-base font-body font-medium text-[#1a1a1a]"><Icon className="w-5 h-5 text-[#c1121f]" />{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section ref={symptomRef} className="py-[100px] max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[50%_50%] gap-12 lg:gap-16 items-center">
          <div className="symptom-left">
            <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">MIHIN APUA TARVITSET?</p>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] font-light leading-[1.2] text-[#1a1a1a] mb-4">Hoidan <em className="italic">vaivasi</em> ammattitaidolla</h2>
            <p className="text-base font-body font-normal leading-relaxed text-[#888] max-w-[480px] mb-10">
              Niska- ja hartiaseudun kivut, selkävaivat, lihaskireydet, päänsärky, stressi — hieronta auttaa moniin arkipäivän vaivoihin. Jokainen hoito räätälöidään juuri sinun tarpeisiisi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {symptomCards.map(({ icon: Icon, text, desc }) => (
                <div key={text} className="flex flex-col items-start gap-2.5 p-4 rounded-xl bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                  <Icon className="w-6 h-6 text-[#c1121f] group-hover:text-[#1a1a1a] transition-colors" />
                  <div><p className="text-sm font-body font-semibold text-[#1a1a1a] leading-tight">{text}</p><p className="text-xs font-body text-[#888] mt-1">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="symptom-img">
            <img src="/images/hero-andino.jpg" alt="Hieronta Kajaani" className="rounded-xl w-full h-auto object-cover transition-all duration-300 hover:scale-[1.02]" style={{ boxShadow: "0 20px 60px rgba(26,26,26,0.1)" }} />
          </div>
        </div>
      </section>

      {/* SERVICES — 4 palvelua */}
      <section id="palvelut" ref={servicesRef} className="bg-[#1a1a1a] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">PALVELUT</p>
          <h2 className="font-display text-[clamp(30px,3.5vw,42px)] font-light leading-[1.12] text-white mb-4"><em className="italic">Hoitoa</em> sinun kehollesi</h2>
          <p className="text-lg font-body font-normal leading-relaxed text-[rgba(255,255,255,0.65)] max-w-[600px] mx-auto mb-14">
            Koulutetun hierojan palvelut Kajaanissa — yli 5 vuoden kokemuksella.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} to={`/palvelu/${s.slug}`} className="service-card group bg-white rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{s.title}</h3>
                  <p className="text-sm font-body font-normal leading-relaxed text-[#888] mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-[#1a1a1a] group-hover:text-[#c1121f] transition-colors">Lue lisää <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="hinnasto" ref={pricingRef} className="py-[100px] max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">HINNASTO</p>
        <h2 className="font-display text-[clamp(28px,3vw,40px)] font-light leading-[1.2] text-[#1a1a1a] mb-4">Läpinäkyvää <em className="italic">hinnoittelua</em></h2>
        <p className="text-base font-body font-normal text-[#888] max-w-[520px] mx-auto mb-10">Hoidon kesto valitaan aina tarpeesi mukaisesti. Smartumilla ja ePassilla maksettaessa lisätään 2 € palvelumaksu.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <div className="pricing-card bg-white rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: "1px solid rgba(26,26,26,0.08)", boxShadow: "0 8px 32px rgba(26,26,26,0.06)" }}>
            <h3 className="font-body text-2xl font-semibold text-[#1a1a1a] mb-1">Klassinen hieronta</h3>
            <p className="text-sm font-body text-[#888] mb-5">30–90 min</p>
            <p className="font-body text-[52px] font-bold leading-none text-[#1a1a1a] mb-3">35–85 €</p>
            <p className="text-sm font-body text-[#888] mb-6">30 min 35 € · 45 min 50 € · 60 min 65 € · 75 min 70 € · 90 min 85 €</p>
            <div className="w-full h-px bg-[rgba(26,26,26,0.08)] mb-6" />
            <p className="flex items-center justify-center gap-2 text-sm font-body font-medium text-[#1a1a1a] mb-8">Maksutavat: Visa, Mastercard, Smartum, ePassi</p>
            <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-3.5 rounded-full font-body font-medium text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika</a>
          </div>
          <div className="pricing-card bg-[#1a1a1a] rounded-2xl p-10 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-center">
            <HeartPulse className="w-10 h-10 text-[#c1121f] mx-auto mb-4" />
            <h3 className="font-body text-2xl font-semibold mb-2">Päähieronta</h3>
            <p className="text-base font-body text-[rgba(255,255,255,0.6)] mb-4">30 minuuttia</p>
            <p className="font-body text-[52px] font-bold leading-none text-white mb-3">35 €</p>
            <p className="text-[15px] font-body text-[rgba(255,255,255,0.8)] mb-8">Rentouttava päänahan, niska- ja hartiaseudun hieronta. Syvärentouttava kokemus.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Visa", "Mastercard", "Smartum", "ePassi"].map((m) => <span key={m} className="px-4 py-2 rounded-full text-sm font-body font-medium text-[#1a1a1a] bg-[#f5f0ee]">{m}</span>)}
            </div>
          </div>
        </div>
        <Link to="/hinnasto" className="inline-flex items-center gap-2 mt-10 text-[#1a1a1a] font-body font-medium hover:text-[#c1121f] transition-colors">Katso täysi hinnasto <ArrowRight className="w-4 h-4" /></Link>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="bg-[#1a1a1a] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="testimonial-header">
            <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">ASIAKASKOKEMUKSET</p>
            <h2 className="font-display text-[clamp(30px,3.5vw,42px)] font-light leading-[1.12] text-white mb-4">Mitä asiakkaat <em className="italic">sanovat</em></h2>
            <div className="flex items-center justify-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-[#c1121f] fill-[#c1121f]" />)}
            </div>
            <p className="text-base font-body text-[rgba(255,255,255,0.6)] mb-12">4.9 / 5 — 42 Google-arvostelua</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 text-left transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#c1121f] fill-[#c1121f]" />)}
                </div>
                <p className="text-base font-body font-normal leading-relaxed text-white mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c1121f] flex items-center justify-center text-white font-body font-semibold text-sm">{t.author.charAt(0)}</div>
                  <div><p className="text-sm font-body font-semibold text-[#c1121f]">{t.author}</p><p className="text-xs font-body text-[rgba(255,255,255,0.5)]">{t.location}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="miksi-me" ref={whyRef} className="py-[100px] max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="why-img overflow-hidden rounded-xl">
            <img src="/images/andino-miksi.png" alt="Andy Nwannah — Hieroja Kajaani" className="rounded-xl w-full h-[500px] lg:h-[560px] object-cover transition-transform duration-500 hover:scale-[1.03]" style={{ boxShadow: "0 20px 60px rgba(26,26,26,0.1)" }} />
          </div>
          <div className="why-right lg:pl-8">
            <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">MIKSI ANDINO?</p>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] font-light leading-[1.2] text-[#1a1a1a] mb-6">Täällä <em className="italic">sinua</em> varten</h2>
            <p className="text-base font-body font-normal leading-relaxed text-[#888] mb-4">
              Olen Andy Nwannah, koulutettu hieroja ja Suomen Hierojat ja Mankaalit ry:n jäsen. Hieronta ja Kehonhuolto Andino toimii Kajaanin keskustassa, Onnelantiellä.
            </p>
            <p className="text-base font-body font-normal leading-relaxed text-[#888] mb-8">
              Jokainen hoito räätälöidään yksilöllisesti — olit sitten urheilija, toimistotyöläinen tai etsit apua pitkittyneisiin vaivoihin. Tavoitteenani on auttaa sinua voimaan paremmin.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {whyUsFeatures.map((text, i) => (
                <span key={i} className="flex items-center gap-4 text-base font-body font-medium text-[#1a1a1a]">
                  <CheckCircle className="w-6 h-6 text-[#c1121f] shrink-0" />{text}
                </span>
              ))}
            </div>
            <Link to="/meista" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm bg-[#1a1a1a] text-white hover:bg-[#111] transition-colors">Lue lisää Andinosta <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="yhteystiedot" ref={ctaRef} className="bg-[#1a1a1a] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div className="cta-left">
              <h2 className="font-display text-[clamp(30px,3.5vw,48px)] font-light leading-[1.08] text-white mb-6">Parempi olo voi alkaa <em className="italic">yhdestä käynnistä</em></h2>
              <p className="text-base font-body font-normal leading-relaxed text-[rgba(255,255,255,0.65)] max-w-[480px] mb-10">
                Älä jää kipujen kanssa yksin. Varaa aika tänään ja koe eron, jonka ammattitaitoinen hieronta voi tehdä.
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors w-fit">Varaa aika verkossa <ArrowRight className="w-4 h-4" /></a>
                <a href="tel:0505509799" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors w-fit"><Phone className="w-4 h-4" />Soita 050 550 9799</a>
                <a href="mailto:hierontaandino@gmail.com" className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors w-fit font-body text-sm">hierontaandino@gmail.com</a>
              </div>
            </div>
            <div className="cta-right">
              <div className="rounded-xl overflow-hidden mb-6" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4314.7!2d27.7286!3d64.2280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDEzJzQxLjIiTiAyN8KwNDMnNDMuMCJF!5e0!3m2!1sfi!2sfi!4v1" width="100%" height="280" style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hieronta ja Kehonhuolto Andino sijainti" />
              </div>
              <div className="bg-[rgba(17,17,17,0.6)] rounded-xl p-6 border border-[rgba(255,255,255,0.06)]">
                <p className="font-body font-semibold text-white mb-2">Hieronta ja Kehonhuolto Andino</p>
                <span className="flex items-center gap-2 text-sm font-body text-[rgba(255,255,255,0.6)] mb-1"><MapPin className="w-4 h-4" />Onnelantie 1, 87100 Kajaani</span>
                <a href="tel:0505509799" className="flex items-center gap-2 text-sm font-body text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"><Phone className="w-4 h-4" />050 550 9799</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
