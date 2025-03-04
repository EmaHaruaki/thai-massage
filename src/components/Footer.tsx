import React from 'react';
import { Leaf as Lotus, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="お問い合わせ" className="bg-green-900 text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Lotus className="h-8 w-8 text-gold" />
              <h2 className="ml-2 text-2xl font-serif text-gold">アユタヤ</h2>
            </div>
            <p className="text-cream/80 mb-6">
              伝統的なタイ古式マッサージで、心身ともに癒される贅沢なひとときを。
              経験豊富なセラピストが、お客様一人ひとりに合わせた施術をご提供いたします。
            </p>
          </div>
          
          <div>
            <h3 className="text-gold font-medium text-lg mb-4">コース</h3>
            <ul className="space-y-2">
              <li><a href="#コース・料金" className="text-cream/80 hover:text-gold transition-colors duration-300">タイ古式マッサージ</a></li>
              <li><a href="#コース・料金" className="text-cream/80 hover:text-gold transition-colors duration-300">アロマオイルマッサージ</a></li>
              <li><a href="#コース・料金" className="text-cream/80 hover:text-gold transition-colors duration-300">ハーバルボールマッサージ</a></li>
              <li><a href="#コース・料金" className="text-cream/80 hover:text-gold transition-colors duration-300">フットリフレクソロジー</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-medium text-lg mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="#コース・料金" className="text-cream/80 hover:text-gold transition-colors duration-300">コース・料金</a></li>
              <li><a href="#施術の流れ" className="text-cream/80 hover:text-gold transition-colors duration-300">施術の流れ</a></li>
              <li><a href="#店舗情報" className="text-cream/80 hover:text-gold transition-colors duration-300">店舗情報</a></li>
              <li><a href="#予約" className="text-cream/80 hover:text-gold transition-colors duration-300">ご予約</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-medium text-lg mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-gold w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-cream/80">〒106-0032 東京都港区六本木1-1-1 アユタヤビル 3F</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-cream/80">03-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-cream/80">info@ayutaya-massage.jp</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-cream/80">11:00 - 21:00（最終受付 20:00）</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-cream/70">&copy; 2025 タイ古式マッサージ『アユタヤ』 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;