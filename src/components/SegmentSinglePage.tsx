import React from "react";
import { motion } from "motion/react";
import { 
  Calendar,
  Clock,
  MapPin,
  Star,
  Award,
  CheckCircle,
  ArrowLeft,
  Ticket,
  Heart,
  Share2,
  Users,
  DollarSign,
  ArrowRight,
  Mic,
  Guitar,
  Theater,
  Palette,
  Camera,
  Pen,
  Lightbulb,
  Gamepad2,
  Tv,
  Trophy
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Mic: Mic,
  Users: Users,
  Guitar: Guitar,
  Theater: Theater,
  Palette: Palette,
  Camera: Camera,
  Pen: Pen,
  Lightbulb: Lightbulb,
  Gamepad2: Gamepad2,
  Tv: Tv,
  Trophy: Trophy
};

interface SegmentData {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  detailedDescription: string;
  participants: string;
  price: number;
  duration: string;
  venue: string;
  rules: string[];
  prizes: string[];
  requirements: string;
  registrationDeadline: string;
  category: string;
  date: string;
  time: string;
  image: string;
}

interface SegmentSinglePageProps {
  segment: SegmentData;
  onBack: () => void;
}

export function SegmentSinglePage({ segment, onBack }: SegmentSinglePageProps) {
  const IconComponent = iconMap[segment.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Segments
            </Button>

            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-10 h-10 text-primary" />
              </div>
              
              <div className="flex-1">
                <Badge variant="secondary" className="mb-4">
                  {segment.category}
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {segment.name}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  {segment.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{segment.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{segment.price} BDT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{segment.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-semibold text-foreground mb-4">About This Segment</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {segment.detailedDescription}
                  </p>
                </motion.div>

                {/* Event Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">Event Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{segment.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Time</div>
                        <div className="font-medium">{segment.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Venue</div>
                        <div className="font-medium">{segment.venue}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                        <div className="font-medium">{segment.participants}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Rules & Guidelines</h3>
                  <ul className="space-y-3">
                    {segment.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Requirements</h3>
                  <p className="text-muted-foreground text-lg">{segment.requirements}</p>
                </motion.div>
              </div>

              {/* Right Column - Registration & Prizes */}
              <div className="space-y-6">
                {/* Registration Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6 sticky top-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">Registration</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Registration Fee</span>
                      <span className="text-3xl font-bold text-primary">{segment.price} BDT</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Deadline</span>
                      <span className="font-medium">{segment.registrationDeadline}</span>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                        <Ticket className="w-5 h-5 mr-2" />
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
                </motion.div>

                {/* Prizes */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Prizes
                  </h3>
                  
                  <div className="space-y-4">
                    {segment.prizes.map((prize, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{prize}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6"np
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{segment.participants}</div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{segment.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                </motion.div>
              </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
