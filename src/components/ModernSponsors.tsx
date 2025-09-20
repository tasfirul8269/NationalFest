import React from "react";
import { motion } from "motion/react";
import { Building, Crown, Award, Handshake, Star, TrendingUp } from "lucide-react";

export function ModernSponsors() {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: Crown,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-600/10",
      sponsors: [
        { name: "Bangladesh Bank", logo: "BB", description: "Central Bank of Bangladesh" }
      ]
    },
    {
      tier: "Presenting Sponsors",
      icon: Star,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      sponsors: [
        { name: "Grameenphone", logo: "GP", description: "Leading Telecom Operator" },
        { name: "BRAC", logo: "BR", description: "Development Organization" }
      ]
    },
    {
      tier: "Supporting Sponsors",
      icon: Handshake,
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
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
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Our Partners</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Proud
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="mb-16"
            >
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center space-x-3 bg-gradient-to-r ${tier.bgGradient} backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3`}>
                  <div className={`w-8 h-8 bg-gradient-to-r ${tier.gradient} rounded-xl flex items-center justify-center`}>
                    <TierIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">{tier.tier}</span>
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <div className={`bg-gradient-to-br ${tier.bgGradient} backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300 h-full`}>
                      {/* Logo */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${tier.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-2xl">{sponsor.logo}</span>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-cyan-300 transition-colors">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{sponsor.description}</p>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
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
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join us in creating something extraordinary and gain unparalleled exposure to Bangladesh's most talented youth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BenefitIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {benefit.value}
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
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
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Become Our Partner</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Partner with Bangladesh's premier cultural festival and showcase your brand to hundreds of thousands 
              of engaged audiences while supporting the arts and culture sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300"
              >
                Partnership Proposal
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-2xl font-medium transition-all duration-300"
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