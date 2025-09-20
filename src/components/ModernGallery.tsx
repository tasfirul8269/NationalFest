import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Heart, Share, Eye } from "lucide-react";

export function ModernGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1639682687226-40cd13466ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3NTc2MjA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Stage Performance with Modern Lighting",
      category: "music",
      type: "image",
      title: "Music Night 2024",
      likes: "234",
      views: "5.2k"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1614442848457-36ddcbb0876d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBwZXJmb3JtaW5nJTIwYXJ0c3xlbnwxfHx8fDE3NTc2MjA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "University Students Performing Arts",
      category: "dance",
      type: "video",
      title: "Contemporary Dance",
      likes: "189",
      views: "3.8k"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc2MjA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern Art Exhibition Gallery",
      category: "art",
      type: "image",
      title: "Art Exhibition Hall",
      likes: "156",
      views: "2.9k"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1647438027345-408897e83dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1bHR1cmFsJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzU3NjIwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Abstract Cultural Performance Art",
      category: "drama",
      type: "image",
      title: "Theater Workshop",
      likes: "267",
      views: "4.1k"
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
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Visual Memories</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Festival
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4 text-red-400" />
                            <span className="text-white text-sm">{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span className="text-white text-sm">{item.views}</span>
                          </div>
                        </div>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Share className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Grid Items for Variety */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={`placeholder-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🎭</span>
                </div>
                <h4 className="text-white font-medium mb-2">
                  {index === 1 && "Behind Scenes"}
                  {index === 2 && "Workshop"}
                  {index === 3 && "Awards Ceremony"}
                  {index === 4 && "Networking"}
                </h4>
                <p className="text-gray-400 text-sm">Coming Soon</p>
              </div>
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
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Share Your Moments</h3>
            <p className="text-gray-300 mb-6">
              Tag us on social media with #CulturalFesta2025 to be featured in our live gallery
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm">#CulturalFesta2025</span>
              <span className="bg-white/10 text-purple-300 px-4 py-2 rounded-full text-sm">#DhakaCollege</span>
              <span className="bg-white/10 text-pink-300 px-4 py-2 rounded-full text-sm">#ArtisticBangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}