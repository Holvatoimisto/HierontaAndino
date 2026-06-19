import { ArrowRight, Phone, CheckCircle, Clock, Building2, Briefcase, Construction, Factory, HeartPulse, UtensilsCrossed, Monitor, TrendingDown, Zap, Users, PiggyBank } from "lucide-react";

const howItWorks = [
  { icon: Building2, title: "Työpaikallanne", desc: "Voin tulla suoraan yrityksenne tiloihin, jolloin henkilöstö saa hoitoa ilman ylimääräistä matkustamista tai pitkiä poissaoloja työpäivästä." },
  { icon: HeartPulse, title: "Vastaanotolla", desc: "Työntekijät voivat myös käydä vastaanotollani rauhallisessa ja täysin varustellussa hoitoympäristössä." },
  { icon: Clock, title: "Joustava aikataulu", desc: "Palvelu voidaan toteuttaa kertaluonteisena hyvinvointipäivänä tai säännöllisenä viikko- tai kuukausipalveluna." },
  { icon: Users, title: "Räätälöity ratkaisu", desc: "Jokaiselle yritykselle rakennetaan oma kokonaisuus henkilöstömäärän, toimialan ja tavoitteiden mukaan." },
];

const forWho = [
  { icon: Monitor, title: "Toimistot ja asiantuntijatyö", desc: "Pitkä istuminen aiheuttaa usein niska-, hartia- ja alaselkäongelmia." },
  { icon: Construction, title: "Rakennusala", desc: "Fyysinen työ kuormittaa kehoa päivittäin." },
  { icon: Factory, title: "Teollisuus ja varastot", desc: "Toistuvat työliikkeet lisäävät rasitusvammojen riskiä." },
  { icon: HeartPulse, title: "Terveydenhuolto", desc: "Pitkät työvuorot ja fyysinen kuormitus." },
  { icon: UtensilsCrossed, title: "Ravintola-ala", desc: "Työpäivät vietetään usein jaloilla." },
  { icon: Briefcase, title: "IT- ja finanssiala", desc: "Stressi, kuormitus ja staattiset työasennot." },
];

const benefits = [
  { icon: TrendingDown, title: "Vähemmän sairaspoissaoloja", desc: "Fyysisesti hyvinvoivat työntekijät tarvitsevat harvemmin sairauspoissaoloja." },
  { icon: Zap, title: "Parempi työteho", desc: "Kivuton ja palautunut työntekijä jaksaa paremmin." },
  { icon: Users, title: "Vahvempi henkilöstön sitoutuminen", desc: "Hyvinvointiin panostaminen kertoo työntekijöille, että heistä välitetään." },
  { icon: PiggyBank, title: "Pitkän aikavälin säästöt", desc: "Ennaltaehkäisevä hyvinvointi on usein edullisempaa kuin ongelmien korjaaminen myöhemmin." },
];

export default function Yrityksille() {
  return (
    <div>
      {/* OSIO 1 — HERO */}
      <section className="bg-[#1a1a1a] pt-[140px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">TYÖHYVINVOINTI</p>
          <h1 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.08] text-white mb-6">Työhyvinvointipalvelut <em className="italic">yrityksille</em></h1>
          <p className="text-lg font-body font-normal leading-relaxed text-[rgba(255,255,255,0.65)] max-w-[680px] mx-auto mb-10">
            Tarjoan yrityksille joustavia hieronta- ja kehonhuoltopalveluita joko työpaikalla tai vastaanotollani. Palvelu räätälöidään yrityksen koon, henkilöstön tarpeiden ja aikataulujen mukaan.
          </p>
          <a href="mailto:andy@hierontaandino.fi?subject=Työhyvinvointipalvelut - tarjouspyyntö" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e1a] transition-colors">
            Pyydä tarjous <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* OSIO 2 — NÄIN PALVELU TOIMII */}
      <section className="py-[100px] max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">TOTEUTUS</p>
          <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light leading-[1.2] text-[#1a1a1a]">Näin palvelu <em className="italic">toimii</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              <Icon className="w-10 h-10 text-[#c1121f] mx-auto mb-4" />
              <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3>
              <p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OSIO 3 — KENELLE PALVELU SOPII */}
      <section className="bg-[#f5f0ee] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">TOIMIALAT</p>
            <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light leading-[1.2] text-[#1a1a1a]">Kenelle palvelu <em className="italic">sopii</em>?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forWho.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                <Icon className="w-10 h-10 text-[#c1121f] mb-4" />
                <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSIO 4 — MIKSI INVESTOIDA */}
      <section className="py-[100px] max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">HYÖDYT</p>
          <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light leading-[1.2] text-[#1a1a1a]">Miksi yritykset investoivat <em className="italic">työhyvinvointiin</em>?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              <Icon className="w-10 h-10 text-[#c1121f] mx-auto mb-4" />
              <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3>
              <p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OSIO 5 — CTA */}
      <section className="bg-[#1a1a1a] py-[100px]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">ALOITETAAN</p>
          <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light leading-[1.1] text-white mb-4">Aloitetaan maksuttomalla <em className="italic">kartoituksella</em></h2>
          <p className="text-base font-body font-normal leading-relaxed text-[rgba(255,255,255,0.65)] max-w-[520px] mx-auto mb-8">
            Käydään yhdessä läpi henkilöstönne tarpeet, yrityksen koko ja tavoitteet. Tämän pohjalta rakennan teille selkeän ehdotuksen sekä hinnoittelun.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {["Maksuton kartoitus", "Ei sitoumuksia", "Työpaikalla tai vastaanotolla", "Räätälöity yrityksellenne"].map((item) => (
              <span key={item} className="flex items-center justify-center gap-2 text-sm font-body text-[rgba(255,255,255,0.8)]">
                <CheckCircle className="w-4 h-4 text-[#c1121f] shrink-0" />{item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:andy@hierontaandino.fi?subject=Työhyvinvointipalvelut - tarjouspyyntö" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e1a] transition-colors">
              Pyydä tarjous <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:0505509799" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <Phone className="w-4 h-4" />Soita 050 550 9799
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
