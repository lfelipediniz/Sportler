
import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingStars from '@/components/RatingStars';
import ActionButton from '@/components/ActionButton';
import { mockVenues } from '@/data/mockData';

const VenueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const venue = mockVenues.find(v => v.id === id) || mockVenues[0];
  
  return (
    <div className="container max-w-3xl mx-auto pb-20">
      <div className="relative">
        <img 
          src={venue.image || '/placeholder.svg'} 
          alt={venue.name}
          className="w-full h-72 object-cover" 
        />
        
        <Link 
          to="/"
          className="absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        
        <div className="absolute bottom-5 right-5">
          <button className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md ${venue.isFavorite ? 'text-sportler-green' : 'text-gray-400'} hover:bg-gray-100 transition-colors`}>
            <Heart size={24} fill={venue.isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      
      <div className="px-5 py-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-bold text-gray-800">{venue.name}</h1>
          <div className="flex items-center">
            <span className="font-bold mr-1">{venue.rating.toFixed(2)}</span>
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z"></path>
            </svg>
          </div>
        </div>
        
        <div className="mb-8">
          <RatingStars rating={venue.rating} size="lg" />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Descrição</h2>
          <p className="text-gray-700 leading-relaxed">{venue.description}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Informações</h2>
          <ul className="space-y-3 bg-gray-50 p-4 rounded-lg">
            {venue.facilities.map((facility, index) => (
              <li key={index} className="flex items-center">
                <span className="text-sm text-gray-700">• {facility}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Preços</h2>
          <ul className="space-y-3 bg-gray-50 p-4 rounded-lg">
            <li className="flex items-center">
              <span className="text-sm text-gray-700">• R$ {venue.price.toFixed(2)} hora</span>
            </li>
            {venue.pricePerPerson && (
              <li className="flex items-center">
                <span className="text-sm text-gray-700">• + R$ {venue.pricePerPerson.toFixed(2)} por hora</span>
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex justify-center">
          <Link to="/create-game" className="block w-full max-w-md mx-auto">
            <ActionButton className="w-full">
              Criar partida neste local
            </ActionButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenueDetailPage;
