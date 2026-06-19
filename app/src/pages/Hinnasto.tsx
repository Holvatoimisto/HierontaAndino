import { Wallet, Clock, ArrowRight, Phone, Shield, Zap, HeartPulse } from "lucide-react";

const benefitCards = [
  { icon: Shield, title: "Ei piilokustannuksia", desc: "Hinta on aina sama kuin mitä näet täällä." },
  { icon: Zap, title: "5+ vuoden kokemus", desc: "Koulutettu hieroja vuodesta 2019." },
  { icon: HeartPulse, title: "Yksilöllinen hoito", desc: "Jokainen hoito räätälöidään sinulle." },
  { icon: Shield, title: "Ajanvaraus helposti", desc: "Varaa verkossa tai soittamalla." },
];

const paymentMethods = [
  { name: "Visa & Mastercard", desc: "Maksa vastaanotolla kortilla" },
  { name: "Smartum", desc: "Liikunta- ja hyvinvointietu (+2 €)" },
  { name: "ePassi", desc: "Liikunta- ja hyvinvointietu (+2 €)" },
];

const faqPricing = [
  { q: "Sisältääkö hinta alv:n?", a: "Kyllä, kaikki hinnat sisältävät arvonlisäveron (alv 25,5 %)." },
  { q: "Miten Smartum/ePassi -maksu toimii?", a: "Maksat vastaanotolla sovelluksella tai kortilla. Huomioithan 2 € palvelumaksun." },
  { q: "Voinko perua ajan?", a: "Kyllä, ilmainen peruutus viimeistään 24 tuntia ennen varattua aikaa." },
  { q: "Onko lahjakortteja saatavilla?", a: "Kyllä! Ota yhteyttä puhelimitse tai sähköpostitse." },
];

export default function Hinnasto() {
  return (
    <div>
      <section className="bg-[#1a1a1a] pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs font-body font-medium tracking-[0.12em] text-[#c1121f] uppercase mb-4">HINNASTO</p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.08] text-white mb-4">Hinnasto <em className="italic">Kajaanissa</em></h1>
          <p className="text-lg font-body text-[rgba(255,255,255,0.65)] max-w-[560px] mx-auto">Selkeät hinnat — ei piilomaksuja.</p>
        </div>
      </section>

      <section className="py-[80px] max-w-[800px] mx-auto px-6 text-center">
        <div className="bg-white rounded-2xl p-10 md:p-12 mb-8" style={{ border: "1px solid rgba(26,26,26,0.08)", boxShadow: "0 12px 48px rgba(26,26,26,0.08)" }}>
          <div className="w-16 h-16 rounded-full bg-[#f5f0ee] flex items-center justify-center mx-auto mb-6"><Clock className="w-8 h-8 text-[#1a1a1a]" /></div>
          <h2 className="font-body text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-2">Klassinen hieronta</h2>
          <p className="text-base font-body text-[#888] mb-6">30–90 min</p>
          <p className="font-body text-[60px] font-bold leading-none text-[#1a1a1a] mb-8">35–85 €</p>
          <div className="text-left max-w-[480px] mx-auto mb-8">
            {[
              { time: "30 min", price: "35 €" },
              { time: "45 min", price: "50 €" },
              { time: "60 min", price: "65 €" },
              { time: "75 min", price: "70 €" },
              { time: "90 min", price: "85 €" },
            ].map(({ time, price }) => (
              <div key={time} className="flex justify-between py-2 border-b border-[rgba(26,26,26,0.06)]">
                <span className="text-base font-body text-[#1a1a1a]">{time}</span>
                <span className="text-base font-body font-semibold text-[#1a1a1a]">{price}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-[rgba(26,26,26,0.08)] mb-8" />
          <p className="text-sm font-body text-[#888] mb-8">Smartumilla ja ePassilla maksettaessa lisätään 2 € palvelumaksu.</p>
          <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 py-4 rounded-full font-body font-medium text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
        </div>

        <div className="bg-white rounded-2xl p-10" style={{ border: "1px solid rgba(26,26,26,0.08)", boxShadow: "0 12px 48px rgba(26,26,26,0.08)" }}>
          <div className="w-16 h-16 rounded-full bg-[#f5f0ee] flex items-center justify-center mx-auto mb-6"><HeartPulse className="w-8 h-8 text-[#1a1a1a]" /></div>
          <h2 className="font-body text-2xl font-semibold text-[#1a1a1a] mb-2">Päähieronta</h2>
          <p className="text-base font-body text-[#888] mb-6">30 min</p>
          <p className="font-body text-[60px] font-bold leading-none text-[#1a1a1a] mb-8">35 €</p>
          <p className="text-sm font-body text-[#888] mb-8">Syvärentouttava päänahan, niska- ja hartiaseudun hieronta.</p>
          <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 py-4 rounded-full font-body font-medium text-[15px] bg-[#1a1a1a] text-white hover:bg-[#111] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>

      <section className="bg-[#f5f0ee] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Icon className="w-8 h-8 text-[#c1121f] mx-auto mb-4" /><h3 className="font-body text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3><p className="text-sm font-body text-[#888]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] max-w-[1200px] mx-auto px-6">
        <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-6 text-center">Maksutavat</h2>
        <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
          {paymentMethods.map(({ name, desc }) => (
            <div key={name} className="flex items-start gap-4 bg-white rounded-xl p-6" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
              <div className="w-10 h-10 rounded-full bg-[#f5f0ee] flex items-center justify-center shrink-0"><Wallet className="w-5 h-5 text-[#1a1a1a]" /></div>
              <div><p className="font-body font-semibold text-[#1a1a1a]">{name}</p><p className="text-sm font-body text-[#888]">{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-[80px]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-display text-[28px] font-light leading-[1.2] text-[#1a1a1a] mb-8 text-center">Usein kysyttyä hinnoittelusta</h2>
          <div className="flex flex-col gap-4">
            {faqPricing.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl p-6" style={{ boxShadow: "0 2px 12px rgba(26,26,26,0.06)" }}>
                <p className="font-body font-semibold text-[#1a1a1a] mb-2">{q}</p><p className="text-sm font-body text-[#888] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-[80px]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-[32px] font-light leading-[1.1] text-white mb-4">Varaa aikasi tänään</h2>
          <p className="text-base font-body text-[rgba(255,255,255,0.65)] mb-8">Yksi hoitokerta voi olla alku matkallesi kohti parempaa oloa.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-[15px] bg-[#c1121f] text-white hover:bg-[#a00e18] transition-colors">Varaa aika <ArrowRight className="w-4 h-4" /></a>
            <a href="tel:0505509799" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-[15px] border border-white text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"><Phone className="w-4 h-4" />050 550 9799</a>
          </div>
        </div>
      </section>
    </div>
  );
}
