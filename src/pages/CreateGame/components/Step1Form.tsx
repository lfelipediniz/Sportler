
import React from 'react';
import { Input } from '@/components/ui/input';
import SearchBar from '@/components/SearchBar';
import { GameData } from '../types';
import { useIsMobile } from '@/hooks/use-mobile';

interface Step1FormProps {
  gameData: GameData;
  handleInputChange: (field: string, value: string) => void;
  handleTimeChange: (type: 'hour' | 'minute', value: string) => void;
}

const Step1Form = ({ gameData, handleInputChange, handleTimeChange }: Step1FormProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Nome da partida</label>
        <Input 
          type="text" 
          placeholder="Titans vs Gorilas" 
          className="bg-gray-100 border-0 md:max-w-md"
          value={gameData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>
      
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Horário</label>
        <div className="flex items-center">
          <Input 
            type="text"
            placeholder="00" 
            className="w-16 text-center bg-gray-100 border-0"
            value={gameData.time.hour}
            onChange={(e) => handleTimeChange('hour', e.target.value)}
          />
          <span className="mx-2 text-lg font-medium">:</span>
          <Input 
            type="text" 
            placeholder="00" 
            className="w-16 text-center bg-gray-100 border-0"
            value={gameData.time.minute}
            onChange={(e) => handleTimeChange('minute', e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Localização</label>
        <div className="bg-gray-100 h-48 md:h-64 rounded-lg mb-3"></div>
        <SearchBar placeholder="Pesquise por: Quadra do seu Zé" className="md:max-w-md" />
      </div>
    </div>
  );
};

export default Step1Form;
