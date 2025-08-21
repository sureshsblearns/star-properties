'use client';
import Image from 'next/image';

const PropertyMap = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[200px] bg-blue-50 border rounded-md shadow-md text-center">
      <div className="text-6xl mb-4 animate-bounce">🚧</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Map Feature Under Construction
      </h2>
      <p className="text-gray-600">
        We are working to bring an interactive map soon. Stay tuned!
      </p>
    </div>
  );
};

export default PropertyMap;
