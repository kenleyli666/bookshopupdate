import '../../app/globals.css';
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Importimg from './components/importimg';
import Image from 'next/image';
import BookFilter from './components/bookFilter';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen); 
  }

  const books = [
    {
      "id": "5",
      "title": "《金瓶梅》",
      "author": "蘭陵笑笑生",
      "price": 259,
      "publication_year": 1610,
      "genre": [
          "Fiction",
          "Adventure"
      ],
      "description": "《金瓶梅》，又名《金瓶梅詞話》，中國古代小說，四大奇書之一，中國歷史上第一部文人獨立創作的長篇中州韻白話文世情章回小說，亦是明代流行的艷情小說。作者姓名不詳，只知筆名為蘭陵笑笑生。由於詳細描述了古代市井平民的生活和社會現實，歷來研究的學說不少，統稱為金瓶梅學。",
      "cover_image": "/images/book-ch-05.png"
    },
    {
        "id": "6",
        "title": "《中國春宮祕畫》",
        "author": "唐伯虎",
        "price": 388,
        "publication_year": "明朝",
        "genre": [
            "Fantasy",
            "Adventure"
        ],
        "description": "春宮圖，又名「秘戲圖」、「春宮畫」、「春宮兒」、「春畫」、「春冊」，是描述人類性主題的傳統繪畫[1]，在東亞文化圈民間常用作性教育的啟蒙教具。",
        "cover_image": "/images/book-ch-06.png"
    }
  ];

  return (
    <> 
      <Header onClick={handleClick} isOpen={isOpen} />

      <div className='relative container top-0 mb-20 border-dotted border-orange-500 border-y-2 min-w-full truncate shadow-md shadow-gray-500/50 hover:border-purple-600 hover:border-y-4' style={{ top: '10vh', height: '80vh' }}>
        {/* import輪播圖 */}
        <div className='flex truncate' style={{ width: '100%', height: '80vh' }}>
          <Importimg className='object-cover' style={{ width: '60%', height: '80vh' }}/>
          {/* 熱門書籍 */}
          <div className='hotbooks' style={{ width: '100%', height: '80vh' }}>
            <h1 className='font-bold text-2xl underline text-center tracking-widest'>熱門書籍</h1>
            <BookFilter books={books} initialBooks={books} showFilter={false} customGridCols="md:grid-cols-2"/>
          </div>
        </div>
      </div>

      {/* 廣告優惠 */}
      <div className='max-w-full h-[22vh] mb-2 font-semibold text-xl text-sky-700 truncate'>
        <h3 className='fixed text-center pl-11'>簡介：品誠書店，您的閱讀天堂，提供各類書籍，滿足您的閱讀需求。</h3>
        <h3 className='fixed mt-7 pl-11'>活動優惠：新會員首單享9折優惠，購滿500元免運費！</h3>
        <div className='circle slogan'>
          <h1>歡迎來到</h1>
          <h2>品誠書店</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
