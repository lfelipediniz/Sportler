
import React from 'react';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { GameData } from '../types';

interface Step3FormProps {
  gameData: GameData;
  handleInputChange: (field: string, value: string) => void;
  handleRuleChange: (index: number, value: string) => void;
  handleAddRule: () => void;
}

const Step3Form = ({ 
  gameData, 
  handleInputChange, 
  handleRuleChange, 
  handleAddRule 
}: Step3FormProps) => {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Esporte/Categoria</label>
        <Input 
          type="text" 
          className="bg-gray-100 border-0 md:max-w-md"
          value={gameData.sport}
          onChange={(e) => handleInputChange('sport', e.target.value)}
        />
      </div>
      
      <div>
        <label className="block text-gray-900 mb-2 font-medium">Regras</label>
        <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          {gameData.rules.map((rule, index) => (
            <div key={index}>
              <Input 
                type="text" 
                className="bg-gray-100 border-0"
                value={rule}
                onChange={(e) => handleRuleChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="flex items-center gap-2 mt-4 text-sportler-blue"
          onClick={handleAddRule}
        >
          <Plus size={20} />
          <span>Adicionar regra</span>
        </button>
      </div>
    </div>
  );
};

export default Step3Form;
