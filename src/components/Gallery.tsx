import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1756694916043-9c213916e1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTc2MjA1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Stage Performance",
      category: "Music"
    },
    {
      src: "https://images.unsplash.com/photo-1517456862720-4c310c1dcf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBkYW5jaW5nfGVufDF8fHx8MTc1NzYyMDUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Dance Performance",
      category: "Dance"
    },
    {
      src: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NTc2MDA4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Concert Crowd",
      category: "Audience"
    },
    {
      src: "https://images.unsplash.com/photo-1743119638006-a01d4625745d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjdWx0dXJhbCUyMGV2ZW50JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc2MjA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cultural Event",
      category: "Festival"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Festival Gallery
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Capturing the vibrant moments, incredible performances, and joyful celebrations from our cultural festivals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-purple-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional placeholder cards for more dynamic layout */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎭</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Drama Performances</h3>
                <p className="text-purple-200 text-sm">Captivating stories brought to life</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Art Exhibitions</h3>
                <p className="text-purple-200 text-sm">Creative expressions in visual form</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-purple-700/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Share Your Moments</h3>
            <p className="text-purple-200 mb-4">
              Tag us on social media with #DCCCulturalFesta2025 to be featured in our gallery
            </p>
            <div className="flex justify-center space-x-4 text-purple-300">
              <span>#DCCCulturalFesta2025</span>
              <span>#CulturalBangladesh</span>
              <span>#DhakaCollege</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}