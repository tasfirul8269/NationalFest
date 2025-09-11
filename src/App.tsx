import { CleanHeader } from "./components/CleanHeader";
import { CleanHero } from "./components/CleanHero";
import { CleanSegments } from "./components/CleanSegments";
import { CleanAbout } from "./components/CleanAbout";
import { CleanGallery } from "./components/CleanGallery";
import { CleanSponsors } from "./components/CleanSponsors";
import { CleanFooter } from "./components/CleanFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      <CleanHeader />
      <CleanHero />
      <CleanSegments />
      <CleanAbout />
      <CleanGallery />
      <CleanSponsors />
      <CleanFooter />
    </div>
  );
}