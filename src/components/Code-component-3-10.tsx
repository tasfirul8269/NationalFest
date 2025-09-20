import React from "react";

import { motion } from "motion/react";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CleanHero() {
  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-muted border border-border rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground text-sm font-medium">3rd National Edition</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              >
                Cultural Festa
                <br />
                <span className="text-4xl lg:text-5xl text-muted-foreground">2025</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Bangladesh's premier cultural celebration showcasing artistic excellence 
                and fostering creative expression across diverse disciplines.
              </motion.p>
            </div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-medium">September 5, 2025</div>
                  <div className="text-muted-foreground text-sm">Registration until Aug 31</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-medium">Dhaka College</div>
                  <div className="text-muted-foreground text-sm">Dhanmondi, Dhaka</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-muted-foreground text-sm">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-muted-foreground text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground text-sm">Institutes</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Users className="w-5 h-5 mr-2" />
                  Register Now
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg">
                  <Award className="w-5 h-5 mr-2" />
                  View Schedule
                </Button>
              </motion.div>
            </motion.div>

            {/* Organized By */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-8 border-t border-border"
            >
              <div className="text-muted-foreground text-sm mb-1">Organized by</div>
              <div className="text-foreground font-medium">Dhaka College Cultural Club</div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639682687226-40cd13466ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3NTc2MjA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cultural Performance Stage"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-card-foreground font-medium">Cash Prizes</div>
                  <div className="text-muted-foreground text-sm">Worth 5 Lakh Taka</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}