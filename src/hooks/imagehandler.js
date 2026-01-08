import { useState, useEffect } from 'react';

function useImageHandler({ cloudinaryUrl, imagekitUrl }) {
  const [imageSrc, setImageSrc] = useState(cloudinaryUrl);  
  const [error, setError] = useState(false); 

  useEffect(() => {
    const img = new Image();
    img.src = cloudinaryUrl;

    img.onload = () => {
      setImageSrc(cloudinaryUrl);
      setError(false);
    };

    img.onerror = () => {
      setError(true);
    };
  }, [cloudinaryUrl]);  

  useEffect(() => {
    if (error && imagekitUrl) {
      setImageSrc(imagekitUrl);  
    }
  }, [error, imagekitUrl]);

  return imageSrc;
}

export default useImageHandler;