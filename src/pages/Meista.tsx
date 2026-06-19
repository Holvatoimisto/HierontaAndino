import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Award, Clock, HeartPulse, Shield, Users } from "lucide-react";

const milestones = [
  { year: "2021", text: "Andy Nwannah perustaa Hieronta ja Kehonhuolto Andinon Kajaaniin — intohimoisena missiona auttaa paikallisia kipujen ja jännitysten kanssa" },
  { year: "2022", text: "Asiakaskunta kasvaa vakiintuneeksi — moni asiakas tulee nyt suosittelun kautta" },
  { year: "2023", text: "Urheiluhieronta lisätään palvelutarjontaan — aktiiviliikkujat ja urheilijat löytävät Andinon" },
  { year: "2024", text: "Purentalihashieronta (TMD) otetaan osaksi erikoisosaamista — apua leukaperävaivoihin" },
  { year: "2025", text: "Yli 1000 tyytyväistä asiakasta ja yli 40 viiden tähden Google-arvostelua" },
  { year: "2026", text: "5+ vuotta hierontaa Kajaanissa — edelleen samalla intohimolla ja ammattitaidolla" },
];

const values = [
  { icon: HeartPulse, title: "Kokonaisvaltainen lähestyminen", desc: "Tutkin kehoa kokonaisuutena. Kipu yhdessä kohdassa voi johtua jännityksestä toisella alueella. Hoidan aina syytä, oiretta." },
  { icon: Shield, title: "Rehellisyys", desc: "Kerron aina rehellisesti, voinko auttaa. Jos vaiva vaatisi toisen ammattilaisen arviota, ohjaan eteenpäin." },
  { icon: Users, title: "Yksilöllisyys", desc: "Jokainen asiakas on yksilö. Hieronnan tekniikka ja intensiteetti räätälöidään aina juuri sinun tarpeisiisi." },
  { icon: Award, title: "Ammattitaito", desc: "5+ vuoden kokemus ja jatkuva kouluttautuminen takaavat ajan tasalla olevan, turvallisen hoidon." },
];

const approachSteps = [
  { num: "01", title: "Kuuntelu", desc: "Aloitan aina kuuntelemalla. Kerro vaivastasi vapaasti — jokainen yksityiskohta voi olla tärkeä hoidon suunnittelussa." },
  { num: "02", title: "Alkututkiminen", desc: "Tutkin kehon tilaa — lihaskireydet, liikkuvuus, asento ja mahdolliset jännityskohdat." },
  { num: "03", title: "Syyn selvittäminen", desc: "Etsin oireiden perimmäisen syyn. Kipu voi johtua yllättävistäkin yhteyksistä kehon eri osien välillä." },
  { num: "04", title: "Hoidon toteutus", desc: "Räätälöin hierontamenetelmät juuri sinulle — klassista hierontaa, urheiluhierontaa, purentalihashierontaa tai päähierontaa." },
  { num: "05", title: "Kotiohjeet ja seuranta", desc: "Annan tarvittaessa venyttely- ja liikuntaohjeita sekä seuraan edistymistäsi. Olen tukenasi koko matkan ajan." },
];

const testimonials = [
  { text: "Sain vihdoin apua pitkittyneeseen niskakipuuni, johon muualta ei löytynyt ratkaisua. Andyn lähestymistapa on ammattimainen ja tuloksellinen.", author: "Maria L.", location: "Kajaani" },
  { text: "Olen käynyt Andilla säännöllisesti vuosien varrella. Aina yhtä ammattimaista ja ystävällistä palvelua. Suosittelen lämpimästi kaikille Kajaanissa!", author: "Tomi K.", location: "Kajaani" },
  { text: "Selkävaivani helpottivat jo ensimmäisen hoitokerran jälkeen. 5+ vuoden kokemus todella näkyy käsissä.", author: "Anu R.", location: "Kajaani" },
  { text: "Asiantuntevaa, ystävällistä ja yksilöllistä hierontaa. Vello-ajanvaraus toimii helposti ja joustavasti.", author: "Pekka S.", location: "Sotkamo" },
  { text: "Olkapäävaivani olivat vaivanneet minua pitkään. Andilla sain oikean hoidon ja ohjeistuksen. Kiitos!", author: "Sari M.", location: "Kajaani" },
];

export default function Meista() {
  return (
    <div>
      <section className="bg-[#1a1a1a] pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.14em] text-[#c1121f] uppercase mb-4">MEISTÄ</p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.08] text-white mb-6">5+ vuotta <em className="italic">asiantuntevaa</em> hierontaa</h1>
          <p className="text-lg text-[rgba(255,255,255,0.65)] max-w-[640px] mx-auto">Hieronta ja Kehonhuolto Andino on kajaanilainen hieronta-alan ammattilainen, joka auttaa sinua pääsemään eroon kivuista ja jännityksistä.</p>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div><img src="/images/andino-tarina.jpg" alt="Andy Nwannah — Hieronta ja Kehonhuolto Andino" className="rounded-2xl w-full h-[400px] object-cover" style={{ boxShadow: "0 20px 60px rgba(26,26,26,0.1)" }} /></div>
          <div>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6">Tarina, joka alkoi Kajaanista</h2>
            <p className="text-base leading-relaxed text-[#49546A] mb-4">Hieronta ja Kehonhuolto Andino perustettiin Kajaaniin yli 5 vuotta sitten. Alusta alkaen tavoitteenamme on ollut tarjota asiantuntevaa, yksilöllistä hierontaa ja kehonhuoltoa.</p>
            <p className="text-base leading-relaxed text-[#49546A] mb-4">Vuosien varrella olemme kehittäneet palvelutarjontaamme asiakkaidemme tarpeiden mukaisesti. Palveluihimme kuuluvat klassinen hieronta, urheiluhieronta, purentalihashieronta (TMD) ja intialainen päähieronta.</p>
            <p className="text-base leading-relaxed text-[#49546A]">Erityisosaamistamme on selvittää ja hoitaa pitkäkestoisia lihaskireyksiä, niska- ja selkävaivoja sekä stressiperäisiä jännitystiloja. Monet asiakkaamme tulevat pitkäkestoisten vaivojen kanssa, joihin muualta ei ole löytynyt apua.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0ee] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] leading-[1.2] text-[#1a1a1a] mb-10 text-center">Arvomme</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Icon className="w-10 h-10 text-[#c1121f] mx-auto mb-4" /><h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3><p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <h2 className="font-display text-[28px] leading-[1.2] text-[#1a1a1a] mb-10 text-center">Meidän lähestymistapamme</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachSteps.map(({ num, title, desc }) => (
            <div key={num} className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              <span className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white mb-4">{num}</span>
              <h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3><p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-[80px]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-display text-[28px] leading-[1.2] text-white mb-10 text-center">Merkkipaalumme</h2>
          <div className="flex flex-col gap-6">
            {milestones.map(({ year, text }, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="w-16 shrink-0 text-right font-display text-xl text-[#c1121f] font-semibold">{year}</span>
                <div className="w-3 h-3 rounded-full bg-[#c1121f] mt-2 shrink-0" />
                <p className="text-base text-[rgba(255,255,255,0.8)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ icon: Clock, num: "5+", label: "Vuotta kokemusta" }, { icon: HeartPulse, num: "4", label: "Hoitomuotoa" }, { icon: Users, num: "1000+", label: "Hoidettua asiakasta" }, { icon: Star, num: "4.9", label: "Google-arvostelu" }].map(({ icon: Icon, num, label }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              <Icon className="w-8 h-8 text-[#c1121f] mx-auto mb-3" /><p className="font-body text-3xl font-bold text-[#1a1a1a] mb-1">{num}</p><p className="text-sm text-[#6B7B99]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-10">Asiakkaamme kertovat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-left" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#c1121f] fill-[#c1121f]" />)}</div>
                <p className="text-[15px] leading-relaxed text-[#1A1A1A] mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-body font-semibold text-[#1a1a1a]">{t.author}</p><p className="text-xs text-[#6B7B99]">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-[80px]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-[32px] font-light leading-[1.1] text-white mb-4">Tule tutustumaan <em className="italic">henkilökohtaisesti</em></h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] mb-8">Olen täällä sinua varten. Varaa aika ja koe eron, jonka koulutettu hieroja tekee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e1a] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
            <Link to="/yhteystiedot" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"><MapPin className="w-4 h-4" />Yhteystiedot</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
