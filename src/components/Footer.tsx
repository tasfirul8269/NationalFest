import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DCCC</span>
              </div>
              <span className="text-white font-semibold">Dhaka College Cultural Club</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Promoting cultural excellence and artistic expression among students since 1995. 
              Join us in celebrating the rich cultural heritage of Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-purple-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-purple-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-purple-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-purple-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-purple-200 hover:text-white transition-colors text-sm">Home</a>
              <a href="#segments" className="block text-purple-200 hover:text-white transition-colors text-sm">Segments</a>
              <a href="#about" className="block text-purple-200 hover:text-white transition-colors text-sm">About</a>
              <a href="#gallery" className="block text-purple-200 hover:text-white transition-colors text-sm">Gallery</a>
              <a href="#sponsors" className="block text-purple-200 hover:text-white transition-colors text-sm">Sponsors</a>
            </div>
          </div>
          
          {/* Event Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Event Info</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="text-purple-300 font-medium">Registration</div>
                <div className="text-purple-200">Aug 23 - Aug 31, 2025</div>
              </div>
              <div className="text-sm">
                <div className="text-purple-300 font-medium">Event Date</div>
                <div className="text-purple-200">September 5, 2025</div>
              </div>
              <div className="text-sm">
                <div className="text-purple-300 font-medium">Venue</div>
                <div className="text-purple-200">Dhaka College, Dhaka</div>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-purple-200 text-sm">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-purple-200 text-sm">cultural@dhakacollege.edu.bd</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span className="text-purple-200 text-sm">
                  Dhaka College<br />
                  Dhanmondi, Dhaka 1205<br />
                  Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-purple-200 text-sm">
              © 2025 Dhaka College Cultural Club. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}