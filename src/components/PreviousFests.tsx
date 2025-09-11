import { ImageWithFallback } from './figma/ImageWithFallback';

export function PreviousFests() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Previous Festivals
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Look back at the amazing moments and incredible performances from our past cultural celebrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 2nd Festival */}
          <div className="bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">2nd</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2nd National Cultural Festa</h3>
                <p className="text-purple-300">September 2024</p>
              </div>
            </div>
            
            <div className="mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756694916043-9c213916e1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTc2MjA1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="2nd Cultural Festival Performance"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">350+</div>
                  <div className="text-purple-200 text-sm">Participants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-purple-200 text-sm">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">25</div>
                  <div className="text-purple-200 text-sm">Colleges</div>
                </div>
              </div>
              
              <p className="text-purple-200 text-sm leading-relaxed">
                Our second festival was a tremendous success with participants from 25 colleges across Bangladesh. 
                The event featured amazing performances in music, dance, drama, and visual arts.
              </p>
            </div>
          </div>
          
          {/* 1st Festival */}
          <div className="bg-gradient-to-r from-purple-800/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">1st</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1st National Cultural Festa</h3>
                <p className="text-purple-300">September 2023</p>
              </div>
            </div>
            
            <div className="mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517456862720-4c310c1dcf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBkYW5jaW5nfGVufDF8fHx8MTc1NzYyMDUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="1st Cultural Festival Dance Performance"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">200+</div>
                  <div className="text-purple-200 text-sm">Participants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">8</div>
                  <div className="text-purple-200 text-sm">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">15</div>
                  <div className="text-purple-200 text-sm">Colleges</div>
                </div>
              </div>
              
              <p className="text-purple-200 text-sm leading-relaxed">
                Our inaugural festival laid the foundation for what has become Bangladesh's premier cultural celebration. 
                It was the beginning of a beautiful journey celebrating our cultural diversity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-800/30 to-purple-700/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Legacy of Excellence</h3>
            <p className="text-purple-200">
              Each year, our festival grows bigger and better, creating lasting memories and fostering cultural connections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}