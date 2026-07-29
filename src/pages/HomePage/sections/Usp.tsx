import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function UspSection() {
  const usps = [
    {
      title: "Ručně vyráběné",
      description: "Každá makronka vzniká ručně s důrazem na detail.",
    },
    {
      title: "Na míru vašemu přání",
      description: "Barvy, motivy a tematické provedení podle příležitosti.",
    },
    {
      title: "Pro chvíle, na kterých záleží",
      description: "Oslavy, svatby, firemní akce i osobní dárky.",
    },
    {
      title: "Z Kutné Hory",
      description: "Lokální cukrářská tvorba pro Kutnou Horu a okolí.",
    },
  ];

  return (
    <div data-webild-section="usp" id="usp">
      <section className="py-16 md:py-24 bg-background">
        <div className="w-content-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {usps.map((usp, index) => (
              <ScrollReveal key={index} variant="fade-blur" delay={index * 0.1}>
                <div className="flex flex-col items-start gap-3 p-6 card rounded h-full">
                  <div className="p-2 rounded-full bg-primary-cta/10 text-primary-cta">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{usp.title}</h3>
                  <p className="text-accent leading-relaxed">{usp.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}