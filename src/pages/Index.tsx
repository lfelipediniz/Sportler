
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import VenueCard from '@/components/VenueCard';
import { mockVenues } from '@/data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 md:py-10 max-w-7xl">
      <header className="flex items-center justify-between mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          O que você<br className="md:hidden" /> quer jogar hoje?
        </h1>
        {isMobile && (
          <Link to="/create-game" className="text-sportler-blue">
            <PlusCircle size={40} />
          </Link>
        )}
      </header>
      
      <SearchBar 
        placeholder="Pesquise por: Futsal, Basquete..." 
        className="mb-10 max-w-xl"
      />
      
      <div className="space-y-12 md:space-y-16">
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Ainda hoje</h2>
            <Link to="#" className="text-sportler-green text-sm md:text-base font-medium">ver tudo</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVenues.slice(0, 3).map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Esta semana</h2>
            <Link to="#" className="text-sportler-green text-sm md:text-base font-medium">ver tudo</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVenues.slice(1, 4).map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Perto de você</h2>
            <Link to="#" className="text-sportler-green text-sm md:text-base font-medium">ver tudo</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVenues.slice(2, 5).map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
