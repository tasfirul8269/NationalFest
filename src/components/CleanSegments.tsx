import { motion } from "motion/react";
import { Music, Mic, Camera, Palette, Users, Trophy, Pen, Theater, Guitar, Lightbulb, Gamepad2, Tv, DollarSign } from "lucide-react";

const segments = [
  { 
    name: "Vocal Performance", 
    icon: Mic, 
    description: "Solo & group singing competitions",
    participants: "120+"
  },
  { 
    name: "Dance Performance", 
    icon: Users, 
    description: "Traditional & contemporary dance",
    participants: "85+"
  },
  { 
    name: "Instrumental Music", 
    icon: Guitar, 
    description: "Orchestra & solo instruments",
    participants: "95+"
  },
  { 
    name: "Drama Competition", 
    icon: Theater, 
    description: "Stage plays & monologues",
    participants: "60+"
  },
  { 
    name: "Art Exhibition", 
    icon: Palette, 
    description: "Paintings, sculptures & crafts",
    participants: "75+"
  },
  { 
    name: "Photography", 
    icon: Camera, 
    description: "Digital & analog photography",
    participants: "110+"
  },
  { 
    name: "Creative Writing", 
    icon: Pen, 
    description: "Poetry, stories & essays",
    participants: "90+"
  },
  { 
    name: "Quiz Competition", 
    icon: Lightbulb, 
    description: "General knowledge & culture",
    participants: "150+"
  },
  { 
    name: "Debate Tournament", 
    icon: Mic, 
    description: "English & Bangla debates",
    participants: "80+"
  },
  { 
    name: "Gaming Championship", 
    icon: Gamepad2, 
    description: "E-sports & board games",
    participants: "200+"
  },
  { 
    name: "Film Making", 
    icon: Tv, 
    description: "Short films & documentaries",
    participants: "45+"
  },
  { 
    name: "Fashion Show", 
    icon: Trophy, 
    description: "Traditional & contemporary wear",
    participants: "70+"
  }
];

export function CleanSegments() {
  return (
    <section id="segments" className="py-24 ">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center space-x-2 bg-muted border border-border rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4 text-foreground" />
            <span className="text-muted-foreground text-sm font-medium">Competition Categories</span>
          </div> */}
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
           Segments
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  {/* <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div> */}
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-card-foreground font-semibold group-hover:text-primary transition-colors">
                      {segment.name}
                    </h3>
                    
                    {/* <p className="text-muted-foreground text-sm leading-relaxed">
                      {segment.description}
                    </p>
                     */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-muted-foreground font-semibold text-l">100 BDT</span>
                      </div>
                      
                      <div className="text-xs font-medium text-primary">
                        OPEN
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}