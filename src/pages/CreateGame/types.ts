
export interface GameData {
  name: string;
  time: {
    hour: string;
    minute: string;
  };
  venue: string;
  participants: string;
  teams: string[];
  sport: string;
  rules: string[];
}
