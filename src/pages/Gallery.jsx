import React, { useEffect } from 'react';
import imgPhoto from '../assets/Photos';
import { useLocation } from 'react-router-dom';

const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-red-700 pb-4 text-center">
          Gallery 
        </h2>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8 px-4">
          {imgPhoto.map((photo) => (
            <div key={photo.id} className="relative group">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-lg font-semibold">{photo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
