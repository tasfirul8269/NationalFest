import { useState } from 'react';

export type Page = 'home' | 'segment';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSegment, setSelectedSegment] = useState<any>(null);

  const navigateToSegment = (segment: any) => {
    setSelectedSegment(segment);
    setCurrentPage('segment');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedSegment(null);
  };

  return {
    currentPage,
    selectedSegment,
    navigateToSegment,
    navigateToHome
  };
}

