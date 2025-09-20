import React from "react";
import { motion } from "motion/react";
import { Music, Mic, Camera, Palette, Users, Trophy, Pen, Theater, Guitar, Lightbulb, Gamepad2, Tv, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import segmentsData from "../data/segments.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Mic: Mic,
  Users: Users,
  Guitar: Guitar,
  Theater: Theater,
  Palette: Palette,
  Camera: Camera,
  Pen: Pen,
  Lightbulb: Lightbulb,
  Gamepad2: Gamepad2,
  Tv: Tv,
  Trophy: Trophy
};

interface CleanSegmentsProps {
  onSegmentClick?: (segment: any) => void;
}

export function CleanSegments({ onSegmentClick }: CleanSegmentsProps) {
  const segments = segmentsData.segments;

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
            const IconComponent = iconMap[segment.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => onSegmentClick?.(segment)}
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-card-foreground font-semibold group-hover:text-primary transition-colors">
                      {segment.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {segment.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-semibold">{segment.price} BDT</span>
                      </div>
                      
                      <div className="text-xs font-medium text-primary">
                        OPEN
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{segment.duration}</span>
                      <span>{segment.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Segments
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}