
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

const SearchBar = ({ placeholder, className }: SearchBarProps) => {
  return (
    <div className={`relative ${className}`}>
      <Input 
        type="text" 
        placeholder={placeholder} 
        className="pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-xl text-gray-700 focus-visible:ring-sportler-blue" 
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
    </div>
  );
};

export default SearchBar;
