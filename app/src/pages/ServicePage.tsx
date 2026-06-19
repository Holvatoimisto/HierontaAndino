import { useParams, Navigate } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Clock, Euro, HeartPulse, Stethoscope } from "lucide-react";

interface ServiceData {
  title: string; subtitle: string; heroImg: string;
  overview: string; whatIs: string; howItWorks: string[];
  benefits: string[]; conditions: string[];
  sessionInfo: { duration: string; price: string; includes: string };
  faq: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "klassinen-hieronta": {
    title: "Klassinen hieronta",
    subtitle: "Rauhoittava ja rentouttava hieronta Kajaanissa",
    heroImg: "/images/service-massage.jpg",
    overview: `Klassinen hieronta on perinteinen, koko kehon rentouttava hoitomuoto, joka lievittää lihasjännitystä, parantaa verenkiertoa ja auttaa palautumaan arjen rasituksista.\n\nHieronta sopii kaikille, jotka kaipaavat rentoutumista, kivunlievitystä tai apua lihaskireyksiin. Hoito räätälöidään aina yksilöllisesti tilanteen ja tarpeiden mukaan.`,
    whatIs: `Klassinen hieronta sisältää erilaisia hierontatekniikoita, kuten sivelyä, hankautta, puristusta ja taputusta. Nämä tekniikat stimuloivat verenkiertoa, aineenvaihduntaa ja lymfakiertoa.\n\nHoidon aikana käytetään hierontaöljyä, joka auttaa käsien liukumista ja tekee hoidosta miellyttävän.`,
    howItWorks: ["Alkukeskustelu — kuulemme vaivastasi ja toiveistasi", "Hoito — klassinen hieronta koko keholle tai ongelma-alueille", "Loppurentoutus — hetki rauhoittumiseen hoidon jälkeen", "Jatkohoito-ohjeet — vinkkejä kotona tehtävään huoltoon"],
    benefits: ["Vähentää lihasjännitystä ja -kipua", "Parantaa verenkiertoa ja aineenvaihduntaa", "Auttaa stressin hallinnassa", "Parantaa unen laatua", "Edistää palautumista rasituksesta"],
    conditions: ["Lihaskireydet", "Niska- ja hartiavaivat", "Selkäkivut", "Päänsärky", "Stressi", "Unettomuus", "Palautuminen rasituksesta", "Yleinen rentoutuminen"],
    sessionInfo: { duration: "30–90 min", price: "35–85 €", includes: "Alkukeskustelu, hieronta ja jatkohoito-ohjeet" },
    faq: [
      { q: "Kuinka pitkän hoidon minun pitäisi varata?", a: "30 min riittää kohdennettuun alueeseen, 45–60 min on hyvä peruskestokoko keholle, 75–90 min antaa syvemmän rentoutumisen." },
      { q: "Pitääkö minun ottaa jotain mukaan?", a: "Ei tarvitse. Tulet vain paikalle ja minä hoidan loput." },
      { q: "Kuinka usein kannattaa käydä hieronnassa?", a: "Akuuteissa kivuissa 1–2 kertaa viikossa. Ylläpitohoidossa 2–4 viikon välein." },
    ],
  },
  "urheiluhieronta": {
    title: "Urheiluhieronta",
    subtitle: "Tehokasta palautumista aktiivisille liikkujille",
    heroImg: "/images/service-sports-massage.jpg",
    overview: `Urheiluhieronta on kohdennettua, syvempää hierontaa, joka on suunniteltu erityisesti urheilijoille ja aktiivisesti liikkuville henkilöille. Se auttaa palautumisessa, ehkäisee vammoja ja parantaa suorituskykyä.\n\nHieronta soveltuu niin kovaan treenaaville kuin satunnaisemmillekin liikkujille.`,
    whatIs: `Urheiluhieronta yhdistelee erilaisia tekniikoita, kuten syvää kudoshierontaa, venyttelyä ja mobilisointia. Tavoitteena on nopeuttaa palautumista, parantaa liikkuvuutta ja vähentää loukkaantumisriskiä.`,
    howItWorks: ["Alkukeskustelu — urheilutausta ja tavoitteet", "Kohdennettu hieronta — syvä kudostyöskentely", "Venyttely ja mobilisointi — parannetaan liikkuvuutta", "Jatkohjeet — palautumiseen ja ennaltaehkäisyyn"],
    benefits: ["Nopeuttaa palautumista harjoittelusta", "Ehkäisee lihasvammoja", "Parantaa liikkuvuutta ja suorituskykyä", "Vähentää lihasjännitystä", "Auttaa urheiluvammojen hoidossa"],
    conditions: ["Lihaskireydet", "Palautuminen treenistä", "Urheiluvammat", "Niveljäykkyys", "Lihasvammat", "Rasitusvammat", "Palautuminen kilpailuista", "Yleinen lihashuolto"],
    sessionInfo: { duration: "45–90 min", price: "50–85 €", includes: "Keskustelu, urheiluhieronta ja jatkohjeet" },
    faq: [
      { q: "Sopiiko urheiluhieronta minulle, jos en harrasta urheilua?", a: "Kyllä sopii. Hoito on vain intensiivisempää ja kohdennetumpaa kuin klassinen hieronta." },
      { q: "Milloin ennen kilpailua kannattaa tulla hierontaan?", a: "Kevennys 1–2 päivää ennen. Syvempi hieronta viimeistään 3–5 päivää ennen kilpailua." },
      { q: "Kuinka pian harjoittelun jälkeen voin tulla hierontaan?", a: "Mieluiten saman päivän aikana tai seuraavana päivänä. Näin saat parhaan hyödyn palautumiselle." },
    ],
  },
  "purentilihashieronta": {
    title: "Purentalihashieronta (TMD)",
    subtitle: "Erikoishoito leukanivelvaivoihin",
    heroImg: "/images/symptoms-img.jpg",
    overview: `Purentalihashieronta eli TMD-hoito on erikoistunut hierontamuoto, joka keskittyy leukanivelalueen lihaksiin ja kudoksiin. Se auttaa lukko- ja naksahdusoireisiin, päänsärkyyn sekä niska- ja kasvojen jännitykseen.\n\nOlen käynyt erityiskoulutuksen purentalihashieronnan tekniikoissa ja voin auttaa moniin leukanivelalueen ongelmiin.`,
    whatIs: `Purentalihashieronnassa työstetään suun sisä- ja ulkopuolella olevia lihaksia. Hoito voi sisältää myös pään, niskan ja hartioiden alueen käsittelyn, sillä nämä alueet ovat usein yhteydessä toisiinsa.`,
    howItWorks: ["Alkututkimus — kartoitetaan oireet ja taustat", "Sisäinen ja ulkoinen lihastyöskentely", "Ohjeet kotiharjoituksiin ja rentoutumiseen", "Seuranta — arvioidaan hoitotuloksia"],
    benefits: ["Vähentää leukanivelkipua", "Auttaa lukko- ja naksahdusoireisiin", "Lieventää päänsärkyä", "Vähentää niska- ja hartiaseudun jännitystä", "Parantaa suun avaamista"],
    conditions: ["Leukanivelkipu", "Lukko-oireet", "Naksahdus leuassa", "Puremisvaikeudet", "Päänsärky", "Kasvojen jännitys", "Niska-hartiavaivat", "Bruxismi (hampaiden narskutus)"],
    sessionInfo: { duration: "45–60 min", price: "50–65 €", includes: "Tutkimus, hoito ja kotiohjeet" },
    faq: [
      { q: "Kuinka monta hoitokertaa tarvitsen?", a: "Yleensä 3–6 kertaa riippuen oireiden vaikeusasteesta. Ensimmäisellä kerralla arvioimme tilanteen." },
      { q: "Onko hoito kivulias?", a: "Hoito on yleensä miellyttävää, mutta tietyt kohdat voivat tuntua herkiltä. Kerro aina, jos tunnet epämukavuutta." },
      { q: "Voiko purentalihashieronta korvata hammaslääkärin?", a: "Ei korvaa. Suosittelen yhteistyötä hammaslääkärin tai purennan erikoishammaslääkärin kanssa." },
    ],
  },
  "paahieronta": {
    title: "Päähieronta",
    subtitle: "Syvärentouttava hoito stressiin ja päänsärkyyn",
    heroImg: "/images/service-head-massage.jpg",
    overview: `Päähieronta on syvärentouttava hoito, joka keskittyy päänahan, niska- ja hartiaseudun alueelle. Se auttaa stressiin, päänsärkyyn ja jännitykseen, ja tarjoaa täydellisen hemmotteluhetken arjen keskellä.\n\nPäähieronta on erinomainen lisä klassisen hieronnan rinnalla tai itsenäisenä hoitona.`,
    whatIs: `Päähieronnassa käytetään erilaisia tekniikoita, jotka stimuloivat päänahan hermopäätteitä, rentouttavat lihaksia ja parantavat verenkiertoa. Hoito voi sisältää myös kasvojen ja korvien alueen käsittelyn.`,
    howItWorks: ["Rentoutuminen — hetki rauhoittumiseen", "Päänahan ja niskan hieronta", "Kasvojen ja korvien alueen käsittely", "Loppuhetki — nauti rentoutumisesta"],
    benefits: ["Vähentää stressiä ja jännitystä", "Auttaa päänsärkyyn ja migreeniin", "Parantaa unen laatua", "Stimuloi verenkiertoa päänahassa", "Syvärentouttava kokemus"],
    conditions: ["Stressi", "Päänsärky", "Migreeni", "Unettomuus", "Päänahan jännitys", "Niskajännitys", "Yleinen väsymys", "Rentoutumisen tarve"],
    sessionInfo: { duration: "30 min", price: "35 €", includes: "Päähieronta kokonaisvaltaisena hoitona" },
    faq: [
      { q: "Voiko päähierontaa yhdistää klassiseen hierontaan?", a: "Ehdottomasti! Voit varata esimerkiksi 60 min klassisen hieronnan, johon sisältyy päähieronta." },
      { q: "Onko päähieronta turvallista?", a: "Kyllä. Hoito on turvallinen ja miellyttävä. Kerro, jos sinulla on erityisiä terveysongelmia." },
      { q: "Kuinka usein kannattaa käydä päähieronnassa?", a: "Viikoittainen tai kahden viikon välein on hyvä rytmi. Myös kertahoito tuo helpotusta." },
    ],
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug || ""];
  if (!service) return <Navigate to="/" replace />;

  return (
    <div>
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "50vh", maxHeight: "55vh" }}>
        <div className="absolute inset-0">
          <img src={service.heroImg} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.90) 0%, rgba(26,26,26,0.65) 50%, rgba(26,26,26,0.35) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[100px] pb-10">
          <div className="max-w-[700px]">
            <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-3">PALVELU</p>
            <h1 className="font-display text-[clamp(32px,4vw,52px)] font-light leading-[1.08] text-white mb-4">{service.title}</h1>
            <p className="text-lg font-body text-[rgba(255,255,255,0.7)]">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12">
          <div>
            <p className="text-base font-body font-normal leading-relaxed text-[#1A1A1A] whitespace-pre-line mb-12">{service.overview}</p>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6">Mikä on {service.title.toLowerCase()}?</h2>
            <p className="text-base font-body font-normal leading-relaxed text-[#888] mb-10">{service.whatIs}</p>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6">Kuinka hoito etenee</h2>
            <div className="flex flex-col gap-4 mb-10">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-sm font-body font-bold text-white shrink-0">{i + 1}</span>
                  <p className="text-base font-body text-[#1A1A1A] pt-1">{step}</p>
                </div>
              ))}
            </div>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6">Hyödyt</h2>
            <div className="flex flex-col gap-3 mb-10">
              {service.benefits.map((b, i) => (
                <span key={i} className="flex items-center gap-3 text-base font-body font-medium text-[#1a1a1a]"><CheckCircle className="w-5 h-5 text-[#c1121f] shrink-0" />{b}</span>
              ))}
            </div>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6">Usein kysyttyä</h2>
            <div className="flex flex-col gap-5">
              {service.faq.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                  <p className="font-body font-semibold text-[#1a1a1a] mb-2">{f.q}</p>
                  <p className="text-sm font-body text-[#888] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
              <h3 className="font-body text-xl font-semibold mb-6">Hoitotiedot</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-[#c1121f] mt-0.5 shrink-0" /><div><p className="text-sm font-body text-[rgba(255,255,255,0.6)]">Kesto</p><p className="font-body font-medium">{service.sessionInfo.duration}</p></div></div>
                <div className="flex items-start gap-3"><Euro className="w-5 h-5 text-[#c1121f] mt-0.5 shrink-0" /><div><p className="text-sm font-body text-[rgba(255,255,255,0.6)]">Hinta</p><p className="font-body font-medium">{service.sessionInfo.price}</p></div></div>
                <div className="flex items-start gap-3"><Stethoscope className="w-5 h-5 text-[#c1121f] mt-0.5 shrink-0" /><div><p className="text-sm font-body text-[rgba(255,255,255,0.6)]">Sisältää</p><p className="font-body font-medium">{service.sessionInfo.includes}</p></div></div>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.12)] my-6" />
              <p className="text-sm font-body text-[rgba(255,255,255,0.6)] mb-3">Maksutavat</p>
              <div className="flex flex-wrap gap-2">
                {["Visa", "Mastercard", "Smartum", "ePassi"].map(m => <span key={m} className="px-3 py-1 rounded-full text-xs font-body font-medium text-[#1a1a1a] bg-[#f5f0ee]">{m}</span>)}
              </div>
              <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 mt-6 px-6 py-3 rounded-full font-body font-medium text-sm bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(26,26,26,0.08)" }}>
              <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center gap-2"><HeartPulse className="w-5 h-5 text-[#c1121f]" />Hoidan mm.</h3>
              <div className="flex flex-col gap-2">
                {service.conditions.map((c, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm font-body text-[#888]"><span className="w-1.5 h-1.5 rounded-full bg-[#c1121f] shrink-0" />{c}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#f5f0ee] rounded-2xl p-6">
              <p className="text-sm font-body font-semibold text-[#1a1a1a] mb-3">Kysyttävää ajanvarauksesta?</p>
              <a href="tel:0505509799" className="inline-flex items-center gap-2 text-[#1a1a1a] font-body font-semibold hover:text-[#c1121f] transition-colors"><Phone className="w-4 h-4" />050 550 9799</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light leading-[1.1] text-white mb-4">Varaa aika <em className="italic">{service.title.toLowerCase()}</em>-hoitoon</h2>
          <p className="text-base font-body text-[rgba(255,255,255,0.65)] max-w-[520px] mx-auto mb-8">Aloita matkasi kohti parempaa oloa Kajaanissa.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika verkossa <ArrowRight className="w-4 h-4" /></a>
            <a href="tel:0505509799" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"><Phone className="w-4 h-4" />Soita 050 550 9799</a>
          </div>
        </div>
      </section>
    </div>
  );
}
