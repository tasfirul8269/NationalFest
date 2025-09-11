import { motion } from "motion/react";
import { Building, Crown, Award, TrendingUp, ArrowRight } from "lucide-react";

export function CleanSponsors() {
  const titleSponsor = { name: "Bangladesh Bank", logo: "BB", description: "Central Bank of Bangladesh" };
  
  const presentingSponsors = [
    { name: "Grameenphone", logo: "GP", description: "Leading Telecom Operator" },
    { name: "BRAC", logo: "BR", description: "Development Organization" }
  ];

  const supportingSponsors = [
    { name: "Square Group", logo: "SQ", description: "Diversified Conglomerate" },
    { name: "City Bank", logo: "CB", description: "Leading Private Bank" },
    { name: "Bashundhara Group", logo: "BG", description: "Business Conglomerate" },
    { name: "Robi Axiata", logo: "RA", description: "Telecom Services" }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      value: "500K+",
      description: "Expected reach across platforms"
    },
    {
      icon: Building,
      title: "Media Coverage", 
      value: "50+",
      description: "Media outlets coverage"
    },
    {
      icon: Award,
      title: "Recognition",
      value: "National",
      description: "Platform for brand association"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proud Sponsors
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're grateful to our incredible sponsors who share our vision of celebrating 
            culture and empowering young talents across Bangladesh.
          </p>
        </motion.div>

        {/* Main Sponsors Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            {/* Left Presenting Sponsor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-foreground">{presentingSponsors[0].logo}</span>
                </div>
                <h3 className="text-card-foreground font-semibold mb-2">{presentingSponsors[0].name}</h3>
                <p className="text-muted-foreground text-sm">{presentingSponsors[0].description}</p>
                <div className="mt-3">
                  <span className="text-xs text-primary font-medium">Presenting Sponsor</span>
                </div>
              </div>
            </motion.div>

            {/* Center Title Sponsor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card border-2 border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 relative">
                {/* Crown decoration */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Crown className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-foreground">{titleSponsor.logo}</span>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{titleSponsor.name}</h3>
                <p className="text-muted-foreground mb-4">{titleSponsor.description}</p>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4" />
                  <span className="text-sm font-medium">Title Sponsor</span>
                </div>
              </div>
            </motion.div>

            {/* Right Presenting Sponsor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-foreground">{presentingSponsors[1].logo}</span>
                </div>
                <h3 className="text-card-foreground font-semibold mb-2">{presentingSponsors[1].name}</h3>
                <p className="text-muted-foreground text-sm">{presentingSponsors[1].description}</p>
                <div className="mt-3">
                  <span className="text-xs text-primary font-medium">Presenting Sponsor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Supporting Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-muted-foreground text-sm">Supporting Partners</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {supportingSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-foreground">{sponsor.logo}</span>
                </div>
                <h3 className="text-card-foreground font-medium text-sm mb-1">{sponsor.name}</h3>
                <p className="text-muted-foreground text-xs">{sponsor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      

       
      </div>
    </section>
  );
}