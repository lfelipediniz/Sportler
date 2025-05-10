
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Heart, User, Clock, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Layout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!isMobile && (
        <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
          <div className="container mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-sportler-blue mr-16">Sportler</h1>
              <nav className="hidden md:flex space-x-10">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => cn(
                    "flex items-center gap-2 text-gray-700 font-medium transition-colors",
                    isActive ? "text-sportler-blue" : "hover:text-sportler-blue"
                  )}
                >
                  <Home size={18} />
                  <span>Home</span>
                </NavLink>
                <NavLink 
                  to="/favorites" 
                  className={({ isActive }) => cn(
                    "flex items-center gap-2 text-gray-700 font-medium transition-colors",
                    isActive ? "text-sportler-blue" : "hover:text-sportler-blue"
                  )}
                >
                  <Heart size={18} />
                  <span>Favoritos</span>
                </NavLink>
                <NavLink 
                  to="/history" 
                  className={({ isActive }) => cn(
                    "flex items-center gap-2 text-gray-700 font-medium transition-colors",
                    isActive ? "text-sportler-blue" : "hover:text-sportler-blue"
                  )}
                >
                  <Clock size={18} />
                  <span>Histórico</span>
                </NavLink>
              </nav>
            </div>
            <div className="flex items-center space-x-5">
              <NavLink 
                to="/create-game" 
                className="flex items-center gap-2 bg-sportler-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
              >
                <PlusCircle size={18} />
                <span>Criar Partida</span>
              </NavLink>
              <NavLink 
                to="/profile" 
                className={({ isActive }) => cn(
                  "flex items-center gap-2 text-gray-700 transition-colors",
                  isActive ? "text-sportler-blue" : "hover:text-sportler-blue"
                )}
              >
                <User size={20} />
              </NavLink>
            </div>
          </div>
        </header>
      )}
      
      <div className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </div>
      
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-3 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-10">
          <NavItem to="/" icon={<Home size={22} />} label="Home" />
          <NavItem to="/favorites" icon={<Heart size={22} />} label="Favoritos" />
          <NavItem to="/profile" icon={<User size={22} />} label="Perfil" />
          <NavItem to="/history" icon={<Clock size={22} />} label="Histórico" />
        </nav>
      )}
    </div>
  );
};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center",
        isActive ? "text-sportler-green" : "text-gray-500"
      )}
    >
      {icon}
      <span className="text-xs mt-1 font-medium">{label}</span>
    </NavLink>
  );
};

export default Layout;
