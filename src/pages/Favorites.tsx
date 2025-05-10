
import React from 'react';
import SearchBar from '@/components/SearchBar';
import VenueCard from '@/components/VenueCard';
import { mockVenues } from '@/data/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';

const FavoritesPage = () => {
  const favoriteVenues = mockVenues.filter(venue => venue.isFavorite);
  
  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Favoritos</h1>
          <SearchBar 
            placeholder="Pesquise por: Quadra do seu Zé" 
            className="mb-8 max-w-xl"
          />
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteVenues.map(venue => (
            <div key={venue.id} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <VenueCard venue={venue} compact={true} />
            </div>
          ))}
          
          {favoriteVenues.length < 3 && Array.from({ length: 3 - favoriteVenues.length }).map((_, index) => (
            <div key={`placeholder-${index}`} className="bg-gray-100 rounded-lg h-24 hidden md:block"></div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default FavoritesPage;
