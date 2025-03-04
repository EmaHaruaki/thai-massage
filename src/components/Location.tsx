import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Store Information */}
          <div id="店舗情報">
            <h2 className="text-3xl md:text-4xl font-serif text-green-900 mb-4">店舗情報</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">住所</h3>
                  <p className="text-brown-800">〒106-0032 東京都港区六本木1-1-1 アユタヤビル 3F</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-gold w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">営業時間</h3>
                  <p className="text-brown-800">11:00 - 21:00（最終受付 20:00）</p>
                  <p className="text-brown-700 text-sm mt-1">※ 年中無休（年末年始を除く）</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gold w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">電話番号</h3>
                  <p className="text-brown-800">03-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gold w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">メールアドレス</h3>
                  <p className="text-brown-800">info@ayutaya-massage.jp</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-green-900 mb-4">アクセス</h3>
              <p className="text-brown-800 mb-2">東京メトロ日比谷線・都営大江戸線「六本木駅」4番出口より徒歩3分</p>
              <p className="text-brown-800">東京メトロ千代田線「乃木坂駅」3番出口より徒歩8分</p>
            </div>
          </div>
          
          {/* Reservation */}
          <div id="予約" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-green-900 mb-4">ご予約</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <p className="text-brown-800 mb-6">
              ご予約は、お電話またはオンライン予約システムにて承っております。
              当日のご予約も可能ですが、事前のご予約をおすすめいたします。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-gold w-6 h-6 mr-3" />
                <span className="text-xl font-medium text-green-900">03-1234-5678</span>
              </div>
              
              <div className="text-center">
                <p className="text-brown-800 mb-4">オンライン予約はこちらから</p>
                <a 
                  href="https://reserve.ayutaya-massage.jp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-green-900 font-medium px-8 py-3 rounded-md hover:bg-gold/90 transition-colors duration-300 shadow-md w-full"
                >
                  オンライン予約サイトへ
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-brown-100">
                <h3 className="font-medium text-green-900 mb-3">ご予約時のお願い</h3>
                <ul className="space-y-2 text-brown-800">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
                    <span>ご予約の際は、お名前・電話番号・ご希望日時・コースをお伝えください。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
                    <span>当日のキャンセルは、キャンセル料が発生する場合がございます。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2"></span>
                    <span>ご予約時間の10分前にご来店いただくとスムーズです。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;