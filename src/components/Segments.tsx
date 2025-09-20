import React from "react";
import { Music, Mic, Camera, Palette, Trophy, Users } from "lucide-react";

const segments = [
  { name: "Music Performance", icon: Music, color: "from-purple-500 to-purple-600" },
  { name: "Vocal Competition", icon: Mic, color: "from-pink-500 to-purple-500" },
  { name: "Multimedia Projection", icon: Camera, color: "from-indigo-500 to-purple-500" },
  { name: "Art Exhibition", icon: Palette, color: "from-purple-600 to-pink-600" },
  { name: "Dance Performance", icon: Users, color: "from-pink-500 to-red-500" },
  { name: "Drama Competition", icon: Trophy, color: "from-purple-500 to-indigo-500" },
  { name: "Photography Contest", icon: Camera, color: "from-indigo-500 to-blue-500" },
  { name: "Creative Writing", icon: Palette, color: "from-purple-600 to-purple-700" },
  { name: "Debate Competition", icon: Mic, color: "from-pink-600 to-purple-600" },
  { name: "Cultural Quiz", icon: Trophy, color: "from-purple-500 to-pink-500" },
  { name: "Fashion Show", icon: Users, color: "from-pink-500 to-purple-600" },
  { name: "Instrumental Music", icon: Music, color: "from-indigo-600 to-purple-600" }
];

export function Segments() {
  return (
    <section id="segments" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Competition Segments
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Showcase your talent across various cultural categories and compete with the best from across the nation
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-800/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${segment.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-purple-300 transition-colors">
                  {segment.name}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}