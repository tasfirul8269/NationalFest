import React from "react";

import { motion } from "motion/react";
import { Award, Users, Globe, Target, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CleanAbout() {
  const features = [
    {
      icon: Globe,
      title: "National Platform",
      description: "Bangladesh's largest inter-collegiate cultural festival bringing together talents from across the country."
    },
    {
      icon: Award,
      title: "Professional Standards",
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
    { number: "3", label: "Years Running" },
    { number: "500+", label: "Participants" },
    { number: "50+", label: "Institutions" },
    { number: "12", label: "Categories" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-foreground" />
                <span className="text-muted-foreground text-sm font-medium">About the Festival</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Celebrating Culture
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The Cultural Festa is more than just a competition—it's a celebration of Bangladesh's 
                rich artistic heritage and a platform for emerging talents to shine on a national stage.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-card-foreground font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create an inclusive platform where artistic expression flourishes, cultural 
                    diversity is celebrated, and young talents are nurtured to become tomorrow's 
                    cultural ambassadors.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div className="bg-card border border-border rounded-lg p-4 h-full hover:border-primary/50 transition-all duration-300">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-card-foreground font-medium mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647438027345-408897e83dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1bHR1cmFsJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzU3NjIwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cultural Performance Art"
                  className="w-full h-[400px] object-cover"
                />
              </div>
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
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-card-foreground font-semibold mb-4">Why Cultural Festa?</h3>
              <div className="space-y-3">
                {[
                  "Professional networking opportunities",
                  "Scholarship opportunities for winners",
                  "Media coverage and recognition",
                  "Cultural exchange and learning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}