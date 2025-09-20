import React from "react";

import { motion } from "motion/react";
import { Award, Users, Globe, Target, Heart, Sparkles } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ModernAbout() {
  const features = [
    {
      icon: Globe,
      title: "National Platform",
      description: "Bangladesh's largest inter-collegiate cultural festival bringing together talents from across the country."
    },
    {
      icon: Award,
      title: "Professional Judging",
      description: "Renowned artists, performers, and cultural experts evaluate participants with industry standards."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster connections between artists, create lasting friendships, and build cultural networks."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Workshops, masterclasses, and mentorship opportunities with industry professionals."
    }
  ];

  const stats = [
    { number: "3", label: "Years Running", gradient: "from-cyan-400 to-blue-500" },
    { number: "500+", label: "Participants", gradient: "from-purple-400 to-pink-500" },
    { number: "50+", label: "Institutions", gradient: "from-emerald-400 to-teal-500" },
    { number: "12", label: "Categories", gradient: "from-orange-400 to-red-500" }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2">
                <Heart className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">About the Festival</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Celebrating
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                  Culture
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                The Cultural Festa is more than just a competition—it's a celebration of Bangladesh's 
                rich artistic heritage and a platform for emerging talents to shine on a national stage.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To create an inclusive platform where artistic expression flourishes, cultural 
                    diversity is celebrated, and young talents are nurtured to become tomorrow's 
                    cultural ambassadors.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647438027345-408897e83dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1bHR1cmFsJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzU3NjIwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cultural Performance Art"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8"
            >
              <h3 className="text-white font-semibold text-xl mb-4">Why Cultural Festa?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Professional networking opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Scholarship opportunities for winners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Media coverage and recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Cultural exchange and learning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}