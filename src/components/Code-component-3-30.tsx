import React from "react";

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Send,
  Calendar,
  Clock,
  Users
} from "lucide-react";
import { Button } from "./ui/button";

export function CleanFooter() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Registration", href: "#register" },
    { name: "Competition Rules", href: "#rules" },
    { name: "Schedule", href: "#schedule" },
    { name: "Venue Details", href: "#venue" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];

  const eventInfo = [
    {
      icon: Calendar,
      label: "Event Date",
      value: "September 5, 2025"
    },
    {
      icon: Clock,
      label: "Registration Ends",
      value: "August 31, 2025"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Dhaka College, Dhanmondi"
    },
    {
      icon: Users,
      label: "Expected Participants",
      value: "500+ Students"
    }
  ];

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CF</span>
              </div>
              <div>
                <div className="text-foreground font-bold text-lg">Cultural Festa</div>
                <div className="text-muted-foreground text-sm">2025</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Bangladesh's premier cultural celebration, organized by Dhaka College Cultural Club. 
              Empowering young artists and celebrating our rich cultural heritage since 2023.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-muted border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <SocialIcon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-foreground font-semibold">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-foreground font-semibold">Event Information</h3>
            <div className="space-y-4">
              {eventInfo.map((info, index) => {
                const InfoIcon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <InfoIcon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-foreground font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates about registrations, events, and announcements.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-input border border-border rounded-l-lg px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-l-none rounded-r-lg px-3">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">cultural@dhakacollege.edu.bd</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Dhaka College<br />
                  Dhanmondi, Dhaka 1205
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-border"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2025 Dhaka College Cultural Club. Made with dedication for culture.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-6 border-t border-border"
          >
            <p className="text-muted-foreground mb-4">
              Ready to showcase your talent on Bangladesh's biggest cultural stage?
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now - It's Free!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}