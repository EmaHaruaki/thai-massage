import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Thai massage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="bg-cream/10 backdrop-blur-sm p-8 rounded-lg border border-gold/30 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-4">
            タイ古式マッサージ『アユタヤ』
          </h1>
          <p className="text-xl md:text-2xl text-cream mb-8 font-light">
            伝統的なタイ古式マッサージで心身ともに癒される贅沢なひとときを
          </p>
          <a 
            href="https://reserve.ayutaya-massage.jp" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-green-900 font-medium px-8 py-3 rounded-full hover:bg-gold/90 transition-colors duration-300 shadow-lg"
          >
            ご予約はこちら
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent"></div>
    </section>
  );
};

export default Hero;