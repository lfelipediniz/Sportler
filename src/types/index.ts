
export interface Venue {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  capacity: number;
  currentParticipants?: number;
  maxParticipants?: number;
  time?: string;
  price: number;
  pricePerPerson?: number;
  location?: string;
  sportType: SportType;
  hasCrowd?: boolean;
  isFavorite?: boolean;
  facilities: string[];
  phone?: string;
}

export type SportType = 'Futsal' | 'Basquete' | 'Vôlei' | 'Futvôlei' | 'Tênis';

export interface Game {
  id: string;
  venue: Venue;
  time: string;
  date: string;
  result: GameResult;
  participants: number;
  price: number;
  type: GameType;
  rating?: number;
}

export type GameResult = 'Vitória' | 'Derrota' | 'Empate';
export type GameType = 'Competitiva' | 'Recreativa';

export interface User {
  id: string;
  name: string;
  image: string;
  rating: number;
  level: {
    name: string;
    tier: number;
    progress: number;
    nextTier: number;
    remaining: number;
  };
  stats: {
    victories: number;
    defeats: number;
    draws: number;
  };
}
