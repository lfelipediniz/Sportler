
import React from 'react';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { GameData } from '../types';

interface Step2FormProps {
  gameData: GameData;
  handleInputChange: (field: string, value: string) => void;
  handleTeamChange: (index: number, value: string) => void;
  handleAddTeam: () => void;
}

const Step2Form = ({ 
  gameData, 
  handleInputChange, 
  handleTeamChange, 
  handleAddTeam 
}: Step2FormProps) => {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Quantos participantes?</label>
        <Input 
          type="text" 
          className="bg-gray-100 border-0 md:max-w-md"
          value={gameData.participants}
          onChange={(e) => handleInputChange('participants', e.target.value)}
        />
      </div>
      
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Nome dos times</label>
        <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          {gameData.teams.map((team, index) => (
            <div key={index}>
              <Input 
                type="text" 
                className="bg-gray-100 border-0"
                value={team}
                onChange={(e) => handleTeamChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="flex items-center gap-2 mt-4 text-sportler-blue"
          onClick={handleAddTeam}
        >
          <Plus size={20} />
          <span>Adicionar time</span>
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
