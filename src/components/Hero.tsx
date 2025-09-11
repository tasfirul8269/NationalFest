import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import exampleImage from 'figma:asset/f1affd5fb575fb85f5eecd16cdb560daacf7e739.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-2">Registration Open</h3>
              <p className="text-purple-200 mb-2">From August 23 to August 31</p>
              <div className="flex items-center text-purple-200">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Venue: Dhaka College, Dhaka</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-purple-300 text-lg">2025</div>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                3rd National
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cultural
                </span>
                <br />
                <span className="text-5xl md:text-6xl">FESTA</span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <Calendar className="w-5 h-5" />
              <span className="text-xl">Date: September 5, 2025</span>
            </div>
            
            <p className="text-purple-200 text-lg leading-relaxed">
              Presented by<br />
              <span className="text-white font-semibold">Dhaka College Cultural Club</span>
            </p>
            
            <div className="flex space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - Featured Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
            <img 
              src={exampleImage} 
              alt="Cultural Festival" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}