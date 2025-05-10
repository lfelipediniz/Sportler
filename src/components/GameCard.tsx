
import React from 'react';
import { Users, Eye } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const getResultClass = (result: string) => {
    switch(result) {
      case 'Vitória': return 'text-sportler-blue';
      case 'Derrota': return 'text-red-500'; 
      case 'Empate': return 'text-sportler-green';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5">
        <h3 className="font-bold text-gray-800">{game.venue.name}</h3>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">{game.time}</span>
            <span className={`font-medium ${getResultClass(game.result)}`}>{game.result}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-600">{game.date}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-1.5 rounded-full">
              <img src="/placeholder.svg" alt={game.venue.sportType} className="w-4 h-4" />
            </div>
            <span className="text-gray-700">{game.venue.sportType}</span>
          </div>
          
          <div className="flex items-center gap-3 my-2">
            <div className="flex items-center gap-1">
              <Eye size={16} className="text-gray-500" />
              <span className="text-gray-600">Com torcida</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Users size={16} className="text-gray-500" />
            <span className="text-gray-600">{game.participants} jogadores</span>
          </div>
          
          <div className="text-gray-600 font-medium">
            R$ {game.price.toFixed(2)}
          </div>
          
          <div className="w-full mt-3 flex items-center justify-between">
            <div className="text-gray-600">
              <span className="text-xs font-medium">Partida {game.type}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-xs">Avaliação da Partida - </span>
              <span className="font-medium">{game.rating?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <img 
          src={game.venue.image || '/placeholder.svg'}
          alt={game.venue.name}
          className="w-full h-36 object-cover"
        />
      </div>
    </div>
  );
};

export default GameCard;
