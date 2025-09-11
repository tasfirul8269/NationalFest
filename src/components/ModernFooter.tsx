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
  Users,
  Heart
} from "lucide-react";
import { Button } from "./ui/button";

export function ModernFooter() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" }
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
    <footer id="contact" className="relative bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-20">
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
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center rotate-3 transform">
                    <span className="text-white font-bold text-xl">CF</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Cultural Festa</div>
                  <div className="text-gray-400 text-sm">2025</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Bangladesh's premier cultural celebration, organized by Dhaka College Cultural Club. 
                Empowering young artists and celebrating our rich cultural heritage since 2023.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-white/40`}
                      aria-label={social.label}
                    >
                      <SocialIcon className="w-5 h-5" />
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
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:text-cyan-300"
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
              <h3 className="text-white font-semibold text-lg">Event Information</h3>
              <div className="space-y-4">
                {eventInfo.map((info, index) => {
                  const InfoIcon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <InfoIcon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
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
              <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates about registrations, events, and announcements.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-l-none rounded-r-xl px-4">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">cultural@dhakacollege.edu.bd</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">
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
          className="border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© 2025 Dhaka College Cultural Club.</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with love for culture.</span>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
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
              className="text-center mt-8 pt-8 border-t border-white/10"
            >
              <p className="text-gray-300 mb-4">
                Ready to showcase your talent on Bangladesh's biggest cultural stage?
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-2xl px-8 py-3">
                  Register Now - It's Free!
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}