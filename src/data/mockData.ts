
import { Venue, Game, User } from '../types';

export const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'Quadra Jardim Acácias',
    image: '',
    rating: 5.0,
    description: 'Quadra com muito espaço para sua melhor experiência',
    capacity: 20,
    currentParticipants: 6,
    maxParticipants: 12,
    time: '14:00h',
    price: 5.0,
    pricePerPerson: 1.0,
    sportType: 'Futsal',
    hasCrowd: true,
    isFavorite: true,
    facilities: [
      '2 Banheiros',
      'Estacionamento',
      'Rede de Vôlei 7,5m',
      'Bolas de Futsal disponível',
      'Limite de 20 pessoas',
      '(16)965735467'
    ],
    phone: '(16)965735467'
  },
  {
    id: '2',
    name: 'Fluxo Centro Esportivo',
    image: '/placeholder.svg',
    rating: 4.5,
    description: 'Centro esportivo completo com diversas quadras',
    capacity: 30,
    currentParticipants: 11,
    maxParticipants: 11,
    time: '16:00h',
    price: 10.0,
    pricePerPerson: 2.0,
    sportType: 'Basquete',
    isFavorite: false,
    facilities: [
      '4 Banheiros',
      'Estacionamento grande',
      'Vestiários',
      'Lanchonete',
      'Limite de 30 pessoas',
      '(16)999888777'
    ],
    phone: '(16)999888777'
  },
  {
    id: '3',
    name: 'Praia Santista da Parna',
    image: '/placeholder.svg',
    rating: 4.2,
    description: 'Quadra de areia para prática de vôlei e futevôlei',
    capacity: 15,
    price: 5.0,
    sportType: 'Futvôlei',
    isFavorite: false,
    facilities: [
      '1 Banheiro',
      'Chuveiro externo',
      'Rede profissional',
      'Limite de 15 pessoas',
      '(16)965735467'
    ],
    phone: '(16)965735467'
  }
];

export const mockGames: Game[] = [
  {
    id: '1',
    venue: mockVenues[0],
    time: '08:00h - 12:00h',
    date: 'Hoje',
    result: 'Vitória',
    participants: 20,
    price: 2.0,
    type: 'Competitiva',
    rating: 4.0
  },
  {
    id: '2',
    venue: mockVenues[2],
    time: '08:00h - 12:00h',
    date: 'Hoje',
    result: 'Empate',
    participants: 10,
    price: 5.0,
    type: 'Recreativa',
    rating: 5.0
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Neymar da Silva Santos',
  image: '',
  rating: 4.99,
  level: {
    name: 'OURO 2',
    tier: 2,
    progress: 70,
    nextTier: 1,
    remaining: 5
  },
  stats: {
    victories: 50,
    defeats: 23,
    draws: 27
  }
};
