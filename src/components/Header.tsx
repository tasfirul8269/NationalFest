import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">DCCC</span>
          </div>
          <span className="text-white font-semibold">Dhaka College Cultural Club</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#segments" className="text-white/80 hover:text-white transition-colors">Segments</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
          <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
        
        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full">
          Participate Now
        </Button>
      </div>
    </header>
  );
}