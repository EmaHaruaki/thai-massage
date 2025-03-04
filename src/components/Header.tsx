import React from 'react';
import { Leaf as Lotus, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="bg-green-900 text-cream sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Lotus className="h-8 w-8 text-gold" />
          <h1 className="ml-2 text-2xl font-serif text-gold">アユタヤ</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['コース・料金', '施術の流れ', '店舗情報', '予約', 'お問い合わせ'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-cream hover:text-gold transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cream hover:text-gold"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              {['コース・料金', '施術の流れ', '店舗情報', '予約', 'お問い合わせ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-cream hover:text-gold transition-colors duration-300 font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;