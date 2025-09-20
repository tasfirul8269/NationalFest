import React from "react";
import { motion } from "motion/react";
import { 
  Music, 
  Mic, 
  Camera, 
  Palette, 
  Users, 
  Trophy, 
  Pen, 
  Theater, 
  Guitar, 
  Lightbulb, 
  Gamepad2, 
  Tv, 
  DollarSign,
  Calendar,
  Clock,
  MapPin,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Ticket,
  Heart,
  Share2
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const segments = [
  { 
    id: 1,
    name: "Vocal Performance", 
    icon: Mic, 
    description: "Solo & group singing competitions featuring traditional and contemporary music",
    detailedDescription: "Showcase your vocal talents in our premier singing competition. Open to both solo performers and groups, this segment celebrates the rich musical heritage of Bangladesh while embracing modern genres. Participants will be judged on vocal technique, stage presence, song selection, and audience engagement.",
    participants: "120+",
    price: 100,
    duration: "2 hours",
    venue: "Main Auditorium",
    rules: [
      "Maximum 4 minutes per performance",
      "No backing tracks with vocals",
      "Traditional and contemporary songs allowed",
      "Judges' decision is final"
    ],
    prizes: [
      "1st Place: 10,000 BDT + Trophy",
      "2nd Place: 7,000 BDT + Medal", 
      "3rd Place: 5,000 BDT + Medal"
    ],
    requirements: "Bring your own instruments if needed",
    registrationDeadline: "August 25, 2025",
    category: "Performing Arts"
  },
  { 
    id: 2,
    name: "Dance Performance", 
    icon: Users, 
    description: "Traditional & contemporary dance showcasing cultural diversity",
    detailedDescription: "Express yourself through the universal language of dance. This segment welcomes both traditional Bangladeshi dance forms and contemporary styles. Groups and solo performers can participate, with special categories for classical, folk, and modern dance.",
    participants: "85+",
    price: 100,
    duration: "3 hours",
    venue: "Dance Studio",
    rules: [
      "Maximum 5 minutes per performance",
      "Costumes and props allowed",
      "Music must be provided on USB",
      "Group size: 2-12 members"
    ],
    prizes: [
      "1st Place: 12,000 BDT + Trophy",
      "2nd Place: 8,000 BDT + Medal",
      "3rd Place: 6,000 BDT + Medal"
    ],
    requirements: "Bring your own music and costumes",
    registrationDeadline: "August 25, 2025",
    category: "Performing Arts"
  },
  { 
    id: 3,
    name: "Instrumental Music", 
    icon: Guitar, 
    description: "Orchestra & solo instruments celebrating musical mastery",
    detailedDescription: "Demonstrate your instrumental prowess in this prestigious competition. Whether you play traditional Bangladeshi instruments or modern ones, this segment celebrates musical excellence and technical skill.",
    participants: "95+",
    price: 100,
    duration: "2.5 hours",
    venue: "Music Hall",
    rules: [
      "Maximum 6 minutes per performance",
      "Solo or ensemble performances allowed",
      "Traditional and modern instruments welcome",
      "Original compositions encouraged"
    ],
    prizes: [
      "1st Place: 15,000 BDT + Trophy",
      "2nd Place: 10,000 BDT + Medal",
      "3rd Place: 7,000 BDT + Medal"
    ],
    requirements: "Bring your own instruments",
    registrationDeadline: "August 25, 2025",
    category: "Performing Arts"
  },
  { 
    id: 4,
    name: "Drama Competition", 
    icon: Theater, 
    description: "Stage plays & monologues bringing stories to life",
    detailedDescription: "Bring compelling stories to the stage in our drama competition. From powerful monologues to ensemble performances, this segment celebrates the art of storytelling and theatrical expression.",
    participants: "60+",
    price: 100,
    duration: "4 hours",
    venue: "Theater Hall",
    rules: [
      "Maximum 15 minutes per performance",
      "Scripts must be original or public domain",
      "Props and costumes allowed",
      "Maximum 8 actors per group"
    ],
    prizes: [
      "1st Place: 20,000 BDT + Trophy",
      "2nd Place: 15,000 BDT + Medal",
      "3rd Place: 10,000 BDT + Medal"
    ],
    requirements: "Bring your own props and costumes",
    registrationDeadline: "August 25, 2025",
    category: "Performing Arts"
  },
  { 
    id: 5,
    name: "Art Exhibition", 
    icon: Palette, 
    description: "Paintings, sculptures & crafts showcasing creative vision",
    detailedDescription: "Display your artistic creations in our comprehensive art exhibition. This segment includes paintings, sculptures, digital art, and traditional crafts, celebrating all forms of visual creativity.",
    participants: "75+",
    price: 100,
    duration: "All day",
    venue: "Art Gallery",
    rules: [
      "Maximum 3 pieces per participant",
      "All mediums accepted",
      "Pieces must be original work",
      "Size limit: 2m x 2m"
    ],
    prizes: [
      "1st Place: 8,000 BDT + Trophy",
      "2nd Place: 5,000 BDT + Medal",
      "3rd Place: 3,000 BDT + Medal"
    ],
    requirements: "Bring your own display materials",
    registrationDeadline: "August 25, 2025",
    category: "Visual Arts"
  },
  { 
    id: 6,
    name: "Photography", 
    icon: Camera, 
    description: "Digital & analog photography capturing moments",
    detailedDescription: "Capture the essence of culture and creativity through your lens. This segment welcomes both digital and analog photography, with categories for different themes and techniques.",
    participants: "110+",
    price: 100,
    duration: "All day",
    venue: "Photo Gallery",
    rules: [
      "Maximum 5 photos per participant",
      "Digital and film photography accepted",
      "Photos must be taken within last 6 months",
      "No heavy editing allowed"
    ],
    prizes: [
      "1st Place: 6,000 BDT + Trophy",
      "2nd Place: 4,000 BDT + Medal",
      "3rd Place: 2,500 BDT + Medal"
    ],
    requirements: "Submit photos in digital format",
    registrationDeadline: "August 25, 2025",
    category: "Visual Arts"
  },
  { 
    id: 7,
    name: "Creative Writing", 
    icon: Pen, 
    description: "Poetry, stories & essays expressing literary talent",
    detailedDescription: "Share your literary voice in our creative writing competition. This segment includes poetry, short stories, essays, and other creative forms, celebrating the power of words and imagination.",
    participants: "90+",
    price: 100,
    duration: "2 hours",
    venue: "Library",
    rules: [
      "Maximum 1000 words per piece",
      "All genres accepted",
      "Must be original work",
      "Submit in both Bangla and English"
    ],
    prizes: [
      "1st Place: 5,000 BDT + Trophy",
      "2nd Place: 3,000 BDT + Medal",
      "3rd Place: 2,000 BDT + Medal"
    ],
    requirements: "Submit digital copies",
    registrationDeadline: "August 25, 2025",
    category: "Literary Arts"
  },
  { 
    id: 8,
    name: "Quiz Competition", 
    icon: Lightbulb, 
    description: "General knowledge & culture testing intellect",
    detailedDescription: "Test your knowledge across various domains in our quiz competition. Questions cover general knowledge, current affairs, history, science, and culture, making it a true test of intellect.",
    participants: "150+",
    price: 100,
    duration: "1.5 hours",
    venue: "Conference Hall",
    rules: [
      "Individual and team participation",
      "Multiple choice questions",
      "No external help allowed",
      "Tie-breaker rounds included"
    ],
    prizes: [
      "1st Place: 7,000 BDT + Trophy",
      "2nd Place: 5,000 BDT + Medal",
      "3rd Place: 3,000 BDT + Medal"
    ],
    requirements: "Bring writing materials",
    registrationDeadline: "August 25, 2025",
    category: "Academic"
  },
  { 
    id: 9,
    name: "Debate Tournament", 
    icon: Mic, 
    description: "English & Bangla debates fostering critical thinking",
    detailedDescription: "Engage in intellectual discourse in our debate tournament. Both English and Bangla debates are welcome, covering topics from social issues to current affairs, fostering critical thinking and public speaking skills.",
    participants: "80+",
    price: 100,
    duration: "3 hours",
    venue: "Debate Hall",
    rules: [
      "Maximum 3 speakers per team",
      "5 minutes per speech",
      "Both English and Bangla allowed",
      "Topics announced 30 minutes before"
    ],
    prizes: [
      "1st Place: 12,000 BDT + Trophy",
      "2nd Place: 8,000 BDT + Medal",
      "3rd Place: 5,000 BDT + Medal"
    ],
    requirements: "Prepare for various topics",
    registrationDeadline: "August 25, 2025",
    category: "Academic"
  },
  { 
    id: 10,
    name: "Gaming Championship", 
    icon: Gamepad2, 
    description: "E-sports & board games celebrating digital culture",
    detailedDescription: "Compete in our gaming championship featuring popular e-sports titles and traditional board games. This segment celebrates digital culture and strategic thinking across various gaming platforms.",
    participants: "200+",
    price: 100,
    duration: "6 hours",
    venue: "Gaming Zone",
    rules: [
      "Multiple game categories",
      "Single and team competitions",
      "Fair play policies apply",
      "Equipment provided"
    ],
    prizes: [
      "1st Place: 25,000 BDT + Trophy",
      "2nd Place: 15,000 BDT + Medal",
      "3rd Place: 10,000 BDT + Medal"
    ],
    requirements: "Basic gaming knowledge",
    registrationDeadline: "August 25, 2025",
    category: "Digital Arts"
  },
  { 
    id: 11,
    name: "Film Making", 
    icon: Tv, 
    description: "Short films & documentaries telling compelling stories",
    detailedDescription: "Create compelling visual narratives in our film making competition. Submit short films, documentaries, or experimental videos that showcase your storytelling and technical skills.",
    participants: "45+",
    price: 100,
    duration: "All day",
    venue: "Screening Room",
    rules: [
      "Maximum 10 minutes per film",
      "All genres accepted",
      "Must be original content",
      "Submit in digital format"
    ],
    prizes: [
      "1st Place: 30,000 BDT + Trophy",
      "2nd Place: 20,000 BDT + Medal",
      "3rd Place: 15,000 BDT + Medal"
    ],
    requirements: "Submit digital files",
    registrationDeadline: "August 25, 2025",
    category: "Digital Arts"
  },
  { 
    id: 12,
    name: "Fashion Show", 
    icon: Trophy, 
    description: "Traditional & contemporary wear celebrating style",
    detailedDescription: "Showcase your fashion sense and modeling skills in our fashion show. This segment celebrates both traditional Bangladeshi attire and contemporary fashion, promoting cultural heritage and modern style.",
    participants: "70+",
    price: 100,
    duration: "2 hours",
    venue: "Fashion Runway",
    rules: [
      "Individual and group participation",
      "Traditional and modern wear allowed",
      "Music provided by organizers",
      "Maximum 2 minutes per walk"
    ],
    prizes: [
      "1st Place: 15,000 BDT + Trophy",
      "2nd Place: 10,000 BDT + Medal",
      "3rd Place: 7,000 BDT + Medal"
    ],
    requirements: "Bring your own outfits",
    registrationDeadline: "August 25, 2025",
    category: "Performing Arts"
  }
];

export function SegmentsPage() {
  const [selectedSegment, setSelectedSegment] = React.useState(segments[0]);
  const [showDetails, setShowDetails] = React.useState(false);

  const categories = [...new Set(segments.map(segment => segment.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground text-sm font-medium">Competition Categories</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Festival Segments
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore 12 diverse competition categories designed to celebrate every form of artistic expression. 
              From traditional arts to modern digital creativity, find your passion and showcase your talent.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    setSelectedSegment(segment);
                    setShowDetails(true);
                  }}
                >
                  <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-card-foreground font-semibold group-hover:text-primary transition-colors">
                        {segment.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {segment.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-foreground font-semibold">{segment.price} BDT</span>
                        </div>
                        
                        <Badge variant="outline" className="text-xs">
                          {segment.participants}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{segment.duration}</span>
                        <span>{segment.venue}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <selectedSegment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{selectedSegment.name}</h2>
                    <p className="text-muted-foreground">{selectedSegment.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Details */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">About This Segment</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedSegment.detailedDescription}</p>
                  </div>

                  {/* Event Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">September 5, 2025</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium">{selectedSegment.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Venue</div>
                        <div className="font-medium">{selectedSegment.venue}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                        <div className="font-medium">{selectedSegment.participants}</div>
                      </div>
                    </div>
                  </div>

                  {/* Rules */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Rules & Guidelines</h3>
                    <ul className="space-y-2">
                      {selectedSegment.rules.map((rule, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Requirements</h3>
                    <p className="text-muted-foreground">{selectedSegment.requirements}</p>
                  </div>
                </div>

                {/* Right Column - Registration & Prizes */}
                <div className="space-y-6">
                  {/* Registration Card */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Registration</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Registration Fee</span>
                        <span className="text-2xl font-bold text-primary">{selectedSegment.price} BDT</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Deadline</span>
                        <span className="font-medium">{selectedSegment.registrationDeadline}</span>
                      </div>
                      
                      <div className="pt-4 space-y-3">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Ticket className="w-4 h-4 mr-2" />
                          Buy Ticket Now
                        </Button>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            <Heart className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Prizes
                    </h3>
                    
                    <div className="space-y-3">
                      {selectedSegment.prizes.map((prize, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-muted-foreground">{prize}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{selectedSegment.participants}</div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{selectedSegment.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
