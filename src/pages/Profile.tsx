
import React from 'react';
import { Share2 } from 'lucide-react';
import RatingStars from '@/components/RatingStars';
import { mockUser } from '@/data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';

const ProfilePage = () => {
  const { victories, defeats, draws } = mockUser.stats;
  const totalGames = victories + defeats + draws;
  const isMobile = useIsMobile();
  
  const calculatePercentage = (value: number) => {
    return (value / totalGames) * 100;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 max-w-5xl">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Perfil</h1>
        <button className="text-sportler-green hover:text-sportler-blue transition-colors">
          <Share2 size={24} />
        </button>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="flex md:flex-col items-center gap-6 bg-white p-6 rounded-xl shadow-sm md:sticky md:top-24">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-sm">
              <img 
                src={mockUser.image || '/placeholder.svg'} 
                alt={mockUser.name}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="md:text-center md:mt-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">{mockUser.name}</h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <RatingStars rating={mockUser.rating} size="sm" />
                <span className="text-gray-700">{mockUser.rating}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-8">
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{mockUser.level.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Faltam {mockUser.level.remaining} partidas
                </p>
              </div>
              
              <div className="w-20 h-20 rounded-full bg-sportler-blue flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sportler-blue">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-sportler-green to-sportler-blue"
                style={{ width: `${mockUser.level.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-end mt-2">
              <span className="text-xs text-gray-600 font-medium">OURO {mockUser.level.nextTier}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-gray-800">COMPETIÇÕES</h3>
            
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-sportler-blue mr-3"></div>
                  <span className="text-sm">Vitórias - {calculatePercentage(victories).toFixed(0)}%</span>
                </div>
                <span className="font-medium">{victories}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-400 mr-3"></div>
                  <span className="text-sm">Derrotas - {calculatePercentage(defeats).toFixed(0)}%</span>
                </div>
                <span className="font-medium">{defeats}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-sportler-green mr-3"></div>
                  <span className="text-sm">Empates - {calculatePercentage(draws).toFixed(0)}%</span>
                </div>
                <span className="font-medium">{draws}</span>
              </div>
            </div>
            
            <div className="relative h-5 w-full overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-sportler-blue" style={{ width: `${calculatePercentage(victories)}%` }}></div>
              <div className="absolute top-0 h-full bg-red-400" style={{ left: `${calculatePercentage(victories)}%`, width: `${calculatePercentage(defeats)}%` }}></div>
              <div className="absolute top-0 h-full bg-sportler-green" style={{ left: `${calculatePercentage(victories) + calculatePercentage(defeats)}%`, width: `${calculatePercentage(draws)}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
