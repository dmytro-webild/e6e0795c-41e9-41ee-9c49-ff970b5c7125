import { Gift, PartyPopper, Heart, Briefcase, Sparkles, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

export default function ThematicMacaronsSection() {
  const categories = [
    {
      icon: PartyPopper,
      title: "Dětské oslavy",
      description: "Hravé barvy a motivy pro ty nejmenší.",
    },
    {
      icon: Gift,
      title: "Narozeniny",
      description: "Sladký dárek, který potěší každého oslavence.",
    },
    {
      icon: Heart,
      title: "Svatby",
      description: "Elegantní makronky ladící s vaší svatební výzdobou.",
    },
    {
      icon: Briefcase,
      title: "Firemní akce",
      description: "Makronky v barvách vaší značky nebo s logem.",
    },
    {
      icon: Sparkles,
      title: "Tematické oslavy",
      description: "Speciální designy pro Halloween, Vánoce či Velikonoce.",
    },
    {
      icon: Star,
      title: "Originál",
      description: "Máte vlastní nápad? Rádi ho pro vás zrealizujeme.",
    },
  ];

  return (
    <div data-webild-section="thematic-macarons" id="thematic-macarons">
      <section className="py-20 md:py-32 bg-background">
        <div className="w-content-width mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="px-3 py-1 mb-4 text-sm card rounded w-fit">
              <p>Na míru</p>
            </div>
            <TextAnimation
              text="Makronky podle vašich představ."
              variant="fade-blur"
              gradientText={false}
              tag="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            />
            <TextAnimation
              text="Makronky lze přizpůsobit pro různé příležitosti, témata, barvy a události. Vytvoříme pro vás sladký originál, který dokonale doplní vaši oslavu."
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="text-lg md:text-xl text-accent max-w-3xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {categories.map((category, index) => (
              <ScrollReveal key={index} variant="fade-blur" delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-8 card rounded h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-4 rounded-full bg-primary-cta/10 text-primary-cta mb-6">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{category.title}</h3>
                  <p className="text-accent">{category.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="flex justify-center">
             <Button text="Poptat makronky na míru" href="#contact" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}