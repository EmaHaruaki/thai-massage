import React from 'react';

const serviceData = [
  {
    name: "タイ古式マッサージ",
    description: "2500年の歴史を持つ伝統的なタイ古式マッサージ。全身のエネルギーラインに沿って施術し、心身のバランスを整えます。",
    duration: "60分 / 90分 / 120分",
    price: "¥8,000 / ¥12,000 / ¥15,000",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "アロマオイルマッサージ",
    description: "厳選された天然エッセンシャルオイルを使用し、深いリラクゼーションへと導きます。筋肉の緊張をほぐし、心身を癒します。",
    duration: "60分 / 90分 / 120分",
    price: "¥9,000 / ¥13,000 / ¥16,000",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "ハーバルボールマッサージ",
    description: "タイの伝統的なハーブを詰めた温かいボールで全身を優しく圧迫。ハーブの有効成分が肌から吸収され、デトックス効果も。",
    duration: "90分 / 120分",
    price: "¥14,000 / ¥18,000",
    image: "/herbal_ball.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "フットリフレクソロジー",
    description: "足裏の反射区を刺激し、全身の機能を活性化。むくみの解消や疲労回復に効果的です。",
    duration: "30分 / 60分",
    price: "¥5,000 / ¥8,000",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Services: React.FC = () => {
  return (
    <section id="コース・料金" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-green-900 mb-4">コース・料金</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-brown-800 max-w-2xl mx-auto">
            アユタヤでは、お客様一人ひとりのお体の状態や目的に合わせた施術をご提供いたします。
            すべてのコースは、経験豊富なセラピストによる丁寧な施術で、心身ともに深いリラクゼーションへと導きます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 border-t-4 border-gold">
                <h3 className="text-xl font-serif text-green-900 mb-2">{service.name}</h3>
                <p className="text-brown-800 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-brown-700">
                  <span>{service.duration}</span>
                  <span className="font-medium">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brown-700 italic">※ 表示価格はすべて税込みです。</p>
          <a 
            href="https://reserve.ayutaya-massage.jp" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-900 text-cream font-medium px-8 py-3 rounded-full hover:bg-green-800 transition-colors duration-300 shadow-md"
          >
            ご予約はこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;