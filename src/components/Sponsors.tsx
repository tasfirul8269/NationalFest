
import React from "react";
export function Sponsors() {
  const sponsors = [
    { name: "Bangladesh Bank", category: "Title Sponsor", logo: "BB" },
    { name: "Grameenphone", category: "Presenting Sponsor", logo: "GP" },
    { name: "BRAC", category: "Supporting Sponsor", logo: "BR" },
    { name: "Square Group", category: "Supporting Sponsor", logo: "SQ" },
    { name: "City Bank", category: "Banking Partner", logo: "CB" },
    { name: "Bashundhara Group", category: "Media Partner", logo: "BG" },
    { name: "Robi Axiata", category: "Telecom Partner", logo: "RA" },
    { name: "Dutch-Bangla Bank", category: "Financial Partner", logo: "DB" }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            We're grateful to our sponsors who make this cultural celebration possible
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{sponsor.logo}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{sponsor.name}</h3>
              <p className="text-purple-300 text-sm">{sponsor.category}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800/30 to-purple-700/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-purple-200 text-lg mb-6">
              Join us in celebrating culture and creativity. Partner with us to support the next generation of artists and performers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">500K+</div>
                <div className="text-purple-200">Expected Reach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-purple-200">Media Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-purple-200">Brand Visibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}