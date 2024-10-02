import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const pics = [
  { src: '/images/hl-01.jpg', alt: 'Dog', name: 'dog' },
  { src: '/images/hl-02.jpg', alt: 'Girl', name: 'girl' },
  { src: '/images/jp-01.jpg', alt: 'Pig', name: 'pig' }
];

const Product1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 800);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <Image
        src={pics[currentIndex].src}
        alt={pics[currentIndex].alt}
        width={500}
        height={500}
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
};

export default Product1;
