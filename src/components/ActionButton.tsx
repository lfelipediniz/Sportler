
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outline' | 'next' | 'back';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const ActionButton = ({ 
  children, 
  onClick, 
  className,
  variant = 'default',
  icon,
  iconPosition = 'left'
}: ActionButtonProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'outline':
        return 'bg-transparent text-sportler-blue border-2 border-sportler-blue hover:bg-sportler-blue/10';
      case 'next':
        return 'bg-sportler-blue text-white rounded-full w-14 h-14 p-0 shadow-md';
      case 'back':
        return 'bg-gray-100 text-gray-700 rounded-full w-14 h-14 p-0 shadow-md';
      default:
        return 'bg-sportler-blue text-white hover:bg-sportler-blue/90 shadow-sm';
    }
  };

  return (
    <Button 
      onClick={onClick} 
      className={cn(
        getVariantClass(),
        "font-medium flex items-center justify-center gap-2 py-5 rounded-xl",
        className
      )}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </Button>
  );
};

export default ActionButton;
