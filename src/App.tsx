import React from "react";
import { CleanHeader } from "./components/CleanHeader";
import { CleanHero } from "./components/CleanHero";
import { CleanSegments } from "./components/CleanSegments";
import { CleanAbout } from "./components/CleanAbout";
import { CleanGallery } from "./components/CleanGallery";
import { CleanSponsors } from "./components/CleanSponsors";
import { CleanFooter } from "./components/CleanFooter";
import { SegmentSinglePage } from "./components/SegmentSinglePage";
import { useNavigation } from "./hooks/useNavigation";

export default function App() {
  const { currentPage, selectedSegment, navigateToSegment, navigateToHome } = useNavigation();

  if (currentPage === 'segment' && selectedSegment) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
        <SegmentSinglePage 
          segment={selectedSegment} 
          onBack={navigateToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      <CleanHeader />
      <CleanHero />
      <CleanSegments onSegmentClick={navigateToSegment} />
      <CleanAbout />
      <CleanGallery />
      <CleanSponsors />
      <CleanFooter />
    </div>
  );
}