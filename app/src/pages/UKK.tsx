import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, ArrowRight, HelpCircle, Stethoscope, Calendar, CreditCard, HeartPulse } from "lucide-react";

const faqCategories = [
  {
    icon: Stethoscope,
    title: "Hoidot",
    questions: [
      { q: "Mikä hierontamuoto minulle sopii?", a: "Valitsemme hierontamuodon aina asiakkaan vaivan ja toiveiden mukaisesti ensimmäisellä käyntikerralla. Voit myös valita suoraan haluamasi hoidon ajanvarauksen yhteydessä." },
      { q: "Kuinka monta hoitokertaa tarvitsen?", a: "Akuutit vaivat voivat helpottaa jo 1–3 hoitokerralla. Kroonisiin ja pitkäkestoisiin oireisiin suositellaan yleensä 3–6 hoitokertaa säännöllisellä väliajalla." },
      { q: "Sattuuko hieronta?", a: "Hierontani on suunniteltu olevan tehokasta mutta miellyttävää. Kerro aina, jos tunnet epämukavuutta — voin säätää tekniikkaa ja painetta." },
      { q: "Mikä on ero klassisen hieronnan ja urheiluhieronnan välillä?", a: "Klassinen hieronta on rauhallisempaa ja kokonaisvaltaisempaa kehon rentouttamista. Urheiluhieronta on syvempää ja kohdistetumpaa, suunniteltu aktiiviliikkujille ja urheilijoille." },
      { q: "Voinko yhdistää eri hierontamuotoja?", a: "Ehdottomasti. Voimme yhdistää esimerkiksi klassisen hieronnan ja purentalihashieronnan saman käynnin aikana." },
    ],
  },
  {
    icon: Calendar,
    title: "Ajanvaraus ja käynti",
    questions: [
      { q: "Miten voin varata ajan?", a: "Voit varata ajan helposti Vello-nettipalvelun kautta osoitteessa vello.fi/hierontajakehonhuoltoandino/ tai soittamalla numeroon 050 550 9799." },
      { q: "Kuinka pitkiä ajat ovat?", a: "Tarjoan hierontaa 30, 45, 60, 75 ja 90 minuutin ajanjaksoilla. Intialainen päähieronta kestää 30 minuuttia. Valitse sinulle sopiva kesto ajanvarauksessa." },
      { q: "Pitääkö minulla olla lääkärin lähete?", a: "Ei tarvitse. Voit varata ajan suoraan ilman lähetettä. Kela-korvaus ei kuitenkaan ole mahdollinen, sillä olen koulutettu hieroja." },
      { q: "Mitä minun pitää ottaa mukaan?", a: "Pukeudu mukaviin, liikkumista helpottaviin vaatteisiin. Hieronta voidaan tehdä joko suoraan iholle tai vaatteiden päältä toiveidesi mukaan." },
      { q: "Voinko tulla ilman diagnoosia?", a: "Kyllä. Monet asiakkaistani tulevat ilman diagnoosia, ja minä autan selvittämään tilanteen ja suunnittelemaan hoidon." },
      { q: "Kuinka pitkän välin pitää olla edellisestä hoidosta?", a: "Akuuteissa vaivoissa 3–7 päivän väli. Kroonisiin oireisiin riittää 1–2 viikon väli. Kuuntelen aina kehoasi ja annan suosituksen." },
    ],
  },
  {
    icon: CreditCard,
    title: "Maksut ja korvaukset",
    questions: [
      { q: "Mikä on hieronnan hinta?", a: "Hieronnan hinta riippuu kestosta: 30 min 35 €, 45 min 50 €, 60 min 65 €, 75 min 70 €, 90 min 85 €. Intialainen päähieronta 30 min 35 €." },
      { q: "Sisältyykö hintaan kaikki hierontamuodot?", a: "Kyllä. Hinta määräytyy hoidon keston mukaan, ei hierontatekniikan mukaan. Valitse haluamasi tekniikka tai anna minun ehdottaa sopivaa." },
      { q: "Maksutavatko teillä käyvät?", a: "Käteinen, Visa, Mastercard, Smartum ja ePassi. Huomioithan, että Smartumilla ja ePassilla maksettaessa hintaan lisätään 2 € palvelumaksu." },
      { q: "Saanko Kela-korvausta?", a: "Valitettavasti koulutetun hierojan palvelut eivät ole Kela-korvattavia. Hoidon voi maksaa suoraan tai yrityksen liikuntaeduilla." },
      { q: "Mitä jos en pääsekään paikalle?", a: "Peruthan ajan viimeistään 24 tuntia ennen varattua aikaa. Myöhemmistä peruutuksista tai peruuttamattomasta poissaolosta veloitan hoidon hinnan." },
    ],
  },
  {
    icon: HeartPulse,
    title: "Yleistä",
    questions: [
      { q: "Kuinka kauan olette toimineet?", a: "Hieronta ja Kehonhuolto Andino on toiminut Kajaanissa vuodesta 2021 lähtien — jo yli 5 vuotta." },
      { q: "Missä sijaitsette?", a: "Osoitteessa Onnelantie 1, 87100 Kajaani. Kajaanin keskustan tuntumassa, hyvät kulkuyhteydet." },
      { q: "Milloin olette auki?", a: "Maanantaista perjantaihin klo 10:00 – 18:00. Kesäaikaan avoinna myös lauantaisin klo 11:00 – 14:00. Tarkista Vello-ajanvarauksesta vapaat ajat." },
      { q: "Hoidatteko lapsia?", a: "Kyllä, hieron myös lapsia ikä- ja kehitystason mukaisesti. Alle 16-vuotiaat vain huoltajan suostumuksella." },
      { q: "Voinko tulla raskaana ollessa?", a: "Kyllä, klassinen hieronta sopii erinomaisesti raskausaikana. Ilmoitathan raskaudestasi etukäteen, jotta voin räätälöidä hoidon turvalliseksi." },
      { q: "Onko teillä parkkipaikkoja?", a: "Kyllä, kohteemme läheisyydessä on pysäköintitilaa." },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-medium text-[#1a1a1a]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#1a1a1a] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5"><p className="text-sm leading-relaxed text-[#6B7B99]">{a}</p></div>}
    </div>
  );
}

export default function UKK() {
  return (
    <div>
      <section className="bg-[#1a1a1a] pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">USEIN KYSYTTYÄ</p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.08] text-white mb-4">Vastauksia <em className="italic">yleisimpiin</em> kysymyksiin</h1>
          <p className="text-lg text-[rgba(255,255,255,0.65)] max-w-[560px] mx-auto">Löydä vastaus kysymykseesi tai ota suoraan yhteyttä — autan mielelläni.</p>
        </div>
      </section>

      <section className="py-[80px] max-w-[900px] mx-auto px-6">
        {faqCategories.map(({ icon: Icon, title, questions }, catIdx) => (
          <div key={title} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f5f0ee] flex items-center justify-center"><Icon className="w-5 h-5 text-[#c1121f]" /></div>
              <h2 className="font-body text-2xl font-semibold text-[#1a1a1a]">{title}</h2>
            </div>
            <div className="flex flex-col gap-3">
              {questions.map(({ q, a }, qIdx) => <AccordionItem key={`${catIdx}-${qIdx}`} q={q} a={a} />)}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#f5f0ee] py-[80px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <HelpCircle className="w-12 h-12 text-[#c1121f] mx-auto mb-6" />
          <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-4">Etkö löytänyt vastausta?</h2>
          <p className="text-base text-[#6B7B99] max-w-[480px] mx-auto mb-8">Soita minulle tai lähetä sähköpostia. Vastaan mielelläni kaikkiin kysymyksiisi.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0505509799" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] bg-[#1a1a1a] text-white hover:bg-[#000] transition-colors"><Phone className="w-4 h-4" />Soita 050 550 9799</a>
            <Link to="/yhteystiedot" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors">Yhteystiedot <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
