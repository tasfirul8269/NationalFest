import React from "react";

import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Eye } from "lucide-react";

export function CleanGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1639682687226-40cd13466ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3NTc2MjA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Stage Performance with Modern Lighting",
      category: "music",
      type: "image",
      title: "Music Night 2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1614442848457-36ddcbb0876d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBwZXJmb3JtaW5nJTIwYXJ0c3xlbnwxfHx8fDE3NTc2MjA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "University Students Performing Arts",
      category: "dance",
      type: "video",
      title: "Contemporary Dance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc2MjA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern Art Exhibition Gallery",
      category: "art",
      type: "image",
      title: "Art Exhibition Hall"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1647438027345-408897e83dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1bHR1cmFsJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzU3NjIwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Abstract Cultural Performance Art",
      category: "drama",
      type: "image",
      title: "Theater Workshop"
    }
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "music", label: "Music" },
    { key: "dance", label: "Dance" },
    { key: "art", label: "Art" },
    { key: "drama", label: "Drama" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-muted border border-border rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-foreground" />
            <span className="text-muted-foreground text-sm font-medium">Visual Memories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Festival Gallery
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Relive the magic through our curated collection of performances, exhibitions, 
            and memorable moments from past festivals.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-card hover:text-foreground border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {["Behind Scenes", "Workshop", "Awards Ceremony", "Networking"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square bg-muted border border-border rounded-lg p-4 flex flex-col justify-center items-center text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <h4 className="text-foreground font-medium mb-1">{title}</h4>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Share Your Moments</h3>
            <p className="text-muted-foreground mb-6">
              Tag us on social media with #CulturalFesta2025 to be featured in our live gallery
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-card text-foreground px-3 py-1 rounded-full text-sm border border-border">#CulturalFesta2025</span>
              <span className="bg-card text-foreground px-3 py-1 rounded-full text-sm border border-border">#DhakaCollege</span>
              <span className="bg-card text-foreground px-3 py-1 rounded-full text-sm border border-border">#ArtisticBangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}