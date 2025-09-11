import { motion } from "motion/react";
import { Music, Mic, Camera, Palette, Users, Trophy, Pen, Theater, Guitar, Lightbulb, Gamepad2, Tv } from "lucide-react";

const segments = [
  { 
    name: "Vocal Performance", 
    icon: Mic, 
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/10 to-rose-600/10",
    description: "Solo & group singing competitions",
    participants: "120+"
  },
  { 
    name: "Dance Performance", 
    icon: Users, 
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-500/10 to-indigo-600/10",
    description: "Traditional & contemporary dance",
    participants: "85+"
  },
  { 
    name: "Instrumental Music", 
    icon: Guitar, 
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
    description: "Orchestra & solo instruments",
    participants: "95+"
  },
  { 
    name: "Drama Competition", 
    icon: Theater, 
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10",
    description: "Stage plays & monologues",
    participants: "60+"
  },
  { 
    name: "Art Exhibition", 
    icon: Palette, 
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10",
    description: "Paintings, sculptures & crafts",
    participants: "75+"
  },
  { 
    name: "Photography", 
    icon: Camera, 
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-600/10",
    description: "Digital & analog photography",
    participants: "110+"
  },
  { 
    name: "Creative Writing", 
    icon: Pen, 
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-500/10 to-purple-600/10",
    description: "Poetry, stories & essays",
    participants: "90+"
  },
  { 
    name: "Quiz Competition", 
    icon: Lightbulb, 
    gradient: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-500/10 to-orange-600/10",
    description: "General knowledge & culture",
    participants: "150+"
  },
  { 
    name: "Debate Tournament", 
    icon: Mic, 
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/10",
    description: "English & Bangla debates",
    participants: "80+"
  },
  { 
    name: "Gaming Championship", 
    icon: Gamepad2, 
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
    description: "E-sports & board games",
    participants: "200+"
  },
  { 
    name: "Film Making", 
    icon: Tv, 
    gradient: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-500/10 to-gray-600/10",
    description: "Short films & documentaries",
    participants: "45+"
  },
  { 
    name: "Fashion Show", 
    icon: Trophy, 
    gradient: "from-pink-500 to-purple-600",
    bgGradient: "from-pink-500/10 to-purple-600/10",
    description: "Traditional & contemporary wear",
    participants: "70+"
  }
];

export function ModernSegments() {
  return (
    <section id="segments" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Competition Categories</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Showcase Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Talent
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Compete across 12 diverse categories designed to celebrate every form of artistic expression. 
            From traditional arts to modern digital creativity.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${segment.bgGradient} backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-full transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${segment.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                      {segment.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-xs">{segment.participants}</span>
                      </div>
                      
                      <div className={`text-xs font-medium bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}>
                        OPEN
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Compete?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Registration is now open for all categories. Choose your segment and showcase your talent 
              on Bangladesh's biggest cultural platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300"
              >
                Register Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-2xl font-medium transition-all duration-300"
              >
                Download Rules
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}