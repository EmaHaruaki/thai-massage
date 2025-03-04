import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "ご予約",
    description: "お電話またはウェブサイトからご希望の日時とコースをご予約ください。",
  },
  {
    number: "02",
    title: "ご来店",
    description: "ご予約時間の10分前にご来店いただくとスムーズです。初めての方は簡単な問診票にご記入いただきます。",
  },
  {
    number: "03",
    title: "カウンセリング",
    description: "お体の状態や気になる箇所、施術の強さなどのご希望をお伺いします。",
  },
  {
    number: "04",
    title: "お着替え",
    description: "専用のウェアに着替えていただきます。貴重品はロッカーにお預けください。",
  },
  {
    number: "05",
    title: "施術",
    description: "経験豊富なセラピストによる丁寧な施術で、心身ともにリラックスしていただけます。",
  },
  {
    number: "06",
    title: "アフターケア",
    description: "施術後はハーブティーをお召し上がりいただきながら、ゆっくりとお休みください。",
  }
];

const Process: React.FC = () => {
  return (
    <section id="施術の流れ" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-green-900 mb-4">施術の流れ</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-brown-800 max-w-2xl mx-auto">
            アユタヤでの施術の流れをご紹介します。初めてのお客様もリラックスしてお過ごしいただけるよう、
            丁寧にご案内いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-gold">
              <div className="flex items-center mb-4">
                <span className="text-4xl font-serif text-gold mr-3">{step.number}</span>
                <h3 className="text-xl font-medium text-green-900">{step.title}</h3>
              </div>
              <p className="text-brown-800">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-900 text-cream p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-serif text-gold mb-4">施術を受ける際のご注意</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
              <span>妊娠中の方、重度の持病をお持ちの方は、事前にご相談ください。</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
              <span>食事の直後や飲酒後の施術はお控えください。</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
              <span>施術中に痛みや不快感を感じた場合は、遠慮なくお申し付けください。</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;