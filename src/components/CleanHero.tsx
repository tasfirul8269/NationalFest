import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { Button } from "./ui/button";
import EventBG from "../assets/EventBG.jpeg";

export function CleanHero() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      {/* Background Image */}
      <div 
        className="w-screen "
        style={{ 
          backgroundImage: `url(${EventBG})`,
          backgroundSize: '100vw auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          height: '100vh',
          minHeight: '100vh'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="absolute inset-0 z-10 container mx-auto px-6 flex items-end justify-center pb-[100px]">
          {/* Main Content */}
          <motion.div 
            className="space-y-6 text-center max-w-4xl mb-8 pb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           

          

           

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
              className="pt-6 border-t border-white/20"
            >
              <div className="text-white/70 text-sm mb-1">Organized by</div>
              <div className="text-white font-medium">Dhaka College Cultural Club</div>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}