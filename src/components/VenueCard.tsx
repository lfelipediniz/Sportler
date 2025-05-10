
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Users } from 'lucide-react';
import { Venue } from '../types';
import { cn } from '@/lib/utils';

interface VenueCardProps {
  venue: Venue;
  compact?: boolean;
  showFavoriteButton?: boolean;
}

const VenueCard = ({ venue, compact = false, showFavoriteButton = true }: VenueCardProps) => {
  return (
    <Link to={`/venues/${venue.id}`} className={cn(
      "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",
      compact ? "flex items-center" : "block"
    )}>
      <div className={cn(
        "relative overflow-hidden",
        compact ? "w-24 h-24" : "w-full h-48"
      )}>
        <img 
          src={venue.image || '/placeholder.svg'} 
          alt={venue.name} 
          className="w-full h-full object-cover"
        />
        
        {!compact && (
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-1.5 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">{venue.rating.toFixed(2)}</span>
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      
      <div className={cn(
        "p-4",
        compact ? "flex-1" : ""
      )}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-800">{venue.name}</h3>
          {showFavoriteButton && (
            <button className={`text-${venue.isFavorite ? 'sportler-green' : 'gray-300'}`}>
              <Heart size={18} fill={venue.isFavorite ? "currentColor" : "none"} />
            </button>
          )}
        </div>
        
        {!compact && venue.currentParticipants !== undefined && (
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Users size={16} className="text-sportler-green" />
              <span className="text-sm text-gray-600">{venue.currentParticipants}/{venue.maxParticipants}</span>
            </div>
            
            {venue.hasCrowd && (
              <div className="flex items-center gap-1">
                <Eye size={16} className="text-sportler-green" />
              </div>
            )}
            
            <div className="ml-auto">
              <span className="text-sm font-medium text-sportler-blue">{venue.time}</span>
            </div>
          </div>
        )}
        
        {compact && venue.currentParticipants !== undefined && (
          <div className="flex items-center mt-1">
            <Users size={14} className="mr-1 text-sportler-green" />
            <span className="text-xs text-gray-600">{venue.currentParticipants}/{venue.maxParticipants}</span>
          </div>
        )}
        
        <div className={cn(
          "flex justify-between items-center",
          compact ? "mt-1" : "mt-3"
        )}>
          <div className="flex items-center">
            <div className="bg-gray-100 p-1.5 rounded-full mr-2">
              <img src="/placeholder.svg" alt={venue.sportType} className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700">{venue.sportType}</span>
          </div>
          
          <div className="text-sportler-blue font-bold">
            {compact ? (
              <span>R$ {venue.price.toFixed(2)}</span>
            ) : (
              <div>
                <span className="text-lg">R$ {venue.price.toFixed(2)}</span>
                <div className="text-xs text-gray-500 text-right">Futsal</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;
