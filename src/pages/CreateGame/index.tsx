
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ActionButton from '@/components/ActionButton';
import StepIndicator from './components/StepIndicator';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import Step3Form from './components/Step3Form';
import { GameData } from './types';
import { useIsMobile } from '@/hooks/use-mobile';

const CreateGamePage = () => {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(1);
  const [gameData, setGameData] = useState<GameData>({
    name: '',
    time: {
      hour: '00',
      minute: '00'
    },
    venue: '',
    participants: '',
    teams: [''],
    sport: '',
    rules: ['']
  });
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log('Game created:', gameData);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleInputChange = (field: string, value: string) => {
    setGameData({
      ...gameData,
      [field]: value
    });
  };
  
  const handleTimeChange = (type: 'hour' | 'minute', value: string) => {
    setGameData({
      ...gameData,
      time: {
        ...gameData.time,
        [type]: value
      }
    });
  };
  
  const handleAddTeam = () => {
    setGameData({
      ...gameData,
      teams: [...gameData.teams, '']
    });
  };
  
  const handleTeamChange = (index: number, value: string) => {
    const updatedTeams = [...gameData.teams];
    updatedTeams[index] = value;
    
    setGameData({
      ...gameData,
      teams: updatedTeams
    });
  };
  
  const handleAddRule = () => {
    setGameData({
      ...gameData,
      rules: [...gameData.rules, '']
    });
  };
  
  const handleRuleChange = (index: number, value: string) => {
    const updatedRules = [...gameData.rules];
    updatedRules[index] = value;
    
    setGameData({
      ...gameData,
      rules: updatedRules
    });
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Step1Form 
            gameData={gameData} 
            handleInputChange={handleInputChange} 
            handleTimeChange={handleTimeChange} 
          />
        );
      case 2:
        return (
          <Step2Form 
            gameData={gameData} 
            handleInputChange={handleInputChange} 
            handleTeamChange={handleTeamChange} 
            handleAddTeam={handleAddTeam} 
          />
        );
      case 3:
        return (
          <Step3Form 
            gameData={gameData} 
            handleInputChange={handleInputChange} 
            handleRuleChange={handleRuleChange} 
            handleAddRule={handleAddRule} 
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="flex flex-col md:flex-row md:items-start">
        {/* Sidebar / Step Navigation for desktop */}
        <div className="hidden md:block md:w-64 lg:w-80 mr-8 sticky top-4">
          <Link to="/" className="inline-flex items-center text-sportler-blue mb-6">
            <ArrowLeft size={24} className="mr-2" />
            <span>Voltar</span>
          </Link>
          <h1 className="text-3xl font-bold text-sportler-blue mb-8">Criar Partida</h1>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 1 ? 'bg-sportler-blue text-white' : 'bg-sportler-gray text-gray-500'}`}>
                1
              </div>
              <span className={`font-medium ${step >= 1 ? 'text-sportler-blue' : 'text-gray-500'}`}>Informações básicas</span>
            </li>
            <li className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 2 ? 'bg-sportler-blue text-white' : 'bg-sportler-gray text-gray-500'}`}>
                2
              </div>
              <span className={`font-medium ${step >= 2 ? 'text-sportler-blue' : 'text-gray-500'}`}>Times e participantes</span>
            </li>
            <li className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 3 ? 'bg-sportler-blue text-white' : 'bg-sportler-gray text-gray-500'}`}>
                3
              </div>
              <span className={`font-medium ${step >= 3 ? 'text-sportler-blue' : 'text-gray-500'}`}>Esporte e regras</span>
            </li>
          </ul>
          
          <div className="mt-10 space-y-3">
            <button 
              onClick={handleNext}
              className="w-full bg-sportler-blue text-white rounded-lg py-3 flex items-center justify-center"
            >
              {step === 3 ? 'Finalizar' : 'Próximo'}
              {step < 3 && <ArrowRight size={18} className="ml-2" />}
            </button>
            
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="w-full border border-sportler-blue text-sportler-blue rounded-lg py-3"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 md:bg-white md:rounded-xl md:p-8 md:shadow-sm">
          {isMobile && (
            <div className="flex items-center mb-4">
              <button onClick={handleBack} className="mr-4">
                <ArrowLeft size={24} className="text-sportler-blue" />
              </button>
              
              <StepIndicator currentStep={step} />
            </div>
          )}
          
          {isMobile && (
            <h1 className="text-3xl font-bold text-sportler-blue mb-8">Criar Partida</h1>
          )}
          
          <div>
            {renderStepContent()}
          </div>
          
          {isMobile && (
            <div className="fixed bottom-24 right-4">
              <ActionButton
                variant="next"
                onClick={handleNext}
                icon={<ArrowRight size={24} />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateGamePage;
