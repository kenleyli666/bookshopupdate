import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const pics = [
  { src: '/images/activity_img/image1.gif', alt: '1', name: '1', bgColor: '#FFDDC1' }, 
  { src: '/images/activity_img/image2.png', alt: '2', name: '2', bgColor: '#C1FFD7' }, 
  { src: '/images/activity_img/image3.png', alt: '3', name: '3', bgColor: '#C1D4FF' }, 
  { src: '/images/activity_img/image4.png', alt: '4', name: '4', bgColor: '#FFD1C1' }, 
  { src: '/images/activity_img/image5.png', alt: '5', name: '5', bgColor: '#D1FFC1' }, 
  { src: '/images/activity_img/image6.png', alt: '6', name: '6', bgColor: '#C1C1FF' }, 
  { src: '/images/activity_img/image7.png', alt: '7', name: '7', bgColor: '#FFC1DD' }, 
  { src: '/images/activity_img/image8.png', alt: '8', name: '8', bgColor: '#C1FFDD' }, 
  { src: '/images/activity_img/image9.png', alt: '9', name: '9', bgColor: '#DDC1FF' }, 
];

const Product1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const originalBgColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = pics[currentIndex].bgColor;

    return () => {
      document.body.style.backgroundColor = originalBgColor;
    };
  }, [currentIndex]);

  return (
    <div className='truncate' style={{ width: '100%', height: 'auto' }}>
      <Image
        src={pics[currentIndex].src}
        alt={pics[currentIndex].alt}
        width={1000}
        height={1000}
        unoptimized={pics[currentIndex].src.endsWith('.gif')}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Product1;
