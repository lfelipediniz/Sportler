
import React from 'react';
import SearchBar from '@/components/SearchBar';
import GameCard from '@/components/GameCard';
import { mockGames } from '@/data/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';

const HistoryPage = () => {
  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Histórico</h1>
          <SearchBar 
            placeholder="Pesquise suas partidas" 
            className="mb-8 max-w-xl"
          />
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default HistoryPage;
