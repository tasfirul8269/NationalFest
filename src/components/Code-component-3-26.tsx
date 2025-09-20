import React from "react";

import { motion } from "motion/react";
import { Building, Crown, Award, Handshake, Star, TrendingUp } from "lucide-react";

export function CleanSponsors() {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: Crown,
      sponsors: [
        { name: "Bangladesh Bank", logo: "BB", description: "Central Bank of Bangladesh" }
      ]
    },
    {
      tier: "Presenting Sponsors",
      icon: Star,
      sponsors: [
        { name: "Grameenphone", logo: "GP", description: "Leading Telecom Operator" },
        { name: "BRAC", logo: "BR", description: "Development Organization" }
      ]
    },
    {
      tier: "Supporting Sponsors",
      icon: Handshake,
      sponsors: [
        { name: "Square Group", logo: "SQ", description: "Diversified Conglomerate" },
        { name: "City Bank", logo: "CB", description: "Leading Private Bank" },
        { name: "Bashundhara Group", logo: "BG", description: "Business Conglomerate" },
        { name: "Robi Axiata", logo: "RA", description: "Telecom Services" }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      value: "500K+",
      description: "Expected reach across all platforms"
    },
    {
      icon: Building,
      title: "Media Coverage",
      value: "50+",
      description: "Media outlets and press coverage"
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
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-foreground" />
            <span className="text-muted-foreground text-sm font-medium">Our Partners</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proud Sponsors
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're grateful to our incredible sponsors who share our vision of celebrating 
            culture and empowering young talents across Bangladesh.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, tierIndex) => {
          const TierIcon = tier.icon;
          return (
            <motion.div
              key={tierIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3 bg-card border border-border rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                    <TierIcon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{tier.tier}</span>
                </div>
              </div>

              {/* Sponsors Grid */}
              <div className={`grid gap-6 ${
                tier.sponsors.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: sponsorIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 h-full">
                      {/* Logo */}
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <span className="text-lg font-bold">{sponsor.logo}</span>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-card-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Partnership Benefits</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Join us in creating something extraordinary and gain unparalleled exposure to Bangladesh's most talented youth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {partnershipBenefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BenefitIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {benefit.value}
                    </div>
                    <h4 className="text-card-foreground font-medium mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Become Our Partner</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Partner with Bangladesh's premier cultural festival and showcase your brand to hundreds of thousands 
              of engaged audiences while supporting the arts and culture sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Partnership Proposal
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-border text-foreground hover:bg-card px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}