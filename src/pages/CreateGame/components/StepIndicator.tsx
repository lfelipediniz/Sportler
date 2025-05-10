
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="h-1 flex-1 rounded-full bg-gray-200">
        <div 
          className="h-full rounded-full bg-sportler-blue" 
          style={{ width: `${100 * Math.min(1, currentStep / 3)}%` }}
        ></div>
      </div>
      <div className="h-1 flex-1 rounded-full bg-gray-200">
        <div 
          className="h-full rounded-full bg-sportler-blue" 
          style={{ width: `${100 * Math.max(0, Math.min(1, (currentStep - 1) / 3))}%` }}
        ></div>
      </div>
      <div className="h-1 flex-1 rounded-full bg-gray-200">
        <div 
          className="h-full rounded-full bg-sportler-blue" 
          style={{ width: `${100 * Math.max(0, Math.min(1, (currentStep - 2) / 3))}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StepIndicator;
