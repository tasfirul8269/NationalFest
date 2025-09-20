# Segments Navigation System

This implementation provides a complete segments navigation system for the Cultural Festa website, allowing users to click on segments from the home page and view detailed information.

## 🚀 Features

### Home Page Integration
- **Clickable Segments**: Each segment card is clickable and navigates to detailed view
- **Dynamic Icons**: Icons are loaded dynamically from the JSON data
- **Hover Effects**: Smooth animations and hover states
- **Responsive Design**: Works on all screen sizes

### Single Segment Page
- **Complete Information**: Detailed description, rules, prizes, requirements
- **Event Details**: Date, time, venue, participants count
- **Registration**: Buy ticket functionality with pricing
- **Interactive Elements**: Save, share, and back navigation
- **Sticky Sidebar**: Registration card stays visible while scrolling

## 📁 File Structure

```
src/
├── data/
│   └── segments.json          # Mock data for all segments
├── components/
│   ├── CleanSegments.tsx     # Updated with click functionality
│   └── SegmentSinglePage.tsx # Individual segment detail page
├── hooks/
│   └── useNavigation.ts      # Navigation state management
└── App.tsx                   # Main app with routing logic
```

## 🎯 How It Works

### 1. Navigation Flow
```
Home Page → Click Segment → Single Segment Page → Back Button → Home Page
```

### 2. Data Flow
- **JSON Data**: All segment information stored in `segments.json`
- **State Management**: `useNavigation` hook manages current page and selected segment
- **Props Passing**: Segment data passed from home to detail page

### 3. Component Structure
- **CleanSegments**: Displays grid of segments with click handlers
- **SegmentSinglePage**: Shows detailed information for selected segment
- **useNavigation**: Manages navigation state and functions

## 📋 Segment Information

Each segment includes:
- **Basic Info**: Name, description, category, participants
- **Event Details**: Date, time, venue, duration
- **Pricing**: Registration fee (100 BDT per segment)
- **Rules**: Competition guidelines and requirements
- **Prizes**: Detailed prize structure for top 3 positions
- **Requirements**: What participants need to bring

## 🎨 Design Features

- **Consistent Styling**: Matches existing website theme
- **Smooth Animations**: Motion effects for better UX
- **Interactive Elements**: Hover effects and click interactions
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Usage

### Basic Implementation
```tsx
import { useNavigation } from './hooks/useNavigation';
import { CleanSegments } from './components/CleanSegments';
import { SegmentSinglePage } from './components/SegmentSinglePage';

function App() {
  const { currentPage, selectedSegment, navigateToSegment, navigateToHome } = useNavigation();

  if (currentPage === 'segment' && selectedSegment) {
    return <SegmentSinglePage segment={selectedSegment} onBack={navigateToHome} />;
  }

  return (
    <div>
      <CleanSegments onSegmentClick={navigateToSegment} />
      {/* Other components */}
    </div>
  );
}
```

### Customizing Segments
Edit `src/data/segments.json` to modify segment information:
- Add new segments
- Update descriptions and rules
- Change pricing and prizes
- Modify event details

## 🎪 Available Segments

1. **Vocal Performance** - Solo & group singing
2. **Dance Performance** - Traditional & contemporary
3. **Instrumental Music** - Orchestra & solo instruments
4. **Drama Competition** - Stage plays & monologues
5. **Art Exhibition** - Paintings, sculptures & crafts
6. **Photography** - Digital & analog photography
7. **Creative Writing** - Poetry, stories & essays
8. **Quiz Competition** - General knowledge & culture
9. **Debate Tournament** - English & Bangla debates
10. **Gaming Championship** - E-sports & board games
11. **Film Making** - Short films & documentaries
12. **Fashion Show** - Traditional & contemporary wear

## 🚀 Future Enhancements

- **Search & Filter**: Add search functionality for segments
- **Favorites**: Allow users to save favorite segments
- **Registration Integration**: Connect to actual payment system
- **User Authentication**: Track user registrations
- **Admin Panel**: Manage segments and registrations
- **Analytics**: Track segment popularity and engagement

## 📱 Mobile Responsiveness

The system is fully responsive and works on:
- **Mobile**: Single column layout with touch-friendly interactions
- **Tablet**: Two-column grid with optimized spacing
- **Desktop**: Four-column grid with full feature set

## 🎨 Customization

### Styling
- Modify colors in the component CSS classes
- Update animations in motion components
- Change layout in grid systems

### Content
- Update segment data in JSON file
- Modify descriptions and rules
- Add new fields to segment schema

### Functionality
- Add new navigation states
- Implement additional features
- Connect to backend APIs

