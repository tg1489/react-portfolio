import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import stackoverflow from '../images/stackoverflow.png';

export default function Footer() {
  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  const imageList = [
    {
      id: 1,
      className: 'footer-images',
      src: linkedin,
      alt: 'Linked In',
      href: 'https://www.linkedin.com/in/tony-guarino-a67572253/',
    },
    {
      id: 2,
      className: 'footer-images',
      src: github,
      alt: 'GitHub',
      href: 'https://github.com/tg1489',
    },
    {
      id: 3,
      className: 'footer-images',
      src: stackoverflow,
      alt: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/5468650/tg1489',
    },
  ];
  return (
    <div>
      {imageList.map((image) => (
        <img
          key={image.id}
          className={image.className}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.href)}
        />
      ))}
    </div>
  );
}
