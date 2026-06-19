import { MapPin, Phone, Mail, Clock, ArrowRight, Train, Car, Accessibility, CreditCard } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Osoite", value: "Onnelantie 1, 87100 Kajaani", href: "https://maps.google.com/?q=Onnelantie+1,+87100+Kajaani", external: true },
  { icon: Phone, label: "Puhelin", value: "050 550 9799", href: "tel:0505509799" },
  { icon: Mail, label: "Sähköposti", value: "andy@hierontaandino.fi", href: "mailto:andy@hierontaandino.fi" },
];

const hours = [
  { day: "Maanantai", time: "10:00 – 18:00" },
  { day: "Tiistai", time: "10:00 – 18:00" },
  { day: "Keskiviikko", time: "10:00 – 18:00" },
  { day: "Torstai", time: "10:00 – 18:00" },
  { day: "Perjantai", time: "10:00 – 18:00" },
  { day: "Lauantai", time: "Kesäaikaan 11:00 – 14:00" },
  { day: "Sunnuntai", time: "Suljettu" },
];

const transport = [
  { icon: Train, title: "Julkisella liikenteellä", desc: "Kajaanin keskustasta lyhyt kävelymatka. Paikallisliikenteen bussipysäkit lähistöllä." },
  { icon: Car, title: "Autolla", desc: "Onnelantie 1 sijaitsee Kajaanin keskustan tuntumassa. Pysäköintitilaa löytyy läheltä." },
  { icon: Accessibility, title: "Esteettömyys", desc: "Ota yhteyttä etukäteen, jos tarvitset esteettömyystietoa — autan mielelläni." },
];

export default function Yhteystiedot() {
  return (
    <div>
      <section className="bg-[#1a1a1a] pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#c1121f] uppercase mb-4">YHTEYSTIEDOT</p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.08] text-white mb-6">Ota <em className="italic">yhteyttä</em></h1>
          <p className="text-lg text-[rgba(255,255,255,0.65)] max-w-[560px] mx-auto">Olen täällä sinua varten. Soita, lähetä sähköpostia tai tule käymään Kajaanissa.</p>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
          <div>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-8">Yhteystiedot</h2>
            <div className="flex flex-col gap-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href, external }) => (
                <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                  <div className="w-12 h-12 rounded-full bg-[#f5f0ee] flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-[#c1121f]" /></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7B99] mb-1">{label}</p>
                    <p className="text-base font-medium text-[#1a1a1a] group-hover:text-[#c1121f] transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <h3 className="font-display text-xl text-[#1a1a1a] mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-[#c1121f]" />Aukioloajat</h3>
            <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              {hours.map(({ day, time }, i) => (
                <div key={day} className={`flex items-center justify-between px-5 py-3 ${i !== hours.length - 1 ? "border-b border-[rgba(26,26,26,0.06)]" : ""}`}>
                  <span className="text-sm text-[#1A1A1A]">{day}</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-8">Sijainti</h2>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: "0 12px 48px rgba(26,26,26,0.1)" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.5!2d27.728!3d64.228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDEzJzQwLjgiTiAyN8KwNDMnNDAuOCJF!5e0!3m2!1sfi!2sfi!4v1" width="100%" height="320" style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hieronta ja Kehonhuolto Andino - Kajaani" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0ee] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] leading-[1.2] text-[#1a1a1a] mb-8 text-center">Miten pääset perille</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {transport.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Icon className="w-10 h-10 text-[#c1121f] mx-auto mb-4" /><h3 className="font-display text-lg text-[#1a1a1a] mb-2">{title}</h3><p className="text-sm text-[#6B7B99] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] max-w-[800px] mx-auto px-6 text-center">
        <CreditCard className="w-10 h-10 text-[#c1121f] mx-auto mb-4" />
        <h2 className="font-display text-[28px] leading-[1.2] text-[#1a1a1a] mb-4">Maksutavat</h2>
        <p className="text-base text-[#6B7B99] max-w-[480px] mx-auto mb-8">Käteismaksun lisäksi käyvät pankki- ja luottokortit sekä liikuntaedut. Smartumilla ja ePassilla maksettaessa hintaan lisätään 2 € palvelumaksu.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {["Käteinen", "Visa", "Mastercard", "Smartum (+2 €)", "ePassi (+2 €)"].map((m) => <span key={m} className="px-5 py-2.5 rounded-full text-sm font-medium text-[#1a1a1a] bg-[#f5f0ee]">{m}</span>)}
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-[80px]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-[32px] font-light leading-[1.1] text-white mb-4">Varaa aikasi tänään</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] mb-8">Yksi soitto tai muutama klikkaus — ja olet matkalla kohti parempaa oloa.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e1a] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
            <a href="tel:0505509799" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"><Phone className="w-4 h-4" />050 550 9799</a>
          </div>
        </div>
      </section>
    </div>
  );
}
