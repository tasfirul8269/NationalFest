import { Award, Users, Globe, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About the Festival
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                The 3rd National Cultural Festa is a premier cultural celebration that brings together talented individuals from across Bangladesh. Organized by the Dhaka College Cultural Club, this festival serves as a platform for young artists, performers, and creatives to showcase their skills and celebrate our rich cultural heritage.
              </p>
              <p className="text-purple-200 text-lg leading-relaxed">
                Our festival promotes unity through diversity, encouraging participants to explore various forms of artistic expression while fostering connections between different cultural communities. Join us for an unforgettable celebration of creativity, talent, and cultural pride.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-800/30 to-purple-700/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <Award className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Excellence Awards</h3>
                <p className="text-purple-200 text-sm">Recognition for outstanding performances across all categories</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800/30 to-purple-700/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <Users className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">500+ Participants</h3>
                <p className="text-purple-200 text-sm">Artists from universities and colleges nationwide</p>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Festival Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">National Platform</h4>
                    <p className="text-purple-200 text-sm">Connect with artists and performers from all across Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Professional Judging</h4>
                    <p className="text-purple-200 text-sm">Evaluated by renowned artists and cultural experts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Full Day Event</h4>
                    <p className="text-purple-200 text-sm">Multiple stages and venues for continuous performances</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}